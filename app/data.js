
export const response ={
    settings: {
        name: 'X,Y,Z',       
        email: '',
        phone: '',
        city: '',
        facebook: '',        
        whatsapp: '',        
        youtube: '',
        twetter: '',
        telegram: '',        
        instagram: '',       
        linkedin: '',
        theme: 'dark',       
        image: 'default.png',
        contact: false,
        chat: true,
        chat_files: true,
        bookings: true,
        deactive: false,
        login: true,
        register: true,
        language: 'ar',
        active: true
    },
    categories: [
        {
            id: 1,
            name: 'هوندا',
            description: 'German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 to 1918 and again from 1933 to 1945.',
            image: '/media/data/brand_1.png',
            products: JSON.stringify([
                {
                    id: 1,
                    name: 'أحدث سيارات الجيل الجديد - هوندا 2023 التفاصيل',
                    location: 'Egypt - Benha',
                    phone: '+201099188572',
                    new_day_price: 450,
                    old_day_price: 500,
                    new_week_price: 1200,
                    old_week_price: 1500,
                    new_month_price: 3000,
                    old_month_price: 3400,
                    views: 151,
                    whatsapp: '+2001221083507',
                    telegram: 'CoderProf',
                    allow_bookings: true,
                    images: [
                        ['image', '/media/data/car_1.png'],
                        ['image', '/media/data/car_2.png'],
                        ['image', '/media/data/car_3.png'],
                        ['image', '/media/data/car_4.png'],
                        ['image', '/media/data/car_5.png'],
                        ['image', '/media/data/car_6.png'],
                    ],
                    image: '/media/data/car_1.png',
                    date: '2023-12-20 10:30:52',
                    included: [{'key': 'chairs', 'value': 'From Italian'}],
                    details: 'Honda Car',
                    system: 'Automatic',
                    speed: 500,
                    chairs: 7,
                    brand: 'BMW'
                }
            ])
        }
    ],
    products: [
        {
            id: 1,
            name: 'أحدث سيارات الجيل الجديد - هوندا 2023 التفاصيل',
            location: 'Egypt - Benha',
            phone: '+201099188572',
            new_day_price: 450,
            old_day_price: 500,
            new_week_price: 1200,
            old_week_price: 1500,
            new_month_price: 3000,
            old_month_price: 3400,
            views: 151,
            whatsapp: '+2001221083507',
            telegram: 'CoderProf',
            allow_bookings: true,
            images: [
                ['image', '/media/data/car_1.png'],
                ['image', '/media/data/car_2.png'],
                ['image', '/media/data/car_3.png'],
                ['image', '/media/data/car_4.png'],
                ['image', '/media/data/car_5.png'],
                ['image', '/media/data/car_6.png'],
            ],
            image: '/media/data/car_1.png',
            date: '2023-12-20 10:30:52',
            included: [{'key': 'chairs', 'value': 'From Italian'}],
            details: 'Honda Car',
            system: 'Automatic',
            speed: 500,
            chairs: 7,
            brand: 'BMW'
        }
    ],
    blogs: [
        {
            id: 1,
            title: 'The first blog in this website - so can you here me or not thanks for you',
            views: 20,
            likes: 0,
            images: [
                ['image', '/media/data/blog_1.png']
            ],
            date: '2023-12-20 11:37:10',
            content: 'The first blog in this website - so can you here me or not thanks for you',
            description: 'The first blog in this website - so can you here me or not thanks for you'
        }
    ]
}
