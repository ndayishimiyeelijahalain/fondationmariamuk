import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  CreditCard,
  Smartphone,
  Building2,
  Copy,
  Check,
  Shield,
  Lock,
  Award,
  Users,
  BookOpen,
  Utensils,
  HeartPulse,
  AlertCircle,
  Sparkles,
  Accessibility,
  MapPin,
  HardHat,
  Gift,
  Star,
  Layers
} from 'lucide-react';
import { useI18n } from '../i18n';
import { useSafeT } from '../utils/i18n';

const donationTiers = [
  {
    amount: 10,
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    tag: 'everyGiftCounts',
    titleKey: 'schoolSupplies',
    impactKey: 'schoolSuppliesDesc',
    detailKey: 'schoolSuppliesDetail'
  },
  {
    amount: 25,
    icon: Utensils,
    color: 'from-amber-500 to-orange-500',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    tag: 'feedChild',
    titleKey: 'foodAssistance',
    impactKey: 'foodAssistanceDesc',
    detailKey: 'hungerFree'
  },
  {
    amount: 50,
    icon: BookOpen,
    color: 'from-emerald-500 to-emerald-600',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tag: 'mostPopular',
    titleKey: 'educationSupport',
    impactKey: 'educationSupportDesc',
    detailKey: 'educationIsWeapon'
  },
  {
    amount: 100,
    icon: HeartPulse,
    color: 'from-rose-500 to-rose-600',
    tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
    tag: 'healthMatters',
    titleKey: 'healthcareSupport',
    impactKey: 'healthcareDesc',
    detailKey: 'healthyChild'
  },
  {
    amount: 250,
    icon: Star,
    color: 'from-violet-500 to-violet-600',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-200',
    tag: 'championSponsor',
    titleKey: 'childSponsorship',
    impactKey: 'childSponsorshipDesc',
    detailKey: 'becomeGuardian'
  },
  {
    amount: 500,
    icon: Users,
    color: 'from-[#1E3A5F] to-[#0F2744]',
    tagColor: 'bg-navy-50 text-[#1E3A5F] border-blue-200',
    tag: 'communityHero',
    titleKey: 'multipleChildren',
    impactKey: 'multipleChildrenDesc',
    detailKey: 'rippleEffect'
  },
  {
    amount: 1000,
    icon: Layers,
    color: 'from-[#D4AF37] to-[#B8942E]',
    tagColor: 'bg-yellow-50 text-yellow-800 border-yellow-300',
    tag: 'legacyDonor',
    titleKey: 'communityInitiative',
    impactKey: 'communityInitiativeDesc',
    detailKey: 'legacyTransforms'
  }
];

const fundCategories = [
  { key: 'childSponsorship', icon: Heart, color: 'from-rose-500 to-rose-600' },
  { key: 'educationFund', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
  { key: 'foodFund', icon: Utensils, color: 'from-amber-500 to-amber-600' },
  { key: 'medicalFund', icon: HeartPulse, color: 'from-emerald-500 to-emerald-600' },
  { key: 'emergencyFund', icon: AlertCircle, color: 'from-red-500 to-red-600' },
  { key: 'womenFund', icon: Sparkles, color: 'from-pink-500 to-pink-600' },
  { key: 'disabilityFund', icon: Accessibility, color: 'from-purple-500 to-purple-600' },
  { key: 'communityFund', icon: MapPin, color: 'from-cyan-500 to-cyan-600' },
  { key: 'infrastructureFund', icon: HardHat, color: 'from-slate-500 to-slate-600' },
];

const otherWays = [
  { key: 'foodDonations', icon: Gift, image: '/fondation-mariam/impact-community-meal-01.jpg' },
  { key: 'clothingDonations', icon: Gift, image: '/fondation-mariam/gallery-girl-portrait-01.jpg' },
  { key: 'medicalSupplies', icon: HeartPulse, image: '/fondation-mariam/healthcare-medical-support-01.jpg' },
  { key: 'schoolMaterials', icon: BookOpen, image: '/fondation-mariam/education-supplies-01.jpg' },
  { key: 'volunteerSupport', icon: Users, image: '/fondation-mariam/volunteers-meeting-02.jpg' },
  { key: 'corporateSponsorship', icon: Building2, image: '/fondation-mariam/leadership-ceremony-01.jpg' },
];

export default function DonatePage() {
  const { t } = useI18n();
  const safeT = useSafeT();
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedFund, setSelectedFund] = useState('educationFund');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;
  const activeTier = donationTiers.find(t => t.amount === selectedAmount);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/fondation-mariam/gallery-girls-outdoor-01.jpg" alt="Children" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
              <span className="text-white/90 text-sm font-medium">{safeT('donate.securityNote', 'Security and Transparency Guaranteed')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              {safeT('donate.title', 'Your Generosity Creates Lasting Change')}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {safeT('donate.subtitle', 'Every contribution transforms lives and brings hope to the most vulnerable.')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Shield className="w-4 h-4 text-[#10B981]" />
                {safeT('donate.securePayments', 'Secure Payments')}
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                {safeT('donate.recognizedNgoSince', 'Recognized NGO Since 1978')}
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Heart className="w-4 h-4 text-rose-400" />
                {safeT('donate.hundredPercentPrograms', '100% Goes to Programs')}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Type Toggle */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setDonationType('one-time')}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${
                donationType === 'one-time' ? 'bg-white text-[#1E3A5F] shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              {safeT('donate.oneTime', 'One-Time Donation')}
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 text-sm ${
                donationType === 'monthly' ? 'bg-white text-[#1E3A5F] shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              {safeT('donate.monthly', 'Monthly Giving')}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Donation Form */}
            <div className="lg:col-span-2 space-y-8">

              {/* Impact Tiers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-[#1E3A5F]">{safeT('donate.selectAmount', 'Select Amount')}</h2>
                  <p className="text-sm text-gray-500 mt-1">{safeT('donate.seeExactlyHow', 'See exactly how your donation makes an impact')}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {/* Left: Amount Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {donationTiers.map((tier) => (
                        <motion.button
                          key={tier.amount}
                          onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(''); }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative py-3.5 px-4 rounded-xl font-bold text-lg transition-all text-left ${
                            selectedAmount === tier.amount && !customAmount
                              ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F] shadow-lg shadow-[#D4AF37]/20 ring-2 ring-[#D4AF37]'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                          }`}
                        >
                          ${tier.amount}
                          {tier.tag === 'mostPopular' && (
                            <span className="absolute -top-2 -right-1 text-xs bg-[#10B981] text-white px-2 py-0.5 rounded-full font-medium">
                              {safeT('donate.mostPopular', 'Most Popular')}
                            </span>
                          )}
                        </motion.button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">$</span>
                      <input
                        type="number"
                        min="1"
                        placeholder={safeT('donate.customAmount', 'Custom Amount')}
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors font-medium"
                      />
                    </div>
                  </div>

                  {/* Right: Impact Description */}
                  <div className="p-6 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {activeTier && !customAmount ? (
                        <motion.div
                          key={activeTier.amount}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${activeTier.tagColor}`}>
                            {safeT(`donate.${activeTier.tag}`, activeTier.tag)}
                          </span>
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeTier.color} flex items-center justify-center mb-4 shadow-lg`}>
                            <activeTier.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                            ${activeTier.amount} — {safeT(`donate.${activeTier.titleKey}`, activeTier.titleKey)}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {safeT(`donate.${activeTier.impactKey}`, '')}
                          </p>
                          <p className="text-[#D4AF37] text-xs font-medium italic">
                            "{safeT(`donate.${activeTier.detailKey}`, '')}"
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="custom"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center mb-4 shadow-lg mx-auto">
                            <Heart className="w-6 h-6 text-white" fill="white" />
                          </div>
                          <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                            {customAmount
                              ? `$${customAmount} ${safeT('donate.donation', 'Donation')}`
                              : safeT('donate.enterAmount', 'Enter an amount')}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {safeT('donate.everyDollarGoes', 'Every dollar goes directly to supporting children and women in Burundi.')}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Donate Button */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <button className="w-full py-4 bg-gradient-to-r from-[#1E3A5F] to-[#0F2744] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:from-[#0F2744] hover:to-[#1E3A5F] transition-all flex items-center justify-center gap-3">
                    <Heart className="w-5 h-5" fill="white" />
                    {safeT('donate.donateNow', 'Donate Now')}
                    {donationType === 'monthly' ? ` ${safeT('donate.perMonth', '/ month')}` : ''}
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3" />
                    {safeT('donate.secureAndEncrypted', 'Secure and encrypted. 100% goes to programs.')}
                  </p>
                </div>
              </motion.div>

              {/* Fund Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                <h2 className="text-lg font-semibold text-[#1E3A5F] mb-2">{safeT('donate.categories', 'Donation Categories')}</h2>
                <p className="text-sm text-gray-500 mb-6">{safeT('donate.chooseAreaDirect', 'Choose a specific area to direct your donation')}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {fundCategories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedFund(cat.key)}
                      className={`group p-4 rounded-xl border transition-all text-left ${
                        selectedFund === cat.key
                          ? 'border-[#D4AF37] bg-[#D4AF37]/5 shadow-md'
                          : 'border-gray-100 bg-gray-50 hover:border-[#D4AF37]/40 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform`}>
                        <cat.icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="font-medium text-[#1E3A5F] text-xs leading-tight">{safeT(`donate.${cat.key}`, cat.key)}</p>
                      {selectedFund === cat.key && (
                        <span className="inline-block mt-1 w-4 h-0.5 bg-[#D4AF37] rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Bank Transfer Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0F2744] rounded-2xl p-6 text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5D76E] flex items-center justify-center shadow-lg">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{safeT('donate.bankTransfer', 'Bank Transfer')}</h3>
                      <p className="text-white/60 text-xs">{safeT('donate.internationalTransfersAccepted', 'International transfers accepted')}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <BankRow 
                      label={safeT('donate.bankName', 'Bank')} 
                      value="BCB — Banque Commerciale du Burundi" 
                      copiedField={copiedField} 
                      fieldId="bank" 
                      onCopy={copyToClipboard} 
                    />
                    <BankRow 
                      label={safeT('donate.currency', 'Currency')} 
                      value="USD" 
                      copiedField={copiedField} 
                      fieldId="currency" 
                      onCopy={copyToClipboard} 
                    />
                    <BankRow 
                      label={safeT('donate.accountNumber', 'Account Number')} 
                      value="20311600016" 
                      copiedField={copiedField} 
                      fieldId="account" 
                      onCopy={copyToClipboard} 
                    />
                    <BankRow 
                      label={safeT('donate.swiftCode', 'SWIFT/BIC Code')} 
                      value="BCBUBIBI" 
                      copiedField={copiedField} 
                      fieldId="swift" 
                      onCopy={copyToClipboard} 
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white/60 text-xs">
                      {safeT('donate.pleaseIncludeName', 'Please include your name and "Fondation Mariam Donation" as the payment reference.')}
                    </p>
                  </div>
                </div>
              </motion.div>
              // Dans la section Bank Transfer Info, ajouter un second bloc pour BIF :
<div className="mt-6 pt-6 border-t border-white/10">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#10B981] to-[#34D399] flex items-center justify-center shadow-lg">
      <Building2 className="w-5 h-5 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-white/90 text-sm">{safeT('donate.bankTransferBIF', 'Bank Transfer (BIF)')}</h4>
      <p className="text-white/60 text-xs">{safeT('donate.internationalTransfersAccepted', 'International transfers accepted')}</p>
    </div>
  </div>

  <div className="space-y-3 text-sm">
    <BankRow 
      label={safeT('donate.bankNameBIF', 'Bank')} 
      value={safeT('donate.bankNameBIFValue', 'Banque de Crédit de Bujumbura (BCB)')}
      copiedField={copiedField} 
      fieldId="bankBIF" 
      onCopy={copyToClipboard} 
    />
    <BankRow 
      label={safeT('donate.currency', 'Currency')} 
      value={safeT('donate.currencyBIF', 'BIF')}
      copiedField={copiedField} 
      fieldId="currencyBIF" 
      onCopy={copyToClipboard} 
    />
    <BankRow 
      label={safeT('donate.accountNumber', 'Account Number')} 
      value={safeT('donate.accountNumberBIFValue', 'XXXXXXXXXX')}
      copiedField={copiedField} 
      fieldId="accountBIF" 
      onCopy={copyToClipboard} 
    />
    <BankRow 
      label={safeT('donate.swiftCode', 'SWIFT/BIC Code')} 
      value={safeT('donate.swiftCodeBIFValue', 'BCBUBIBI')}
      copiedField={copiedField} 
      fieldId="swiftBIF" 
      onCopy={copyToClipboard} 
    />
  </div>
</div>

// Ajouter aussi la section Lumicash :
<div className="mt-6 pt-6 border-t border-white/10">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg">
      <Smartphone className="w-5 h-5 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-white/90 text-sm">{safeT('donate.lumicash', 'Lumicash')}</h4>
      <p className="text-white/60 text-xs">{safeT('donate.lumicashDesc', 'Mobile payment via Lumicash')}</p>
    </div>
  </div>

  <div className="space-y-3 text-sm">
    <BankRow 
      label={safeT('donate.lumicashNumber', 'Lumicash Number')} 
      value={safeT('donate.lumicashNumberValue', '79 97 64 45')}
      copiedField={copiedField} 
      fieldId="lumicash" 
      onCopy={copyToClipboard} 
    />
  </div>
</div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                <p className="text-sm font-semibold text-[#1E3A5F] mb-4">{safeT('donate.trustAndImpact', 'Trust & Impact')}</p>
                <div className="space-y-3">
                  <TrustItem icon={Shield} text={safeT('donate.securePayments', 'Secure Payments')} />
                  <TrustItem icon={Award} text={safeT('donate.recognizedNgoSince', 'Recognized NGO Since 1978')} />
                  <TrustItem icon={Heart} text={safeT('donate.hundredPercentPrograms', '100% Goes to Programs')} />
                  <TrustItem icon={Lock} text={safeT('donate.noHiddenFees', 'No hidden fees or deductions')} />
                  <TrustItem icon={Users} text={safeT('donate.humanitarianService', '46+ years of humanitarian service')} />
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-gradient-to-br from-[#D4AF37]/10 to-[#10B981]/10 rounded-2xl border border-[#D4AF37]/20 p-6 overflow-hidden"
              >
                <div className="absolute top-2 right-3 text-6xl text-[#D4AF37]/10 font-serif leading-none">"</div>
                <p className="text-[#1E3A5F] font-medium text-sm leading-relaxed relative z-10">
                  {safeT('donate.transparencyNote', '100% of your donation goes directly to programs.')}
                </p>
                <div className="mt-3 pt-3 border-t border-[#D4AF37]/20">
                  <p className="text-xs text-gray-500">Ord. Min. N°550/936 du 05/06/2020</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-3">
              {safeT('donate.otherWays', 'Other Ways to Help')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {safeT('donate.otherWaysSubtitle', 'There are many ways to support our mission beyond financial donations.')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherWays.map((way, idx) => (
              <motion.div
                key={way.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden relative"
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src={way.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
                    <way.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A5F] mb-1">{safeT(`donate.${way.key}`, way.key)}</h3>
                  <p className="text-sm text-gray-500">{safeT(`donate.${way.key}Desc`, '')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BankRow({
  label, value, copiedField, fieldId, onCopy
}: {
  label: string; value: string; copiedField: string | null; fieldId: string;
  onCopy: (text: string, field: string) => void;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-t border-white/10">
      <span className="text-white/60 text-xs">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-mono font-semibold text-xs">{value}</span>
        <button
          onClick={() => onCopy(value, fieldId)}
          className="p-1 hover:bg-white/10 rounded transition-colors"
          title="Copy"
        >
          {copiedField === fieldId
            ? <Check className="w-3.5 h-3.5 text-[#10B981]" />
            : <Copy className="w-3.5 h-3.5 text-white/60" />
          }
        </button>
      </div>
    </div>
  );
}

function TrustItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-[#10B981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-[#10B981]" />
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}
