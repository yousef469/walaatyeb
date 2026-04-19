import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Coffee, Bean, Heart } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Coffee className="w-5 h-5 text-brand-gold" />
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                            {t('about.subtitle')}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        {t('about.title')}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        {t('about.description')}
                    </p>
                    <div className="flex gap-4">
                        <div className="glass-panel px-6 py-4 rounded-xl text-center flex-1 border-white/5 hover:border-brand-gold/30 transition-colors group">
                            <Bean className="w-6 h-6 text-brand-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <h3 className="text-brand-gold font-black text-2xl uppercase">100%</h3>
                            <p className="text-[10px] uppercase text-gray-500 tracking-[0.2em]">{t('about.organic')}</p>
                        </div>
                        <div className="glass-panel px-6 py-4 rounded-xl text-center flex-1 border-white/5 hover:border-brand-gold/30 transition-colors group">
                            <Heart className="w-6 h-6 text-brand-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
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
                    <div className="glass-panel rounded-3xl relative overflow-hidden group border-white/10">
                        {/* Decorative blur elements */}
                        <div className="w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl absolute -top-10 -right-10 group-hover:scale-110 transition-transform duration-700" />
                        <div className="w-48 h-48 bg-white/5 rounded-full blur-2xl absolute -bottom-10 -left-10 group-hover:scale-110 transition-transform duration-700" />

                        {/* Coffee Image */}
                        <div className="relative z-10 p-8">
                            <motion.img
                                src="/coffee.png"
                                alt={t('about.coffeeAlt')}
                                className="w-full h-auto max-h-[350px] object-contain mx-auto drop-shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />
                        </div>

                        {/* Quote overlay at bottom */}
                        <div className="relative z-10 px-8 pb-8 pt-4">
                            <div className="border-t border-white/10 pt-6">
                                <p className="text-brand-gold font-medium italic text-center leading-relaxed">
                                    {t('about.quote')}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
