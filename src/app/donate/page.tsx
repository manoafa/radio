'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  CheckCircle,
  Shield,
  Users,
  Radio,
  Globe,
  Target
} from 'lucide-react';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('mobile');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [5000, 10000, 25000, 50000, 100000, 250000];
  const paymentMethods = [
    { id: 'mobile', name: 'Mobile Money', icon: Smartphone, description: 'Airtel Money, Orange Money, MVola' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, American Express' },
    { id: 'bank', name: 'Bank Transfer', icon: Banknote, description: 'Direct bank transfer' }
  ];

  const impactAreas = [
    {
      title: 'Equipment & Technology',
      description: 'Maintain and upgrade our broadcasting equipment',
      icon: Radio,
      color: 'from-primary-500 to-navy-500'
    },
    {
      title: 'Program Production',
      description: 'Create high-quality Christian content and programs',
      icon: Globe,
      color: 'from-navy-500 to-primary-500'
    },
    {
      title: 'Community Outreach',
      description: 'Support local churches and community programs',
      icon: Users,
      color: 'from-primary-500 to-navy-500'
    },
    {
      title: 'Youth Ministry',
      description: 'Develop programs for young people',
      icon: Target,
      color: 'from-navy-500 to-primary-500'
    }
  ];

  const handleDonate = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('mg-MG', {
      style: 'currency',
      currency: 'MGA',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-dark-900 pt-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-gray-950 dark:text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">Thank You!</h1>
          <p className="text-gray-300 mb-6">
            Your donation has been received. Thank you for supporting our ministry 
            and helping us spread the Gospel across Madagascar.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setSelectedAmount(null);
              setCustomAmount('');
            }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Make Another Donation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4">
            Support Our Ministry
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your generous donations help us maintain our equipment, create quality 
            programs, and reach more people with the Gospel across Madagascar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-800 rounded-xl p-8 border border-navy-500/30"
          >
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">Make a Donation</h2>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-4">Select Amount (MGA)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'border-primary-500 bg-primary-500/20 text-primary-400'
                        : 'border-gray-600 bg-dark-700 text-gray-300 hover:border-primary-500/50'
                    }`}
                  >
                    {formatAmount(amount)}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full p-4 bg-dark-700 border border-gray-600 rounded-lg text-gray-950 dark:text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  MGA
                </span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-4">Payment Method</h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-4 ${
                      selectedMethod === method.id
                        ? 'border-primary-500 bg-primary-500/20'
                        : 'border-gray-600 bg-dark-700 hover:border-primary-500/50'
                    }`}
                  >
                    <method.icon className={`w-6 h-6 ${
                      selectedMethod === method.id ? 'text-primary-400' : 'text-gray-400'
                    }`} />
                    <div className="text-left">
                      <p className={`font-semibold ${
                        selectedMethod === method.id ? 'text-primary-400' : 'text-gray-950 dark:text-white'
                      }`}>
                        {method.name}
                      </p>
                      <p className="text-sm text-gray-400">{method.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Summary */}
            {(selectedAmount || customAmount) && (
              <div className="mb-8 p-4 bg-navy-500/20 rounded-lg border border-navy-500/30">
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-2">Donation Summary</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Amount:</span>
                  <span className="text-xl font-bold text-primary-400">
                    {formatAmount(selectedAmount || parseInt(customAmount) || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-300">Payment Method:</span>
                  <span className="text-gray-950 dark:text-white">
                    {paymentMethods.find(m => m.id === selectedMethod)?.name}
                  </span>
                </div>
              </div>
            )}

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount || isProcessing}
              className="w-full py-4 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Heart className="w-6 h-6" />
                  <span>Donate Now</span>
                </>
              )}
            </button>

            {/* Security Notice */}
            <div className="mt-6 flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>Your donation is secure and encrypted</span>
            </div>
          </motion.div>

          {/* Impact Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">How Your Donation Helps</h2>
              <div className="space-y-4">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-r from-navy-500/10 to-primary-500/10 p-6 rounded-xl border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <area.icon className="w-6 h-6 text-gray-950 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">{area.title}</h3>
                        <p className="text-gray-300">{area.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Monthly Giving */}
            <div className="bg-gradient-to-r from-primary-500/20 to-navy-500/20 p-6 rounded-xl border border-primary-500/30">
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">Consider Monthly Giving</h3>
              <p className="text-gray-300 mb-4">
                Monthly donations provide consistent support for our ministry and help us plan for the future.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-navy-500 to-primary-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Set Up Monthly Giving
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-dark-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">Other Ways to Give</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong>Bank Transfer:</strong></p>
                <p>Account: Radio Madagasikara ho an&apos;i Kristy</p>
                <p>Bank: Bank of Madagascar</p>
                <p>Account Number: 1234567890</p>
                <p className="mt-4"><strong>Mobile Money:</strong></p>
                <p>Airtel Money: +261 34 12 345 67</p>
                <p>Orange Money: +261 34 12 345 68</p>
                <p>MVola: +261 34 12 345 69</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
