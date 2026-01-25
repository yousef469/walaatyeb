import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    const navLinks = [
        { href: '#', label: t('nav.home') },
        { href: '#about', label: t('nav.about') },
        { href: '#menu', label: t('nav.menu') },
        { href: '#contact', label: t('nav.contact') },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            >
                <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 md:px-8 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt={t('branding.logoAlt')} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <div className="hidden sm:block text-left">
                            <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase block leading-none">Wala Atyab</span>
                            <span className="text-[7px] md:text-[8px] text-brand-gold font-bold uppercase tracking-[0.3em] opacity-80">{t('branding.subtitle')}</span>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="hover:text-brand-gold transition-colors">{link.label}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="hidden sm:flex items-center gap-2 hover:text-brand-gold transition-colors font-medium text-sm"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{t('common.switchLang')}</span>
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 md:hidden pt-28 px-6 bg-brand-dark/95 backdrop-blur-xl"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-black uppercase tracking-tighter text-white hover:text-brand-gold"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => {
                                    toggleLanguage();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="mt-8 flex items-center justify-center gap-3 text-brand-gold font-bold uppercase tracking-widest text-lg"
                            >
                                <Globe className="w-6 h-6" />
                                <span>{t('common.switchLang')}</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
