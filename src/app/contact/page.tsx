'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

const EMAIL = 'contact@rmk.mg';
const PHONE_DISPLAY = '+261 34 49 642 01';
const PHONE_TEL = '+261344964201';
const MAPS_LINK =
  "https://www.google.com/maps/place/Radio+Madagasikara+ho+an'i+Kristy+(RMK)/@-18.9170228,47.5317639,17z/data=!3m1!4b1!4m6!3m5!1s0x21f0879aaaaaaa9f:0xc2f34a6de675b1f2!8m2!3d-18.9170228!4d47.5317639!16s%2Fg%2F11csp7m5r1";
const MAPS_EMBED =
  'https://www.google.com/maps?q=-18.9170228,47.5317639&z=17&hl=en&output=embed';

const INQUIRY_VALUES = [
  'general',
  'programming',
  'donation',
  'partnership',
  'media',
  'other',
] as const;

type InquiryValue = (typeof INQUIRY_VALUES)[number];

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState<'' | InquiryValue>('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const inquiryKeys = useMemo(
    () =>
      INQUIRY_VALUES.map((v) => ({
        value: v,
        labelKey: `contact.form.inquiry.${v}` as const,
      })),
    [],
  );

  const faqKeys = useMemo(
    () =>
      ([
        ['contact.faq.q1', 'contact.faq.a1'],
        ['contact.faq.q2', 'contact.faq.a2'],
        ['contact.faq.q3', 'contact.faq.a3'],
        ['contact.faq.q4', 'contact.faq.a4'],
      ]) as const,
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiryLabel = inquiry ? t(`contact.form.inquiry.${inquiry}`) : '';
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry: ${inquiryLabel}`,
      '',
      message,
      newsletter ? `\n\n[${t('contact.form.newsletter')}]` : '',
    ].join('\n');

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setName('');
    setEmail('');
    setInquiry('');
    setSubject('');
    setMessage('');
    setNewsletter(false);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto text-center rounded-2xl border border-gray-200 dark:border-navy-500/30 bg-white dark:bg-dark-800 p-10 shadow-xl"
        >
          <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">
            {t('contact.form.success.title')}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">{t('contact.form.success.body')}</p>
          <button
            type="button"
            onClick={resetForm}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-navy-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {t('contact.form.success.back')}
          </button>
          <Link
            href="/"
            className="block mt-6 text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            {t('nav.home')}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-blue-100 to-orange-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-16 md:py-24">
        <div className="absolute inset-0 animated-bg opacity-50 dark:opacity-80" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text">
              {t('contact.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-white/70 dark:bg-dark-800/80 px-4 py-2 text-sm font-medium text-navy-800 dark:text-gray-200">
                <Sparkles className="w-4 h-4 text-primary-500" />
                {t('contact.hero.badge1')}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-500/30 bg-white/70 dark:bg-dark-800/80 px-4 py-2 text-sm font-medium text-navy-800 dark:text-gray-200">
                <MessageCircle className="w-4 h-4 text-navy-500" />
                {t('contact.hero.badge2')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-navy-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display gradient-text mb-4">
              {t('contact.info.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">{t('contact.info.lead')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="group rounded-2xl border-2 border-gray-200 dark:border-navy-500/30 bg-gray-50 dark:bg-dark-900 p-8 text-center hover:border-primary-500/50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-navy-500 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-1">{t('contact.info.email.title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t('contact.info.email.hint')}</p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold break-all">{EMAIL}</p>
            </motion.a>

            <motion.a
              href={`tel:${PHONE_TEL}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group rounded-2xl border-2 border-gray-200 dark:border-navy-500/30 bg-gray-50 dark:bg-dark-900 p-8 text-center hover:border-primary-500/50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-navy-500 to-primary-500 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-1">{t('contact.info.phone.title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t('contact.info.phone.hint')}</p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">{PHONE_DISPLAY}</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border-2 border-gray-200 dark:border-navy-500/30 bg-gray-50 dark:bg-dark-900 p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-navy-500 flex items-center justify-center mb-4 shadow-md">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-1">{t('contact.info.address.title')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t('contact.info.address.hint')}</p>
              <p className="text-gray-800 dark:text-gray-200">
                {t('contact.info.address.line1')}
                <br />
                {t('contact.info.address.line2')}
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-primary-600 dark:text-primary-400 font-semibold hover:underline"
              >
                {t('contact.map.directions')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form + map / times */}
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-navy-500/30 p-6 shadow-sm md:p-10"
            >
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">{t('contact.form.title')}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">{t('contact.form.lead')}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-700 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-700 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                  />
                </div>
                <div>
                  <label htmlFor="contact-inquiry" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('contact.form.inquiry')} *
                  </label>
                  <select
                    id="contact-inquiry"
                    required
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value as '' | InquiryValue)}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-700 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                  >
                    <option value="">{t('contact.form.inquiry.placeholder')}</option>
                    {inquiryKeys.map(({ value, labelKey }) => (
                      <option key={value} value={value}>
                        {t(labelKey)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    id="contact-subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-700 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-700 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 resize-y min-h-[120px]"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-1 rounded border-gray-400 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{t('contact.form.newsletter')}</span>
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-navy-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.form.submit')}
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-500">{t('contact.form.note')}</p>
              </form>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="rounded-2xl border border-gray-200 dark:border-navy-500/30 bg-white dark:bg-dark-800 overflow-hidden shadow-sm">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-navy-500/30 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <h3 className="font-bold text-gray-950 dark:text-white">{t('contact.map.title')}</h3>
                </div>
                <div className="aspect-[4/3] w-full bg-gray-200 dark:bg-dark-700">
                  <iframe
                    title={t('contact.map.office')}
                    src={MAPS_EMBED}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {t('contact.map.directions')}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-navy-500/30 bg-white dark:bg-dark-800 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-navy-500" />
                  <h3 className="font-bold text-gray-950 dark:text-white">{t('contact.times.title')}</h3>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between gap-4 border-b border-gray-100 dark:border-navy-500/20 pb-3">
                    <span className="text-gray-600 dark:text-gray-400">{t('contact.times.general')}</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right">{t('contact.times.general.value')}</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-gray-100 dark:border-navy-500/20 pb-3">
                    <span className="text-gray-600 dark:text-gray-400">{t('contact.times.urgent')}</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right">{t('contact.times.urgent.value')}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-gray-600 dark:text-gray-400">{t('contact.times.partnership')}</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right">{t('contact.times.partnership.value')}</span>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-navy-500/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display gradient-text mb-4">{t('contact.faq.title')}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t('contact.faq.subtitle')}</p>
          </motion.div>
          <div className="space-y-4">
            {faqKeys.map(([qKey, aKey], i) => (
              <motion.div
                key={qKey}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-gray-200 dark:border-navy-500/30 bg-gray-50 dark:bg-dark-900 p-6"
              >
                <h3 className="font-bold text-gray-950 dark:text-white mb-2">{t(qKey)}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t(aKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
