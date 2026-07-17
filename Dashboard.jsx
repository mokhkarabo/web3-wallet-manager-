import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import WalletCard from '../components/WalletCard';
import WalletDialog from '../components/WalletDialog';
import { Plus, Search } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { mockWallets } from '../utils/mockData';

const Dashboard = () => {
  const [wallets, setWallets] = useState([]);
  const [filteredWallets, setFilteredWallets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingWallet, setEditingWallet] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load mock wallets - will be replaced with API call
    const savedWallets = localStorage.getItem('wallets');
    if (savedWallets) {
      setWallets(JSON.parse(savedWallets));
    } else {
      setWallets(mockWallets);
      localStorage.setItem('wallets', JSON.stringify(mockWallets));
    }
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = wallets.filter(
        (wallet) =>
          wallet.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          wallet.blockchain.toLowerCase().includes(searchQuery.toLowerCase()) ||
          wallet.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredWallets(filtered);
    } else {
      setFilteredWallets(wallets);
    }
  }, [searchQuery, wallets]);

  const handleAddWallet = () => {
    setEditingWallet(null);
    setDialogOpen(true);
  };

  const handleEditWallet = (wallet) => {
    setEditingWallet(wallet);
    setDialogOpen(true);
  };

  const handleSaveWallet = (walletData) => {
    if (editingWallet) {
      // Update existing wallet
      const updatedWallets = wallets.map((w) =>
        w.id === editingWallet.id ? { ...w, ...walletData } : w
      );
      setWallets(updatedWallets);
      localStorage.setItem('wallets', JSON.stringify(updatedWallets));
      toast({
        title: "Wallet updated!",
        description: "Your wallet has been updated successfully.",
      });
    } else {
      // Add new wallet
      const newWallet = {
        id: Date.now().toString(),
        ...walletData,
        createdAt: new Date().toISOString(),
      };
      const updatedWallets = [...wallets, newWallet];
      setWallets(updatedWallets);
      localStorage.setItem('wallets', JSON.stringify(updatedWallets));
      toast({
        title: "Wallet added!",
        description: "Your new wallet has been added successfully.",
      });
    }
    setDialogOpen(false);
    setEditingWallet(null);
  };

  const handleDeleteWallet = (walletId) => {
    const updatedWallets = wallets.filter((w) => w.id !== walletId);
    setWallets(updatedWallets);
    localStorage.setItem('wallets', JSON.stringify(updatedWallets));
    toast({
      title: "Wallet deleted",
      description: "The wallet has been removed from your collection.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wallets</h1>
          <p className="text-gray-600">Manage your Web3 wallet addresses across multiple blockchains</p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search wallets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={handleAddWallet}>
            <Plus className="w-4 h-4 mr-2" />
            Add Wallet
          </Button>
        </div>

        {/* Wallets Grid */}
        {filteredWallets.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              {searchQuery ? 'No wallets found matching your search.' : 'No wallets yet. Add your first wallet!'}
            </p>
            {!searchQuery && (
              <Button onClick={handleAddWallet}>
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Wallet
              </Button>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWallets.map((wallet) => (
              <WalletCard
                key={wallet.id}
                wallet={wallet}
                onEdit={handleEditWallet}
                onDelete={handleDeleteWallet}
              />
            ))}
          </div>
        )}
      </div>

      {/* Wallet Dialog */}
      <WalletDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setEditingWallet(null);
        }}
        onSave={handleSaveWallet}
        wallet={editingWallet}
      />
    </div>
  );
};

export default Dashboard;
