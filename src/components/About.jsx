import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h2 className="text-brand-gold font-bold uppercase tracking-widest mb-4">
                        {t('about.subtitle')}
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        {t('about.title')}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        {t('about.description')}
                    </p>
                    <div className="flex gap-4">
                        <div className="glass-panel px-6 py-4 rounded-xl text-center flex-1 border-white/5">
                            <h3 className="text-brand-gold font-black text-2xl uppercase">100%</h3>
                            <p className="text-[10px] uppercase text-gray-500 tracking-[0.2em]">{t('about.organic')}</p>
                        </div>
                        <div className="glass-panel px-6 py-4 rounded-xl text-center flex-1 border-white/5">
                            <h3 className="text-brand-gold font-black text-2xl uppercase">{t('about.quality')}</h3>
                            <p className="text-[10px] uppercase text-gray-500 tracking-[0.2em]">{t('about.crafted')}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 relative"
                >
                    <div className="aspect-square glass-panel rounded-3xl relative overflow-hidden flex items-center justify-center group">
                        {/* Decorative circles representing the cafe vibe */}
                        <div className="w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl absolute -top-10 -right-10 group-hover:scale-110 transition-transform duration-700" />
                        <div className="w-48 h-48 bg-white/5 rounded-full blur-2xl absolute -bottom-10 -left-10 group-hover:scale-110 transition-transform duration-700" />

                        <div className="z-10 text-center px-12">
                            <span className="text-8xl mb-6 block">☕</span>
                            <p className="text-brand-gold font-medium italic">{t('about.quote')}</p>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default About;
