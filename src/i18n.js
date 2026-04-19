import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            branding: {
                subtitle: 'Restaurant & Lounge',
                logoAlt: 'Wala Atyab Logo',
            },
            nav: {
                home: 'Home',
                menu: 'Menu',
                about: 'About',
                contact: 'Contact',
            },
            hero: {
                title: 'WALA ATYAB: RESTAURANT & LOUNGE',
                subtitle: 'Experience a unique dining journey that blends sophistication with authentic flavors.',
                cta: 'Explore Menu',
            },
            menu: {
                title: 'Our Menu',
                subtitle: 'Culinary Excellence',
                noItems: 'No items found',
                itemNumber: 'No. {{number}}',
                soup: 'Soup',
                salad: 'Salad',
                appetizers: 'Appetizers',
                grills: 'Grill Dishes',
                tawajeen: 'Tawajeen',
                sandwiches: 'Sandwiches',
                manakish: 'Manakish',
                pizza: 'Pizza',
                pasta: 'Pasta',
                cold_drinks: 'Cold Drinks',
                fresh_juices: 'Fresh Juices',
                cocktails: 'Cocktails',
                hot_drinks: 'Hot Drinks',
                cold_coffee: 'Cold Coffee',
                dessert: 'Dessert',
            },
            lounge: {
                subtitle: 'Unwind & Relax',
                title: 'The Lounge Experience',
                description: 'Step into our elegantly designed lounge where ambient lighting, comfortable seating, and curated music create the perfect atmosphere for relaxation. Whether you\'re meeting friends or enjoying a quiet evening, our lounge offers the ideal setting with premium shisha and signature beverages.',
                quote: 'Every moment spent in good company is a moment cherished forever.',
                quoteAuthor: 'Wala Atyab',
                bgAlt: 'Wala Atyab Lounge Interior',
                feature1: 'Premium Shisha',
                feature2: 'Live Ambiance',
                feature3: 'Evening Vibes',
            },
            about: {
                title: 'Our Story',
                subtitle: 'The Heart of Wala Atyab',
                coffeeAlt: 'Premium Coffee',
                description: 'Wala Atyab is more than just a restaurant and lounge; it is a sanctuary for those who appreciate the finer notes of life. From our delicious grills to our specialty coffee, every detail is designed to evoke warmth and inspiration.',
                organic: 'Organic',
                crafted: 'Hand Crafted',
                quality: 'Quality',
                quote: '"Quality is never an accident; it is always the result of high intention."',
            },
            contact: {
                title: 'Contact Us',
                phone: 'WhatsApp / Call',
                hours: 'Opening Hours',
                hours_val: 'All days: 4:00 PM - 2:30 AM',
                address: 'Location',
                address_val: 'Saudia City Compound, Al-Khalidiya, Jeddah',
                map: 'View on Google Maps',
            },
            common: {
                switchLang: 'العربية',
                copyright: 'Crafted with Passion.',
            }
        }
    },
    ar: {
        translation: {
            branding: {
                subtitle: 'مطعم و لاونج',
                logoAlt: 'شعار ولا أطيب',
            },
            nav: {
                home: 'الرئيسية',
                menu: 'القائمة',
                about: 'عنّا',
                contact: 'اتصل بنا',
            },
            hero: {
                title: 'ولا أطيب: مطعم ولاونج',
                subtitle: 'استمتع بتجربة طعام فريدة تجمع بين الرقي والمذاق الأصيل.',
                cta: 'استكشف القائمة',
            },
            menu: {
                title: 'قائمتنا',
                subtitle: 'التميز في الطهي',
                noItems: 'لا توجد عناصر',
                itemNumber: 'رقم {{number}}',
                soup: 'شوربة',
                salad: 'سلطات',
                appetizers: 'مقبلات',
                grills: 'مشاوي',
                tawajeen: 'طواجن',
                sandwiches: 'ساندوتشات',
                manakish: 'مناقيش',
                pizza: 'بيتزا',
                pasta: 'باستا',
                cold_drinks: 'مشروبات باردة',
                fresh_juices: 'عصائر طازجة',
                cocktails: 'كوكتيلات',
                hot_drinks: 'مشروبات ساخنة',
                cold_coffee: 'قهوة باردة',
                dessert: 'حلويات',
            },
            lounge: {
                subtitle: 'استرخِ واستمتع',
                title: 'تجربة اللاونج',
                description: 'ادخل إلى اللاونج المصمم بأناقة حيث الإضاءة المحيطة والمقاعد المريحة والموسيقى المختارة بعناية تخلق الأجواء المثالية للاسترخاء. سواء كنت تلتقي بالأصدقاء أو تستمتع بمساء هادئ، يوفر لك اللاونج الإعداد المثالي مع الشيشة الفاخرة والمشروبات المميزة.',
                quote: 'كل لحظة تقضيها بصحبة الأحبة هي لحظة تُحتفى بها إلى الأبد.',
                quoteAuthor: 'ولا أطيب',
                bgAlt: 'ديكور داخلي لـ ولا أطيب',
                feature1: 'شيشة فاخرة',
                feature2: 'أجواء حية',
                feature3: 'أجواء المساء',
            },
            about: {
                title: 'قصتنا',
                subtitle: 'قلب ولا أطيب',
                coffeeAlt: 'قهوة ممتازة',
                description: 'ولا أطيب هو أكثر من مجرد مطعم ولاونج؛ إنه ملاذ لأولئك الذين يقدرون تفاصيل الحياة الراقية. من مشاوينا اللذيذة إلى قهوتنا المختصة، تم تصميم كل تفصيل لبعث الدفء والإلهام.',
                organic: 'عضوي',
                crafted: 'يُحضر يدوياً',
                quality: 'جودة',
                quote: '"الجودة ليست صدفة أبداً؛ إنها دائماً نتيجة نوايا عالية."',
            },
            contact: {
                title: 'اتصل بنا',
                phone: 'واتساب / اتصال',
                hours: 'أوقات العمل',
                hours_val: 'يومياً: 4:00 مساءً - 2:30 صباحاً',
                address: 'الموقع',
                address_val: 'مجمع مدينة السعودية، الخالدية، جدة',
                map: 'عرض على خرائط جوجل',
            },
            common: {
                switchLang: 'English',
                copyright: 'صُنع بكل حب.',
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
