import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Edit2, Trash2, Copy, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const WalletCard = ({ wallet, onEdit, onDelete }) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const getBlockchainExplorer = (blockchain, address) => {
    const explorers = {
      'Ethereum': `https://etherscan.io/address/${address}`,
      'Bitcoin': `https://blockchair.com/bitcoin/address/${address}`,
      'Polygon': `https://polygonscan.com/address/${address}`,
      'Solana': `https://solscan.io/account/${address}`,
      'Binance Smart Chain': `https://bscscan.com/address/${address}`,
    };
    return explorers[blockchain] || '#';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{wallet.label}</CardTitle>
            <Badge variant="secondary">{wallet.blockchain}</Badge>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={() => onEdit(wallet)}>
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => onDelete(wallet.id)}>
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500 mb-1">Address</p>
            <div className="flex items-center space-x-2">
              <code className="text-xs bg-gray-100 px-2 py-1 rounded flex-1 overflow-hidden text-ellipsis">
                {wallet.address}
              </code>
              <Button variant="outline" size="icon" onClick={copyToClipboard}>
                <Copy className="w-4 h-4" />
              </Button>
              <a href={getBlockchainExplorer(wallet.blockchain, wallet.address)} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          {wallet.notes && (
            <div>
              <p className="text-sm text-gray-500 mb-1">Notes</p>
              <p className="text-sm">{wallet.notes}</p>
            </div>
          )}
          <div className="text-xs text-gray-400">
            Added: {new Date(wallet.createdAt).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
