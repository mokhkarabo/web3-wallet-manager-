import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Wallet, Lock, Database } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      title: 'Multi-Chain Support',
      description: 'Manage wallets across Ethereum, Bitcoin, Solana, Polygon, and more blockchains.',
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Secure Authentication',
      description: 'JWT-based authentication ensures your wallet data remains private and secure.',
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: 'Organized Storage',
      description: 'Label, categorize, and add notes to keep your wallets organized.',
    },
    {
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: 'Privacy First',
      description: 'Your wallet addresses are stored securely with enterprise-grade encryption.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Manage Your Web3 Wallets
            <span className="block text-blue-600 mt-2">All in One Place</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Keep track of all your cryptocurrency wallet addresses across multiple blockchains.
            Secure, organized, and always accessible.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8">Get Started Free</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Web3 Wallet Manager?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Organized?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Join thousands of Web3 users managing their wallets efficiently
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Create Free Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
