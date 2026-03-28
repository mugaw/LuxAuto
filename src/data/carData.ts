export interface CarModel {
  id: string;
  name: string;
  year: number;
  description: string;
  specs: {
    horsepower: string;
    acceleration: string;
    topSpeed: string;
    engine: string;
  };
  image: string;
  category: 'sedan' | 'suv' | 'coupe' | 'electric' | 'sports';
}

export interface Brand {
  id: string;
  name: string;
  founded: number;
  country: string;
  description: string;
  logo: string;
  models: CarModel[];
}

export const brands: Brand[] = [
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    founded: 1926,
    country: 'Germany',
    description: 'The inventor of the automobile, Mercedes-Benz has been setting the standard for luxury and innovation for nearly a century. From the iconic Silver Arrows to the modern S-Class, every vehicle represents the pinnacle of German engineering.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png',
    models: [
      {
        id: 'mercedes-300sl',
        name: '300 SL Gullwing',
        year: 1954,
        description: 'The original supercar, famous for its distinctive gullwing doors and racing pedigree.',
        specs: {
          horsepower: '240 HP',
          acceleration: '7.4s',
          topSpeed: '260 km/h',
          engine: '3.0L Inline-6'
        },
        image: '/images/gallery_coupe.jpg',
        category: 'sports'
      },
      {
        id: 'mercedes-w124',
        name: 'W124 E-Class',
        year: 1985,
        description: 'A legend of build quality and engineering excellence that defined the modern Mercedes.',
        specs: {
          horsepower: '177 HP',
          acceleration: '8.5s',
          topSpeed: '210 km/h',
          engine: '2.6L Inline-6'
        },
        image: '/images/gallery_sedan.jpg',
        category: 'sedan'
      },
      {
        id: 'mercedes-sclass',
        name: 'S-Class W223',
        year: 2023,
        description: 'The flagship of luxury, featuring cutting-edge technology and unparalleled comfort.',
        specs: {
          horsepower: '503 HP',
          acceleration: '4.1s',
          topSpeed: '250 km/h',
          engine: '4.0L V8 Biturbo'
        },
        image: '/images/performance_car_urban.jpg',
        category: 'sedan'
      }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    founded: 1916,
    country: 'Germany',
    description: 'Bayerische Motoren Werke has been the ultimate driving machine for over a century. Known for their perfect 50:50 weight distribution and driver-focused engineering, BMW creates vehicles that connect driver to road like no other.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png',
    models: [
      {
        id: 'bmw-2002',
        name: '2002 Turbo',
        year: 1974,
        description: 'Europe\'s first turbocharged production car and the birth of the ultimate driving machine.',
        specs: {
          horsepower: '170 HP',
          acceleration: '7.0s',
          topSpeed: '211 km/h',
          engine: '2.0L Turbo Inline-4'
        },
        image: '/images/gallery_sedan.jpg',
        category: 'sedan'
      },
      {
        id: 'bmw-e30',
        name: 'E30 M3',
        year: 1986,
        description: 'The motorsport legend that defined the M division and became the benchmark for sports sedans.',
        specs: {
          horsepower: '200 HP',
          acceleration: '6.7s',
          topSpeed: '235 km/h',
          engine: '2.3L Inline-4'
        },
        image: '/images/gallery_coupe.jpg',
        category: 'coupe'
      },
      {
        id: 'bmw-m5',
        name: 'M5 Competition',
        year: 2023,
        description: 'The supercar disguised as a luxury sedan, delivering breathtaking performance.',
        specs: {
          horsepower: '617 HP',
          acceleration: '3.3s',
          topSpeed: '305 km/h',
          engine: '4.4L V8 Biturbo'
        },
        image: '/images/car_in_motion_street.jpg',
        category: 'sedan'
      }
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    founded: 1931,
    country: 'Germany',
    description: 'From the iconic 911 to the revolutionary Taycan, Porsche represents the perfect fusion of performance and everyday usability. Every Porsche is built to be driven, on the track and on the road.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Porsche_logo.svg/1200px-Porsche_logo.svg.png',
    models: [
      {
        id: 'porsche-930',
        name: '930 Turbo',
        year: 1975,
        description: 'The original Widowmaker, the first 911 Turbo that defined an era of supercars.',
        specs: {
          horsepower: '260 HP',
          acceleration: '5.2s',
          topSpeed: '250 km/h',
          engine: '3.0L Turbo Flat-6'
        },
        image: '/images/gallery_coupe.jpg',
        category: 'sports'
      },
      {
        id: 'porsche-993',
        name: '911 Carrera 993',
        year: 1995,
        description: 'The last air-cooled 911, considered by many enthusiasts as the purest Porsche ever made.',
        specs: {
          horsepower: '272 HP',
          acceleration: '5.4s',
          topSpeed: '270 km/h',
          engine: '3.6L Flat-6'
        },
        image: '/images/front_quarter_low_light.jpg',
        category: 'sports'
      },
      {
        id: 'porsche-911',
        name: '911 GT3',
        year: 2023,
        description: 'The ultimate expression of Porsche motorsport technology for the road.',
        specs: {
          horsepower: '502 HP',
          acceleration: '3.4s',
          topSpeed: '318 km/h',
          engine: '4.0L Flat-6'
        },
        image: '/images/hero_night_drive.jpg',
        category: 'sports'
      }
    ]
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    founded: 1939,
    country: 'Italy',
    description: 'The prancing horse represents the pinnacle of Italian automotive passion. From Formula 1 dominance to road-going masterpieces, Ferrari creates vehicles that stir the soul and quicken the pulse.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ferrari_logo.svg/1200px-Ferrari_logo.svg.png',
    models: [
      {
        id: 'ferrari-308',
        name: '308 GTB',
        year: 1975,
        description: 'The V8 Ferrari that became a cultural icon and defined the modern sports car.',
        specs: {
          horsepower: '255 HP',
          acceleration: '6.5s',
          topSpeed: '255 km/h',
          engine: '2.9L V8'
        },
        image: '/images/gallery_coupe.jpg',
        category: 'sports'
      },
      {
        id: 'ferrari-f40',
        name: 'F40',
        year: 1987,
        description: 'The last Ferrari commissioned by Enzo himself, the first production car to break 200 mph.',
        specs: {
          horsepower: '471 HP',
          acceleration: '4.1s',
          topSpeed: '324 km/h',
          engine: '2.9L Twin-Turbo V8'
        },
        image: '/images/city_tunnel_drive.jpg',
        category: 'sports'
      },
      {
        id: 'ferrari-296',
        name: '296 GTB',
        year: 2023,
        description: 'The future of Ferrari, combining hybrid technology with V6 turbo power.',
        specs: {
          horsepower: '819 HP',
          acceleration: '2.9s',
          topSpeed: '330 km/h',
          engine: '3.0L V6 Hybrid'
        },
        image: '/images/test_drive_road.jpg',
        category: 'sports'
      }
    ]
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    founded: 1963,
    country: 'Italy',
    description: 'Born from a rivalry with Ferrari, Lamborghini creates the most dramatic and audacious supercars on the planet. Each model is a statement of pure automotive theater.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Lamborghini_logo.svg/1200px-Lamborghini_logo.svg.png',
    models: [
      {
        id: 'lambo-countach',
        name: 'Countach LP400',
        year: 1974,
        description: 'The original poster car, the Countach defined the wedge-shaped supercar forever.',
        specs: {
          horsepower: '375 HP',
          acceleration: '5.4s',
          topSpeed: '309 km/h',
          engine: '4.0L V12'
        },
        image: '/images/gallery_coupe.jpg',
        category: 'sports'
      },
      {
        id: 'lambo-diablo',
        name: 'Diablo VT',
        year: 1993,
        description: 'The 1990s icon that carried Lamborghini into the modern era with all-wheel drive.',
        specs: {
          horsepower: '492 HP',
          acceleration: '4.5s',
          topSpeed: '325 km/h',
          engine: '5.7L V12'
        },
        image: '/images/performance_car_urban.jpg',
        category: 'sports'
      },
      {
        id: 'lambo-huracan',
        name: 'Huracán Tecnica',
        year: 2023,
        description: 'The perfect balance of track performance and road usability.',
        specs: {
          horsepower: '631 HP',
          acceleration: '3.2s',
          topSpeed: '325 km/h',
          engine: '5.2L V10'
        },
        image: '/images/car_in_motion_street.jpg',
        category: 'sports'
      }
    ]
  },
  {
    id: 'audi',
    name: 'Audi',
    founded: 1909,
    country: 'Germany',
    description: 'Vorsprung durch Technik—Advancement through Technology. Audi pioneered all-wheel drive in production cars with the legendary Quattro and continues to innovate with cutting-edge design and engineering.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi_logo.svg/1200px-Audi_logo.svg.png',
    models: [
      {
        id: 'audi-quattro',
        name: 'Quattro',
        year: 1983,
        description: 'The car that revolutionized rallying and brought AWD to the masses.',
        specs: {
          horsepower: '200 HP',
          acceleration: '7.1s',
          topSpeed: '220 km/h',
          engine: '2.1L Turbo Inline-5'
        },
        image: '/images/gallery_sedan.jpg',
        category: 'sedan'
      },
      {
        id: 'audi-rs2',
        name: 'RS2 Avant',
        year: 1994,
        description: 'The Porsche-developed wagon that created the performance estate segment.',
        specs: {
          horsepower: '311 HP',
          acceleration: '4.8s',
          topSpeed: '262 km/h',
          engine: '2.2L Turbo Inline-5'
        },
        image: '/images/gallery_suv.jpg',
        category: 'suv'
      },
      {
        id: 'audi-r8',
        name: 'R8 V10 Performance',
        year: 2023,
        description: 'The everyday supercar, combining Lamborghini performance with Audi usability.',
        specs: {
          horsepower: '602 HP',
          acceleration: '3.1s',
          topSpeed: '330 km/h',
          engine: '5.2L V10'
        },
        image: '/images/headlight_detail_dark.jpg',
        category: 'sports'
      }
    ]
  },
  {
    id: 'tesla',
    name: 'Tesla',
    founded: 2003,
    country: 'USA',
    description: 'The company that proved electric cars can be desirable, fast, and practical. Tesla continues to push the boundaries of sustainable transportation and autonomous driving technology.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png',
    models: [
      {
        id: 'tesla-roadster',
        name: 'Roadster',
        year: 2008,
        description: 'The car that started the EV revolution, based on the Lotus Elise chassis.',
        specs: {
          horsepower: '248 HP',
          acceleration: '3.9s',
          topSpeed: '201 km/h',
          engine: 'Electric Motor'
        },
        image: '/images/gallery_coupe.jpg',
        category: 'electric'
      },
      {
        id: 'tesla-models',
        name: 'Model S Plaid',
        year: 2023,
        description: 'The fastest accelerating production sedan, redefining what electric cars can do.',
        specs: {
          horsepower: '1,020 HP',
          acceleration: '1.99s',
          topSpeed: '322 km/h',
          engine: 'Tri-Motor Electric'
        },
        image: '/images/gallery_ev.jpg',
        category: 'electric'
      },
      {
        id: 'tesla-cybertruck',
        name: 'Cybertruck',
        year: 2024,
        description: 'The most radical truck design ever, built for the future of utility vehicles.',
        specs: {
          horsepower: '845 HP',
          acceleration: '2.6s',
          topSpeed: '210 km/h',
          engine: 'Tri-Motor Electric'
        },
        image: '/images/gallery_suv.jpg',
        category: 'suv'
      }
    ]
  },
  {
    id: 'lexus',
    name: 'Lexus',
    founded: 1989,
    country: 'Japan',
    description: 'The relentless pursuit of perfection. Lexus redefined luxury with Japanese precision, creating vehicles that offer unparalleled refinement, reliability, and attention to detail.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lexus_logo.svg/1200px-Lexus_logo.svg.png',
    models: [
      {
        id: 'lexus-ls400',
        name: 'LS 400',
        year: 1989,
        description: 'The car that shocked the world and proved Japan could build the ultimate luxury sedan.',
        specs: {
          horsepower: '250 HP',
          acceleration: '8.5s',
          topSpeed: '250 km/h',
          engine: '4.0L V8'
        },
        image: '/images/gallery_sedan.jpg',
        category: 'sedan'
      },
      {
        id: 'lexus-lfa',
        name: 'LFA',
        year: 2010,
        description: 'The V10 masterpiece that took a decade to develop and sounded like Formula 1.',
        specs: {
          horsepower: '552 HP',
          acceleration: '3.6s',
          topSpeed: '325 km/h',
          engine: '4.8L V10'
        },
        image: '/images/front_quarter_low_light.jpg',
        category: 'sports'
      },
      {
        id: 'lexus-rz',
        name: 'RZ 450e',
        year: 2023,
        description: 'Lexus enters the electric era with their first dedicated EV platform.',
        specs: {
          horsepower: '308 HP',
          acceleration: '5.3s',
          topSpeed: '160 km/h',
          engine: 'Dual-Motor Electric'
        },
        image: '/images/gallery_ev.jpg',
        category: 'electric'
      }
    ]
  }
];

export const featuredModels = [
  {
    id: 'phantom-gt',
    name: 'Phantom GT',
    category: 'Sedan',
    description: 'Twin-turbo precision, rear-biased AWD, and a cabin tuned for long-distance composure.',
    image: '/images/performance_car_urban.jpg',
    specs: {
      horsepower: '503 HP',
      acceleration: '3.6s',
      topSpeed: '189 mph',
      transmission: '8-speed automatic'
    }
  },
  {
    id: 'velar-sport',
    name: 'Velar Sport',
    category: 'SUV',
    description: 'Adaptive damping, panoramic roof, and intuitive cockpit controls—designed for real roads.',
    image: '/images/gallery_suv.jpg',
    specs: {
      horsepower: '518 HP',
      acceleration: '3.9s',
      topSpeed: '176 mph',
      transmission: '8-speed automatic'
    }
  },
  {
    id: 'aurora-ev',
    name: 'Aurora EV',
    category: 'Electric',
    description: 'Zero emissions, maximum performance. The future of driving is here.',
    image: '/images/gallery_ev.jpg',
    specs: {
      horsepower: '670 HP',
      acceleration: '2.8s',
      topSpeed: '200 mph',
      transmission: 'Dual-motor AWD'
    }
  },
  {
    id: 'crest-coupe',
    name: 'Crest Coupe',
    category: 'Coupe',
    description: 'Sculpted elegance meets raw power in this two-door masterpiece.',
    image: '/images/gallery_coupe.jpg',
    specs: {
      horsepower: '580 HP',
      acceleration: '3.4s',
      topSpeed: '195 mph',
      transmission: '7-speed DCT'
    }
  }
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getModelById = (brandId: string, modelId: string): CarModel | undefined => {
  const brand = getBrandById(brandId);
  return brand?.models.find(model => model.id === modelId);
};

export const getAllModels = (): CarModel[] => {
  return brands.flatMap(brand => 
    brand.models.map(model => ({ ...model, brandName: brand.name }))
  );
};
