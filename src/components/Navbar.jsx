import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();

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

                {/* Desktop Links - Hidden on Mobile */}
                <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-brand-gold transition-colors">{link.label}</a>
                    ))}
                </div>

                <div className="flex items-center">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 hover:text-brand-gold transition-colors font-bold uppercase tracking-widest text-[10px] md:text-xs px-4 py-2 rounded-full glass-panel"
                    >
                        <Globe className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                        <span>{t('common.switchLang')}</span>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
