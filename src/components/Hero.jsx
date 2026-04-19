import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = ({ heroImage = null }) => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/hero-bg.png" alt="Cafe Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/80 z-10" />
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-gold opacity-5 rounded-full blur-[120px] z-20" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-gold opacity-5 rounded-full blur-[120px] z-20" />

            <div className="max-w-5xl mx-auto px-6 text-center z-30">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex justify-center"
                >
                    <img src="/logo.png" alt={t('branding.logoAlt')} className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(230,194,77,0.3)]" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black mb-6 leading-tight"
                >
                    <span className="text-brand-gold uppercase">{t('hero.title')}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <button className="btn-primary" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                        {t('hero.cta')}
                    </button>
                    <button className="btn-outline">
                        {t('nav.about')}
                    </button>
                </motion.div>
            </div>

            {/* Floating Coffee Beans animation or simple circles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-brand-gold/20 rounded-full blur-xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        width: `${20 + i * 10}px`,
                        height: `${20 + i * 10}px`,
                        left: `${10 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                    }}
                />
            ))}
        </section>
    );
};

export default Hero;
