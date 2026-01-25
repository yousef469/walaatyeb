import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();

    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=21.555657606809795,39.13224252554113";
    const whatsappUrl = "https://wa.me/966501533416";

    return (
        <footer id="contact" className="py-20 px-6 bg-brand-dark/80 relative">
            <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* Logo / Brand */}
                    <div className="space-y-6">
                        <img src="/logo.png" alt={t('branding.logoAlt')} className="w-24 h-24 object-contain mx-auto md:mx-0" />
                        <p className="text-gray-500 max-w-xs mx-auto md:mx-0">
                            {t('about.description').substring(0, 100)}...
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{t('contact.phone')}</p>
                                <a href="tel:0501533416" className="text-white hover:text-brand-gold transition-colors font-medium">0501533416</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{t('contact.hours')}</p>
                                <p className="text-white font-medium">{t('contact.hours_val')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Location / Action */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-brand-gold">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{t('contact.address')}</p>
                                <p className="text-white font-medium">{t('contact.address_val')}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-3 w-full md:w-fit"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>{t('contact.phone')}</span>
                            </a>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-gold text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                                {t('contact.map')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-xs uppercase tracking-[0.3em]">
                    <p>&copy; {new Date().getFullYear()} Wala Atyab. {t('common.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
