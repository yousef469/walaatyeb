import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Soup, Salad, UtensilsCrossed, Flame, ChefHat, Sandwich, Pizza,
    Coffee, CupSoda, Wine, IceCream
} from 'lucide-react';

const menuItems = [
    // --- SOUP ---
    { id: 101, category: 'soup', price: '23', name_en: 'Lentil Soup', name_ar: 'شوربة عدس' },
    { id: 102, category: 'soup', price: '23', name_en: 'Chicken Cream Soup', name_ar: 'شوربة كريمة الدجاج' },

    // --- SALAD ---
    { id: 201, category: 'salad', price: '29', name_en: 'Tabbouleh', name_ar: 'تبولة' },
    { id: 202, category: 'salad', price: '29', name_en: 'Fattoush', name_ar: 'فتوش' },
    { id: 203, category: 'salad', price: '29', name_en: 'Rocca Salad', name_ar: 'سلطة جرجير' },
    { id: 204, category: 'salad', price: '33', name_en: 'Chicken Caesar Salad', name_ar: 'سلطة سيزر دجاج' },
    { id: 205, category: 'salad', price: '29', name_en: 'Green Salad', name_ar: 'سلطة خضراء' },
    { id: 206, category: 'salad', price: '30', name_en: 'Greek Salad', name_ar: 'سلطة يونانية' },
    { id: 207, category: 'salad', price: '36', name_en: 'Haloumi Salad', name_ar: 'سلطة حلومي' },
    { id: 208, category: 'salad', price: '48', name_en: 'Shish Tawooq Salad', name_ar: 'سلطة شيش طاووق' },

    // --- APPETIZERS ---
    { id: 301, category: 'appetizers', price: '50', name_en: 'Cold Mix Appetizers', name_ar: 'مقبلات مشكلة باردة' },
    { id: 302, category: 'appetizers', price: '50', name_en: 'Hot Mix Appetizers', name_ar: 'مقبلات مشكلة ساخنة' },
    { id: 303, category: 'appetizers', price: '24', name_en: 'Humus', name_ar: 'حمص' },
    { id: 304, category: 'appetizers', price: '29', name_en: 'Humus With Beef', name_ar: 'حمص باللحم' },
    { id: 305, category: 'appetizers', price: '24', name_en: 'Mutabbl', name_ar: 'متبل' },
    { id: 306, category: 'appetizers', price: '23', name_en: 'Baba Ganouj', name_ar: 'بابا غنوج' },
    { id: 307, category: 'appetizers', price: '38', name_en: 'Haloumi Cheese', name_ar: 'جبنة حلومي' },
    { id: 308, category: 'appetizers', price: '25', name_en: 'Kebah', name_ar: 'كبة' },
    { id: 309, category: 'appetizers', price: '22', name_en: 'Beef Sambousa', name_ar: 'سمبوسة لحم' },
    { id: 310, category: 'appetizers', price: '22', name_en: 'Cheese Rolls', name_ar: 'رقائق جبنة' },
    { id: 311, category: 'appetizers', price: '25', name_en: 'Vine Leaves', name_ar: 'ورق عنب' },
    { id: 312, category: 'appetizers', price: '25', name_en: 'Mozzarella', name_ar: 'موزاريلا' },
    { id: 313, category: 'appetizers', price: '35', name_en: 'Fatta Bazenjan', name_ar: 'فتة باذنجان' },
    { id: 314, category: 'appetizers', price: '20', name_en: 'French Fries', name_ar: 'بطاطس مقلية' },
    { id: 315, category: 'appetizers', price: '28', name_en: 'Spice Potato', name_ar: 'بطاطس حارة' },

    // --- GRILL DISHES ---
    { id: 401, category: 'grills', price: '79', name_en: 'Mixed Grills', name_ar: 'مشاوي مشكلة' },
    { id: 402, category: 'grills', price: '78', name_en: 'Meat Chops (5pc)', name_ar: 'ريش غنم (5 قطع)' },
    { id: 403, category: 'grills', price: '77', name_en: 'Awsal', name_ar: 'أوصال' },
    { id: 404, category: 'grills', price: '69', name_en: 'Shish Tawooq', name_ar: 'شيش طاووق' },
    { id: 405, category: 'grills', price: '69', name_en: 'Kebab Meat', name_ar: 'كباب لحم' },
    { id: 406, category: 'grills', price: '68', name_en: 'Kebab Chicken', name_ar: 'كباب دجاج' },
    { id: 407, category: 'grills', price: '66', name_en: 'Kebab With Yogurt Sauce', name_ar: 'كباب بالزبادي' },
    { id: 408, category: 'grills', price: '74', name_en: 'Steak', name_ar: 'ستيك' },
    { id: 409, category: 'grills', price: '68', name_en: 'Chicken Escalope', name_ar: 'اسكالوب دجاج' },
    { id: 410, category: 'grills', price: '69', name_en: 'Fajita Beef', name_ar: 'فاهيتا لحم' },
    { id: 411, category: 'grills', price: '68', name_en: 'Fajita Chicken', name_ar: 'فاهيتا دجاج' },
    { id: 412, category: 'grills', price: '60', name_en: 'Hawawshi', name_ar: 'حواوشي' },
    { id: 413, category: 'grills', price: '44', name_en: 'Grilled Chicken (Half)', name_ar: 'دجاج مشوي (نصف)' },
    { id: 414, category: 'grills', price: '24', name_en: 'Kids Meal', name_ar: 'وجبة أطفال' },

    // --- TAWAJEEN ---
    { id: 501, category: 'tawajeen', price: '57', name_en: 'Tajeen Beef', name_ar: 'طاجن لحم' },
    { id: 502, category: 'tawajeen', price: '56', name_en: 'Tajeen Kofta', name_ar: 'طاجن كفتة' },
    { id: 503, category: 'tawajeen', price: '56', name_en: 'Tajeen Shish Tawooq', name_ar: 'طاجن شيش طاووق' },

    // --- SANDWICHS ---
    { id: 601, category: 'sandwiches', price: '32', name_en: 'Haloumi', name_ar: 'حلومي' },
    { id: 602, category: 'sandwiches', price: '37', name_en: 'Shish Tawooq', name_ar: 'شيش طاووق' },
    { id: 603, category: 'sandwiches', price: '37', name_en: 'Fajita sandwich', name_ar: 'ساندوتش فاهيتا' },
    { id: 604, category: 'sandwiches', price: '37', name_en: 'Kebab Meat', name_ar: 'كباب لحم' },
    { id: 605, category: 'sandwiches', price: '35', name_en: 'Kebab Chicken', name_ar: 'كباب دجاج' },
    { id: 606, category: 'sandwiches', price: '39', name_en: 'Awsal', name_ar: 'أوصال' },
    { id: 607, category: 'sandwiches', price: '35', name_en: 'Chicken Burger', name_ar: 'برجر دجاج' },
    { id: 608, category: 'sandwiches', price: '35', name_en: 'Beef Burger', name_ar: 'برجر لحم' },
    { id: 609, category: 'sandwiches', price: '35', name_en: 'Club Sandwich', name_ar: 'كلوب ساندوتش' },
    { id: 610, category: 'sandwiches', price: '38', name_en: 'Quesadilla', name_ar: 'كيساديا' },

    // --- MANAKISH ---
    { id: 701, category: 'manakish', price: '17', name_en: 'Zaatar', name_ar: 'زعتر' },
    { id: 702, category: 'manakish', price: '23', name_en: 'Zaatar & Veg', name_ar: 'زعتر وخضار' },
    { id: 703, category: 'manakish', price: '23', name_en: 'Craft Cheese', name_ar: 'جبنة كرافت' },
    { id: 704, category: 'manakish', price: '23', name_en: 'Craft & Olives', name_ar: 'كرافت وزنون' },
    { id: 705, category: 'manakish', price: '24', name_en: 'Akawi Cheese', name_ar: 'جبنة عكاوي' },
    { id: 706, category: 'manakish', price: '25', name_en: 'Akawi & Olives', name_ar: 'عكاوي وزيتون' },
    { id: 707, category: 'manakish', price: '25', name_en: 'Akawi & Zaatar', name_ar: 'عكاوي وزعتر' },
    { id: 708, category: 'manakish', price: '25', name_en: 'Akawi & Veg', name_ar: 'عكاوي وخضار' },
    { id: 709, category: 'manakish', price: '23', name_en: 'Kashkwan', name_ar: 'قشقوان' },
    { id: 710, category: 'manakish', price: '25', name_en: 'Mixed Cheese', name_ar: 'أجبان مشكلة' },
    { id: 711, category: 'manakish', price: '26', name_en: 'Meat Manaqusha', name_ar: 'منقوشة لحم' },
    { id: 712, category: 'manakish', price: '26', name_en: 'Kashkwan & Pepperoni', name_ar: 'قشقوان وببروني' },
    { id: 713, category: 'manakish', price: '26', name_en: 'Pepperoni & Akawi', name_ar: 'ببروني وعكاوي' },
    { id: 714, category: 'manakish', price: '26', name_en: 'Sausage & Akawi', name_ar: 'سجق وعكاوي' },
    { id: 715, category: 'manakish', price: '26', name_en: 'Turkey & Akawi', name_ar: 'تركي وعكاوي' },
    { id: 716, category: 'manakish', price: '26', name_en: 'Turkey & Vegetables', name_ar: 'تركي وخضار' },
    { id: 717, category: 'manakish', price: '26', name_en: 'Turkey & Kashkwan', name_ar: 'تركي وقشقوان' },
    { id: 718, category: 'manakish', price: '26', name_en: 'Kashkwan & Pastrami', name_ar: 'قشقوان وبسطرمة' },
    { id: 719, category: 'manakish', price: '20', name_en: 'Labneh', name_ar: 'لبنة' },
    { id: 720, category: 'manakish', price: '22', name_en: 'Labneh & Zaatar', name_ar: 'لبنة وزعتر' },
    { id: 721, category: 'manakish', price: '22', name_en: 'Labneh & Vegetables', name_ar: 'لبنة وخضار' },
    { id: 722, category: 'manakish', price: '22', name_en: 'Labneh & Olives', name_ar: 'لبنة وزيتون' },
    { id: 723, category: 'manakish', price: '22', name_en: 'Labneh & Kashkwan', name_ar: 'لبنة وقشقوان' },
    { id: 724, category: 'manakish', price: '22', name_en: 'Labneh & Honey', name_ar: 'لبنة وعسل' },
    { id: 725, category: 'manakish', price: '22', name_en: 'Spinach', name_ar: 'سبانخ' },
    { id: 726, category: 'manakish', price: '24', name_en: 'Spinach & Cheese', name_ar: 'سبانخ وجبنة' },
    { id: 727, category: 'manakish', price: '22', name_en: 'Mhamra', name_ar: 'محمرة' },

    // --- PIZZA ---
    { id: 801, category: 'pizza', price: '46 / 32', name_en: 'Margarita Pizza', name_ar: 'بيتزا مارجريتا' },
    { id: 802, category: 'pizza', price: '46 / 32', name_en: 'Vegetables Pizza', name_ar: 'بيتزا خضار' },
    { id: 803, category: 'pizza', price: '49 / 35', name_en: 'Chicken Pizza', name_ar: 'بيتزا دجاج' },
    { id: 804, category: 'pizza', price: '49 / 35', name_en: 'Sausages', name_ar: 'سجق' },
    { id: 805, category: 'pizza', price: '49 / 35', name_en: 'Pepperoni', name_ar: 'ببروني' },
    { id: 806, category: 'pizza', price: '49 / 35', name_en: 'Meat', name_ar: 'لحم' },
    { id: 807, category: 'pizza', price: '49 / 35', name_en: 'Turkey', name_ar: 'تركي' },
    { id: 808, category: 'pizza', price: '49 / 37', name_en: 'Wala Atyab Pizza', name_ar: 'بيتزا ولا أطيب' },

    // --- PASTA ---
    { id: 901, category: 'pasta', price: '44', name_en: 'Fettuccine Chicken', name_ar: 'فيتوشيني دجاج' },
    { id: 902, category: 'pasta', price: '48', name_en: 'Fettuccine Shrimp', name_ar: 'فيتوشيني روبيان' },
    { id: 903, category: 'pasta', price: '44', name_en: 'Penni Arrabbiata', name_ar: 'بيني أرابياتا' },
    { id: 904, category: 'pasta', price: '44', name_en: 'Penni Pink Sauce', name_ar: 'بيني بينك صوص' },
    { id: 905, category: 'pasta', price: '44', name_en: 'Spaghetti', name_ar: 'سباغيتي' },
    { id: 906, category: 'pasta', price: '44', name_en: 'Penni Quattro Formaggi', name_ar: 'بيني قواطرو فورماجي' },
    { id: 907, category: 'pasta', price: '44', name_en: 'Penni Alfredo', name_ar: 'بيني ألفريدو' },
    { id: 908, category: 'pasta', price: '44', name_en: 'Wala Atyab Pasta', name_ar: 'باستا ولا أطيب' },

    // --- COLD DRINKS ---
    { id: 1001, category: 'cold_drinks', price: '10', name_en: 'Pepsi / Pepsi Diet', name_ar: 'بيبسي / بيبسي دايت' },
    { id: 1002, category: 'cold_drinks', price: '10', name_en: '7up / 7up Diet', name_ar: 'سفن أب / سفن دايت' },
    { id: 1003, category: 'cold_drinks', price: '10', name_en: 'Mirinda', name_ar: 'ميريندا' },
    { id: 1004, category: 'cold_drinks', price: '18', name_en: 'Perrier', name_ar: 'بيريه' },
    { id: 1005, category: 'cold_drinks', price: '22', name_en: 'Ice Tea Wala Atyab', name_ar: 'آيس تي ولا أطيب' },
    { id: 1006, category: 'cold_drinks', price: '29', name_en: 'Red Bull', name_ar: 'ريد بول' },
    { id: 1007, category: 'cold_drinks', price: '22', name_en: 'Code red', name_ar: 'كود ريد' },
    { id: 1008, category: 'cold_drinks', price: '25', name_en: 'Holsten', name_ar: 'هولستن' },
    { id: 1009, category: 'cold_drinks', price: '7', name_en: 'Nova Water (Small)', name_ar: 'مياه نوفا (صغيرة)' },
    { id: 1010, category: 'cold_drinks', price: '20', name_en: 'Nova Water (Large)', name_ar: 'مياه نوفا (كبيرة)' },

    // --- FRESH JUICES ---
    { id: 1101, category: 'fresh_juices', price: '29', name_en: 'Melon/Orange/Mango/Straw', name_ar: 'شمام/برتقال/مانجو/فراولة' },
    { id: 1102, category: 'fresh_juices', price: '30', name_en: 'Orange & Pomegranate', name_ar: 'برتقال ورمان' },
    { id: 1103, category: 'fresh_juices', price: '30', name_en: 'Banana & Milk', name_ar: 'موز وحليب' },
    { id: 1104, category: 'fresh_juices', price: '29', name_en: 'Lemon / Lemon Mint', name_ar: 'ليمون / ليمون نعناع' },
    { id: 1105, category: 'fresh_juices', price: '29', name_en: 'Watermelon', name_ar: 'حبحب' },
    { id: 1106, category: 'fresh_juices', price: '30', name_en: 'Pineapple & Pomegranate', name_ar: 'أناناس ورمان' },
    { id: 1107, category: 'fresh_juices', price: '29', name_en: 'Pomegranate', name_ar: 'رمان' },
    { id: 1108, category: 'fresh_juices', price: '30', name_en: 'Avocado', name_ar: 'أفوكادو' },
    { id: 1109, category: 'fresh_juices', price: '29', name_en: 'Kiwi', name_ar: 'كيوي' },

    // --- COCKTAILS ---
    { id: 1201, category: 'cocktails', price: '32', name_en: 'Wala Atyab Cocktail', name_ar: 'كوكتيل ولا أطيب' },
    { id: 1202, category: 'cocktails', price: '32', name_en: 'Special Cocktail', name_ar: 'كوكتيل خاص' },
    { id: 1203, category: 'cocktails', price: '32', name_en: 'French Cocktail', name_ar: 'كوكتيل فرنسي' },
    { id: 1204, category: 'cocktails', price: '32', name_en: 'Pinacolada', name_ar: 'بينكولادا' },
    { id: 1205, category: 'cocktails', price: '45', name_en: 'Saudi Champagne', name_ar: 'سعودي شامبين' },
    { id: 1206, category: 'cocktails', price: '34', name_en: 'Mojito Pomegranate', name_ar: 'موهيتو رمان' },
    { id: 1207, category: 'cocktails', price: '36', name_en: 'RedBull Mojito', name_ar: 'ريد بول موهيتو' },
    { id: 1208, category: 'cocktails', price: '32', name_en: 'Oreo Milkshake', name_ar: 'ميلك شيك أوريو' },

    // --- HOT DRINKS ---
    { id: 1301, category: 'hot_drinks', price: '22', name_en: 'Turkish Coffee', name_ar: 'قهوة تركية' },
    { id: 1302, category: 'hot_drinks', price: '25', name_en: 'French Coffee', name_ar: 'قهوة فرنسية' },
    { id: 1303, category: 'hot_drinks', price: '22', name_en: 'Espresso', name_ar: 'إسبريسو' },
    { id: 1304, category: 'hot_drinks', price: '24', name_en: 'Macchiato', name_ar: 'ماكياتو' },
    { id: 1305, category: 'hot_drinks', price: '25', name_en: 'Cappuccino', name_ar: 'كابتشينو' },
    { id: 1306, category: 'hot_drinks', price: '24', name_en: 'Coffee Latte', name_ar: 'قهوة لاتيه' },
    { id: 1307, category: 'hot_drinks', price: '20', name_en: 'American Coffee', name_ar: 'قهوة أمريكية' },
    { id: 1308, category: 'hot_drinks', price: '24', name_en: 'Hot Mocha', name_ar: 'موغا حارة' },
    { id: 1309, category: 'hot_drinks', price: '24', name_en: 'Cortado', name_ar: 'كورتادو' },
    { id: 1310, category: 'hot_drinks', price: '24', name_en: 'Flat White', name_ar: 'فلات وايت' },
    { id: 1311, category: 'hot_drinks', price: '24', name_en: 'Hot Chocolate', name_ar: 'شوكولاتة ساخنة' },
    { id: 1312, category: 'hot_drinks', price: '32', name_en: 'Tea (Pot)', name_ar: 'شاي (إبريق)' },
    { id: 1313, category: 'hot_drinks', price: '35', name_en: 'Moroccan Tea', name_ar: 'شاي مغربي' },
    { id: 1314, category: 'hot_drinks', price: '24', name_en: 'Sahlab', name_ar: 'سحلب' },
    { id: 1315, category: 'hot_drinks', price: '24', name_en: 'Lemon Ginger & Honey', name_ar: 'ليمون زنجبيل وعسل' },

    // --- COLD COFFEE ---
    { id: 1401, category: 'cold_coffee', price: '29', name_en: 'Spanish Latte', name_ar: 'سبانيش لاتيه' },
    { id: 1402, category: 'cold_coffee', price: '29', name_en: 'Ice Mocha', name_ar: 'آيس موكا' },
    { id: 1403, category: 'cold_coffee', price: '29', name_en: 'Ice Americano', name_ar: 'آيس أمريكانو' },
    { id: 1404, category: 'cold_coffee', price: '29', name_en: 'Ice Caramel Latte', name_ar: 'آيس كراميل لاتيه' },
    { id: 1405, category: 'cold_coffee', price: '29', name_en: 'Ice Frappuccino', name_ar: 'آيس فرابيتشينو' },

    // --- DESSERT ---
    { id: 1501, category: 'dessert', price: '29', name_en: 'Red Velvet', name_ar: 'ريد فيلفيت' },
    { id: 1502, category: 'dessert', price: '28', name_en: 'Blueberry Cheesecake', name_ar: 'تشيز كيك بلو بيري' },
    { id: 1503, category: 'dessert', price: '29', name_en: 'Roche Cake', name_ar: 'كيكة روشيه' },
    { id: 1504, category: 'dessert', price: '29', name_en: 'Brownies', name_ar: 'براونيز' },
    { id: 1505, category: 'dessert', price: '29', name_en: 'Tiramisu', name_ar: 'تيراميسو' },
    { id: 1506, category: 'dessert', price: '32', name_en: 'Om Ali', name_ar: 'أم علي' },
    { id: 1507, category: 'dessert', price: '29', name_en: 'Nutella Manakish', name_ar: 'مناقيش نوتيلا' },
];

const categoryIcons = {
    soup: Soup,
    salad: Salad,
    appetizers: UtensilsCrossed,
    grills: Flame,
    tawajeen: ChefHat,
    sandwiches: Sandwich,
    manakish: Pizza,
    pizza: Pizza,
    pasta: ChefHat,
    cold_drinks: CupSoda,
    fresh_juices: Wine,
    cocktails: Wine,
    hot_drinks: Coffee,
    cold_coffee: Coffee,
    dessert: IceCream,
};

const Menu = () => {
    const { t, i18n } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('grills');
    const currentLang = i18n.language;

    const categories = ['soup', 'salad', 'appetizers', 'grills', 'tawajeen', 'sandwiches', 'manakish', 'pizza', 'pasta', 'cold_drinks', 'fresh_juices', 'cocktails', 'hot_drinks', 'cold_coffee', 'dessert'];

    const filteredItems = menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark" />
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                        {t('menu.subtitle')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        {t('menu.title')}
                    </h2>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 mb-12 px-4 overflow-x-auto no-scrollbar pb-4 md:pb-0">
                    {categories.map((cat) => {
                        const Icon = categoryIcons[cat];
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="relative px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all uppercase tracking-widest group whitespace-nowrap min-w-fit flex items-center gap-2 glass-panel border-white/5 hover:border-white/20"
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategoryBg"
                                        className="absolute inset-0 bg-brand-gold rounded-xl"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <Icon className={`relative z-10 w-4 h-4 transition-colors ${activeCategory === cat ? 'text-brand-dark' : 'text-brand-gold'}`} />
                                <span className={`relative z-10 transition-colors duration-300 ${activeCategory === cat ? 'text-brand-dark' : 'text-gray-400 group-hover:text-white'}`}>
                                    {t(`menu.${cat}`)}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2, delay: index * 0.01 }}
                                className="group"
                            >
                                <div className="glass-panel p-3 rounded-lg border-white/5 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-0.5">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold leading-tight group-hover:text-brand-gold transition-colors line-clamp-2">
                                                {currentLang === 'en' ? item.name_en : item.name_ar}
                                            </h4>
                                        </div>
                                        <div className="flex items-center gap-1 shrink-0">
                                            <span className="text-brand-gold font-bold text-sm">{item.price}</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 truncate">
                                        {t(`menu.${item.category}`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-500">{t('menu.noItems')}</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Menu;
