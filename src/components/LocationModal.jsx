import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LocationModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const googleMapsUrl = "https://www.google.com/maps/place/Wala+Atyab+%7C+%D9%88%D9%84%D8%A7+%D8%A3%D8%B7%D9%8A%D8%A8+%7C+%D9%85%D8%B7%D8%B9%D9%85+%D9%88+%D9%84%D8%A7%D9%88%D9%86%D8%AC/@21.5554431,39.1295818,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3db31fa00615b:0xb9b7c8cac8a34eb9!8m2!3d21.5554431!4d39.1321567!16s%2Fg%2F11w2fhpwxd?entry=ttu&g_ep=EgoyMDI1MDQxNi4wIKXMDSoASAFQAw%3D%3D";

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[800px] md:h-[600px] glass-panel rounded-2xl z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{t('contact.address')}</h3>
                                    <p className="text-sm text-gray-400">{t('contact.address_val')}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Map */}
                        <div className="flex-1 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.7803311229086!2d39.12958177465835!3d21.55544306948205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db31fa00615b%3A0xb9b7c8cac8a34eb9!2zV2FsYSBBdHlhYiB8INmF2LfYudmFINmI2YTYpyDYo9i32YrYqA!5e0!3m2!1sen!2ssa!4v1776573905422!5m2!1sen!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[30%]"
                            />
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/10">
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-2 w-full"
                            >
                                <Navigation className="w-5 h-5" />
                                {t('contact.map')}
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LocationModal;
