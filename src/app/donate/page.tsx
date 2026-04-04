'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
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
  const { t, language } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('mobile');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [5000, 10000, 25000, 50000, 100000, 250000];
  const paymentMethods = useMemo(
    () => [
      {
        id: 'mobile' as const,
        icon: Smartphone,
        nameKey: 'donate.method.mobile.name',
        descKey: 'donate.method.mobile.desc',
      },
      {
        id: 'card' as const,
        icon: CreditCard,
        nameKey: 'donate.method.card.name',
        descKey: 'donate.method.card.desc',
      },
      {
        id: 'bank' as const,
        icon: Banknote,
        nameKey: 'donate.method.bank.name',
        descKey: 'donate.method.bank.desc',
      },
    ],
    [],
  );

  const impactAreas = useMemo(
    () => [
      {
        key: 'equipment',
        titleKey: 'donate.impact.equipment.title',
        descKey: 'donate.impact.equipment.desc',
        icon: Radio,
        color: 'from-primary-500 to-navy-500',
      },
      {
        key: 'production',
        titleKey: 'donate.impact.production.title',
        descKey: 'donate.impact.production.desc',
        icon: Globe,
        color: 'from-navy-500 to-primary-500',
      },
      {
        key: 'outreach',
        titleKey: 'donate.impact.outreach.title',
        descKey: 'donate.impact.outreach.desc',
        icon: Users,
        color: 'from-primary-500 to-navy-500',
      },
      {
        key: 'youth',
        titleKey: 'donate.impact.youth.title',
        descKey: 'donate.impact.youth.desc',
        icon: Target,
        color: 'from-navy-500 to-primary-500',
      },
    ],
    [],
  );

  const handleDonate = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const formatAmount = (amount: number) => {
    const locale = language === 'fr' ? 'fr-FR' : language === 'mg' ? 'mg-MG' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'MGA',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-gray-950 dark:text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">{t('donate.success.title')}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {t('donate.success.message')}
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setSelectedAmount(null);
              setCustomAmount('');
            }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            {t('donate.success.another')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4">
            {t('donate.hero.title')}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('donate.hero.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-800 rounded-xl p-8 border border-gray-200 dark:border-navy-500/30 shadow-sm dark:shadow-none"
          >
            <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">{t('donate.form.title')}</h2>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-4">{t('donate.form.amountLabel')}</h3>
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
                        : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-300 hover:border-primary-500/50'
                    }`}
                  >
                    {formatAmount(amount)}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="number"
                  placeholder={t('donate.form.customPlaceholder')}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full p-4 bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary-500 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  MGA
                </span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-4">{t('donate.form.paymentMethod')}</h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center space-x-4 ${
                      selectedMethod === method.id
                        ? 'border-primary-500 bg-primary-500/20'
                        : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-dark-700 hover:border-primary-500/50'
                    }`}
                  >
                    <method.icon className={`w-6 h-6 ${
                      selectedMethod === method.id ? 'text-primary-400' : 'text-gray-600 dark:text-gray-400'
                    }`} />
                    <div className="text-left">
                      <p className={`font-semibold ${
                        selectedMethod === method.id ? 'text-primary-400' : 'text-gray-950 dark:text-white'
                      }`}>
                        {t(method.nameKey)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t(method.descKey)}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Summary */}
            {(selectedAmount || customAmount) && (
              <div className="mb-8 p-4 bg-navy-500/10 dark:bg-dark-700 rounded-lg border border-navy-200 dark:border-navy-500/40">
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white mb-2">{t('donate.summary.title')}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{t('donate.summary.amount')}</span>
                  <span className="text-xl font-bold text-primary-400">
                    {formatAmount(selectedAmount || parseInt(customAmount) || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700 dark:text-gray-300">{t('donate.summary.method')}</span>
                  <span className="text-gray-950 dark:text-white">
                    {t(paymentMethods.find((m) => m.id === selectedMethod)?.nameKey ?? 'donate.method.mobile.name')}
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
                  <span>{t('common.processing')}</span>
                </>
              ) : (
                <>
                  <Heart className="w-6 h-6" />
                  <span>{t('donate.button.now')}</span>
                </>
              )}
            </button>

            {/* Security Notice */}
            <div className="mt-6 flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4" />
              <span>{t('donate.security')}</span>
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
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">{t('donate.impact.title')}</h2>
              <div className="space-y-4">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={area.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <area.icon className="w-6 h-6 text-gray-950 dark:text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-2">{t(area.titleKey)}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{t(area.descKey)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Monthly Giving */}
            <div className="bg-orange-50 dark:bg-dark-800 p-6 rounded-xl border border-primary-200 dark:border-primary-500/30">
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">{t('donate.monthly.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t('donate.monthly.body')}
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-navy-500 to-primary-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                {t('donate.monthly.cta')}
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">{t('donate.other.title')}</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>{t('donate.other.bankHeading')}</strong></p>
                <p>{t('donate.other.accountName')}</p>
                <p>{t('donate.other.bankName')}</p>
                <p>{t('donate.other.accountNumber')}</p>
                <p className="mt-4"><strong>{t('donate.other.mobileHeading')}</strong></p>
                <p>{t('donate.other.airtel')}</p>
                <p>{t('donate.other.orange')}</p>
                <p>{t('donate.other.mvola')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
