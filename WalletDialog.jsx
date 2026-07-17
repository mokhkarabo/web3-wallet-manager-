import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const blockchains = [
  'Ethereum',
  'Bitcoin',
  'Polygon',
  'Solana',
  'Binance Smart Chain',
  'Avalanche',
  'Arbitrum',
  'Optimism',
];

const WalletDialog = ({ open, onClose, onSave, wallet }) => {
  const [formData, setFormData] = useState({
    label: '',
    address: '',
    blockchain: 'Ethereum',
    notes: '',
  });

  useEffect(() => {
    if (wallet) {
      setFormData({
        label: wallet.label,
        address: wallet.address,
        blockchain: wallet.blockchain,
        notes: wallet.notes || '',
      });
    } else {
      setFormData({
        label: '',
        address: '',
        blockchain: 'Ethereum',
        notes: '',
      });
    }
  }, [wallet, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{wallet ? 'Edit Wallet' : 'Add New Wallet'}</DialogTitle>
          <DialogDescription>
            {wallet ? 'Update your wallet information' : 'Add a new wallet address to your collection'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="label">Wallet Label *</Label>
              <Input
                id="label"
                placeholder="e.g., Main ETH Wallet"
                value={formData.label}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="blockchain">Blockchain *</Label>
              <Select
                value={formData.blockchain}
                onValueChange={(value) => setFormData({ ...formData, blockchain: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {blockchains.map((chain) => (
                    <SelectItem key={chain} value={chain}>
                      {chain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Wallet Address *</Label>
              <Input
                id="address"
                placeholder="0x..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Add any notes about this wallet..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">{wallet ? 'Update' : 'Add'} Wallet</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WalletDialog;
