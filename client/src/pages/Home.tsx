import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Wand2, Scroll, Hammer, Sparkles, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663520257716/DNE79buairgXkPfzUpbZYC/eso-hero-dark-WzTZjFqxLW9WGi3zJKSEaP.webp';
const MAP_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663520257716/DNE79buairgXkPfzUpbZYC/eso-map-bg-T87QEmSpSpsqY6nomtuPpu.webp';
const CHARACTER_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663520257716/DNE79buairgXkPfzUpbZYC/eso-character-bg-ns5JVUnviqF7xzy6QRgMDQ.webp';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');
  };

  const features = [
    {
      icon: MapPin,
      title: t('features.maps.title'),
      description: t('features.maps.description'),
      image: MAP_IMAGE,
    },
    {
      icon: Wand2,
      title: t('features.builds.title'),
      description: t('features.builds.description'),
      image: CHARACTER_IMAGE,
    },
    {
      icon: Scroll,
      title: t('features.quests.title'),
      description: t('features.quests.description'),
    },
    {
      icon: Hammer,
      title: t('features.crafting.title'),
      description: t('features.crafting.description'),
    },
    {
      icon: Sparkles,
      title: t('features.sets.title'),
      description: t('features.sets.description'),
    },
    {
      icon: BookOpen,
      title: t('features.skills.title'),
      description: t('features.skills.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0F0F0F]" />
              </div>
              <span className="text-xl font-bold text-[#D4AF37]">{t('app.title')}</span>
            </motion.div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#D4AF37]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all duration-300"
              >
                {i18n.language === 'de' ? 'EN' : 'DE'}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4"
            >
              <button
                onClick={toggleLanguage}
                className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all duration-300"
              >
                {i18n.language === 'de' ? 'English' : 'Deutsch'}
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-transparent to-[#0F0F0F]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-[#E8E8E8] mb-4 font-light">
              {t('hero.subtitle')}
            </p>
            <p className="text-base md:text-lg text-[#B0B0B0] mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0F0F0F] hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 font-semibold"
            >
              {t('buttons.getStarted')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all duration-300"
            >
              {t('buttons.learnMore')}
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-[#0F0F0F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
              Hauptfunktionen
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] mx-auto" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#2A2A2A] hover:border-[#D4AF37] transition-all duration-300 overflow-hidden group h-full">
                    <div className="relative h-40 overflow-hidden bg-[#2A2A2A]">
                      {feature.image && (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#D4AF37]/50 transition-all duration-300">
                          <Icon className="w-6 h-6 text-[#0F0F0F]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#E8E8E8] mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-[#B0B0B0] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 md:py-32 bg-gradient-to-r from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] border-t border-[#2A2A2A]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
            Bereit zu erkunden?
          </h2>
          <p className="text-lg text-[#B0B0B0] mb-8">
            Starten Sie jetzt und optimieren Sie Ihr ESO-Spielerlebnis mit ESO Helper.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0F0F0F] hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300 font-semibold"
          >
            {t('buttons.explore')}
          </Button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] border-t border-[#2A2A2A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-[#D4AF37] font-bold mb-4">ESO Helper</h3>
              <p className="text-[#B0B0B0] text-sm">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="text-[#E8E8E8] font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-[#B0B0B0]">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">{t('nav.maps')}</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">{t('nav.builds')}</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">{t('nav.quests')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#E8E8E8] font-semibold mb-4">Sprache</h4>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all duration-300 text-sm"
              >
                {i18n.language === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
              </button>
            </div>
          </div>
          <div className="border-t border-[#2A2A2A] pt-8 text-center text-[#B0B0B0] text-sm">
            <p>{t('footer.copyright')}</p>
            <p className="mt-2">{t('footer.disclaimer')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
