import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Wine, Music, Sparkles } from 'lucide-react';

const Lounge = () => {
    const { t } = useTranslation();

    const features = [
        { icon: Wine, label: t('lounge.feature1') },
        { icon: Music, label: t('lounge.feature2') },
        { icon: Sparkles, label: t('lounge.feature3') },
    ];

    return (
        <section id="lounge" className="relative min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/lounge-vibe.png" 
                    alt={t('lounge.bgAlt')} 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50 z-10" />
            </div>

            {/* Decorative Blur Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[150px] z-20" />

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-30">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-brand-gold font-bold uppercase tracking-widest mb-4 text-sm">
                                {t('lounge.subtitle')}
                            </h2>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight">
                                {t('lounge.title')}
                            </h1>
                        </div>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                            {t('lounge.description')}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-panel px-4 py-6 rounded-xl text-center border-white/10"
                                >
                                    <feature.icon className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                                    <p className="text-xs uppercase tracking-wider text-gray-400">{feature.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <div className="glass-panel p-8 rounded-3xl border-white/10 relative">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl" />
                            
                            <blockquote className="relative z-10">
                                <span className="text-6xl text-brand-gold/30 font-serif leading-none">"</span>
                                <p className="text-2xl font-medium italic text-white leading-relaxed -mt-4">
                                    {t('lounge.quote')}
                                </p>
                                <footer className="mt-6 text-brand-gold text-sm uppercase tracking-widest">
                                    — {t('lounge.quoteAuthor')}
                                </footer>
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Lounge;
