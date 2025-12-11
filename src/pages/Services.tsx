import React, { useEffect, useState, useRef } from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { CheckCircleIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('facial');
  const [imageHeight, setImageHeight] = useState(0);
  const imageRefs = useRef<Map<string, HTMLImageElement>>(new Map());
  const imagesLoaded = useRef<Set<string>>(new Set());
  const allImagesLoaded = useRef(false);

  const categories = language === 'fr' ? [
    { id: 'facial', label: 'Visage' },
    { id: 'breast', label: 'Poitrine' },
    { id: 'body', label: 'Corps' },
    { id: 'nonsurgical', label: 'Non-chirurgical' },
    { id: 'mommymakeover', label: 'Mommy Makeover' }
  ] : [
    { id: 'facial', label: 'Facial' },
    { id: 'breast', label: 'Breast' },
    { id: 'body', label: 'Body' },
    { id: 'nonsurgical', label: 'Non-Surgical' },
    { id: 'mommymakeover', label: 'Mommy Makeover' }
  ];

  const serviceCategories = language === 'fr' ? [
    {
      id: 'facial',
      title: 'Procédures du visage',
      description: 'Améliorez et rajeunissez vos traits du visage avec des procédures conçues pour créer des résultats naturels et harmonieux.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_36_11_AM.png",
      procedures: [
        {
          name: 'Chirurgie des paupières (Blépharoplastie)',
          description: 'Rajeunissez les yeux en éliminant l\'excès de peau et de graisse des paupières.',
          icon: "/icons/eyelid-surgery.svg"
        },
        {
          name: 'Transfert de graisse faciale',
          description: 'Restaurez le volume et les contours jeunes en utilisant vos propres cellules graisseuses.',
          icon: "/icons/facial-fat-transfer.svg"
        },
        {
          name: 'Ablation de la boule de Bichat',
          description: 'Réduisez la plénitude des joues pour une apparence faciale plus définie.',
          icon: "/icons/buccal-fat-removal.svg"
        },
        {
          name: 'Lifting du visage & du cou',
          description: 'Traitez les signes du vieillissement en raffermissant les tissus faciaux et en éliminant l\'excès de peau.',
          icon: "/icons/face-neck-lift.svg"
        },
        {
          name: 'Lifting\ndes sourcils',
          description: 'Élevez les sourcils et lissez les rides du front pour une apparence rafraîchie.',
          icon: "/icons/brow-lift.svg"
        },
        {
          name: 'Abaissement de la ligne des cheveux',
          description: 'Réduisez la hauteur du front en avançant la ligne des cheveux pour améliorer les proportions faciales.',
          icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 15l3-3m0 0l3 3m-3-3v7'/%3E%3C/svg%3E"
        }
      ]
    },
    {
      id: 'breast',
      title: 'Procédures mammaires',
      description: 'Augmentez, réduisez ou reconstruisez les seins pour obtenir la silhouette souhaitée avec des résultats naturels.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_49_28_AM_1.png",
      procedures: [
        {
          name: 'Augmentation mammaire',
          description: 'Améliorez la taille et la forme des seins à l\'aide d\'implants ou de techniques de transfert de graisse.',
          icon: "/icons/breast-augmentation.svg"
        },
        {
          name: 'Lifting mammaire',
          description: 'Élevez et remodellez les seins affaissés pour un contour plus jeune.',
          icon: "/icons/breast-lift.svg"
        },
        {
          name: 'Remodelage du torse masculin\n(Gynécomastie)',
          description: 'Traitez la gynécomastie pour créer un contour de poitrine plus masculin.',
          icon: "/icons/male-chest-contouring.svg"
        },
        {
          name: 'Correction des mamelons inversés',
          description: 'Corrigez les mamelons inversés pour améliorer l\'apparence et la fonction.',
          icon: "/icons/inverted-nipple.svg"
        },
        {
          name: 'Reconstruction mammaire',
          description: 'Restaurez l\'apparence des seins après une mastectomie ou une autre chirurgie mammaire.',
          icon: "/icons/breast-reconstruction.svg"
        },
        {
          name: 'Réduction/Reconstruction\ndes seins tubéreux',
          description: 'Corrigez la déformation des seins tubéreux pour améliorer la forme et la symétrie.',
          icon: "/icons/tuberous-breast.svg"
        },
        {
          name: 'Réduction mammaire',
          description: 'Réduisez la taille des seins pour un meilleur confort et de meilleures proportions.',
          icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M20 12H4'/%3E%3C/svg%3E"
        },
        {
          name: 'Correction de l\'asymétrie mammaire',
          description: 'Équilibrez la taille et la forme des seins pour une meilleure symétrie.',
          icon: "/icons/breast-asymmetry.svg"
        },
        {
          name: 'Retrait d\'implants mammaires',
          description: 'Retirez les implants mammaires en toute sécurité avec remplacement ou lifting optionnel.',
          icon: "/icons/breast-implant-removal.svg"
        },
        {
          name: 'Augmentation mammaire légère',
          description: 'Amélioration subtile pour les patientes recherchant des résultats modestes et naturels.',
          icon: "/icons/small-volume-breast.svg"
        }
      ]
    },
    {
      id: 'body',
      title: 'Procédures corporelles',
      description: 'Sculptez et remodellez votre corps avec des procédures conçues pour répondre à des préoccupations spécifiques et améliorer votre silhouette naturelle.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_09_39_PM.png",
      procedures: [
        {
          name: 'Abdominoplastie',
          description: 'Aplatissez l\'abdomen en éliminant l\'excès de peau et de graisse et en raffermissant les muscles.',
          icon: "/icons/tummy-tuck.svg"
        },
        {
          name: 'Liposuccion',
          description: 'Éliminez les dépôts de graisse tenaces pour sculpter et affiner la silhouette.',
          icon: "/icons/liposuction.svg"
        },
        {
          name: 'Lifting corporel',
          description: 'Éliminez l\'excès de peau après une perte de poids significative pour de meilleurs contours.',
          icon: "/icons/body-lift.svg"
        },
        {
          name: 'Lifting des cuisses',
          description: 'Remodellez les cuisses en réduisant l\'excès de peau et de graisse.',
          icon: "/icons/thigh-lift.svg"
        },
        {
          name: 'Réduction labiale',
          description: 'Réduisez ou remodellez les lèvres pour un meilleur confort et une meilleure esthétique.',
          icon: "/icons/labial-reduction.svg"
        },
        {
          name: 'Bosses & excroissances',
          description: 'Éliminez les excroissances cutanées bénignes et les kystes pour des contours plus lisses.',
          icon: "/icons/lumps-bumps.svg"
        },
        {
          name: 'Lifting des bras',
          description: 'Éliminez l\'excès de peau des bras pour une apparence plus tonique.',
          icon: "/icons/arm-lift.svg"
        }
      ]
    },
    {
      id: 'nonsurgical',
      title: 'Procédures non chirurgicales',
      description: 'Rafraîchissez et rajeunissez avec des traitements peu invasifs qui nécessitent peu ou pas de temps de récupération.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_21_02_PM.png",
      procedures: [
        {
          name: 'Neuromodulateurs',
          description: 'Réduisez les rides dynamiques et les ridules avec des neuromodulateurs injectables.',
          icon: "/icons/neuromodulators.svg"
        },
        {
          name: 'Produits de comblement dermique',
          description: 'Restaurez le volume et lissez les rides avec des produits de comblement à l\'acide hyaluronique.',
          icon: "/icons/dermal-fillers.svg"
        },
        {
          name: 'Biostimulateurs',
          description: 'Stimulez la production de collagène pour un rajeunissement facial naturel.',
          icon: "/icons/biostimulators.svg"
        }
      ]
    },
    {
      id: 'mommymakeover',
      title: 'Mommy Makeover',
      description: 'Plans de traitement complets conçus pour restaurer votre corps d\'avant la grossesse, combinant généralement plusieurs procédures pour des résultats optimaux.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_27_20_PM.png",
      procedures: [
        {
          name: 'Lifting mammaire',
          description: 'Élevez et remodellez les seins affaissés après la grossesse et l\'allaitement.',
          icon: "/icons/mommy-breast-lift.svg"
        },
        {
          name: 'Abdominoplastie',
          description: 'Traitez les muscles abdominaux étirés et l\'excès de peau suite à la grossesse.',
          icon: "/icons/mommy-tummy-tuck.svg"
        }
      ]
    }
  ] : [
    {
      id: 'facial',
      title: 'Facial Procedures',
      description: 'Enhance and rejuvenate your facial features with procedures designed to create natural, harmonious results.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_36_11_AM.png",
      procedures: [
        {
          name: 'Eyelid Surgery (Blepharoplasty)',
          description: 'Rejuvenate the eyes by removing excess skin and fat from the eyelids.',
          icon: "/icons/eyelid-surgery.svg"
        },
        {
          name: 'Facial Fat Transfer',
          description: 'Restore volume and youthful contours using your own fat cells.',
          icon: "/icons/facial-fat-transfer.svg"
        },
        {
          name: 'Buccal Fat Removal',
          description: 'Reduce fullness in the cheeks for a more defined facial appearance.',
          icon: "/icons/buccal-fat-removal.svg"
        },
        {
          name: 'Face & Neck Lift',
          description: 'Address signs of aging by tightening facial tissues and removing excess skin.',
          icon: "/icons/face-neck-lift.svg"
        },
        {
          name: 'Brow\nLift',
          description: 'Elevate the brows and smooth forehead wrinkles for a refreshed appearance.',
          icon: "/icons/brow-lift.svg"
        },
        {
          name: 'Hairline Lowering (Forehead Reduction)',
          description: 'Reduce forehead height by advancing the hairline for improved facial proportions.',
          icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 15l3-3m0 0l3 3m-3-3v7'/%3E%3C/svg%3E"
        }
      ]
    },
    {
      id: 'breast',
      title: 'Breast Procedures',
      description: 'Enhance, reduce, or reconstruct the breasts to achieve your desired silhouette with natural-looking results.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_49_28_AM_1.png",
      procedures: [
        {
          name: 'Breast Augmentation',
          description: 'Enhance breast size and shape using implants or fat transfer techniques.',
          icon: "/icons/breast-augmentation.svg"
        },
        {
          name: 'Breast Lift',
          description: 'Elevate and reshape sagging breasts for a more youthful contour.',
          icon: "/icons/breast-lift.svg"
        },
        {
          name: 'Male Chest Contouring\n(Gynecomastia)',
          description: 'Treat gynecomastia to create a more masculine chest contour.',
          icon: "/icons/male-chest-contouring.svg"
        },
        {
          name: 'Inverted Nipple Correction',
          description: 'Correct inverted nipples to improve appearance and function.',
          icon: "/icons/inverted-nipple.svg"
        },
        {
          name: 'Breast Reconstruction',
          description: 'Restore breast appearance after mastectomy or other breast surgery.',
          icon: "/icons/breast-reconstruction.svg"
        },
        {
          name: 'Tuberous Breast\nReduction/Reconstruction',
          description: 'Correct tuberous breast deformity for improved shape and symmetry.',
          icon: "/icons/tuberous-breast.svg"
        },
        {
          name: 'Breast Reduction',
          description: 'Reduce breast size for improved comfort and proportions.',
          icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M20 12H4'/%3E%3C/svg%3E"
        },
        {
          name: 'Breast Asymmetry Correction',
          description: 'Balance breast size and shape for improved symmetry.',
          icon: "/icons/breast-asymmetry.svg"
        },
        {
          name: 'Breast Implant Removal',
          description: 'Remove breast implants safely with optional replacement or lift.',
          icon: "/icons/breast-implant-removal.svg"
        },
        {
          name: 'Small Volume Breast Enhancement',
          description: 'Subtle enhancement for patients seeking modest, natural results.',
          icon: "/icons/small-volume-breast.svg"
        }
      ]
    },
    {
      id: 'body',
      title: 'Body Procedures',
      description: 'Sculpt and contour your body with procedures designed to address specific concerns and enhance your natural shape.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_09_39_PM.png",
      procedures: [
        {
          name: 'Tummy Tuck (Abdominoplasty)',
          description: 'Flatten the abdomen by removing excess skin and fat and tightening muscles.',
          icon: "/icons/tummy-tuck.svg"
        },
        {
          name: 'Liposuction',
          description: 'Remove stubborn fat deposits to contour and refine body shape.',
          icon: "/icons/liposuction.svg"
        },
        {
          name: 'Body Lift',
          description: 'Remove excess skin after significant weight loss for improved contours.',
          icon: "/icons/body-lift.svg"
        },
        {
          name: 'Thigh Lift',
          description: 'Reshape the thighs by reducing excess skin and fat.',
          icon: "/icons/thigh-lift.svg"
        },
        {
          name: 'Labial Reduction',
          description: 'Reduce or reshape the labia for improved comfort and aesthetics.',
          icon: "/icons/labial-reduction.svg"
        },
        {
          name: 'Lumps & Bumps',
          description: 'Remove benign skin growths and cysts for smoother contours.',
          icon: "/icons/lumps-bumps.svg"
        },
        {
          name: 'Arm Lift',
          description: 'Remove excess skin from the upper arms for a more toned appearance.',
          icon: "/icons/arm-lift.svg"
        }
      ]
    },
    {
      id: 'nonsurgical',
      title: 'Non-Surgical Procedures',
      description: 'Refresh and rejuvenate with minimally invasive treatments that require little to no downtime.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_21_02_PM.png",
      procedures: [
        {
          name: 'Neuromodulators',
          description: 'Reduce dynamic wrinkles and fine lines with injectable neuromodulators.',
          icon: "/icons/neuromodulators.svg"
        },
        {
          name: 'Dermal Fillers',
          description: 'Restore volume and smooth wrinkles with hyaluronic acid fillers.',
          icon: "/icons/dermal-fillers.svg"
        },
        {
          name: 'Biostimulators',
          description: 'Stimulate collagen production for natural facial rejuvenation.',
          icon: "/icons/biostimulators.svg"
        }
      ]
    },
    {
      id: 'mommymakeover',
      title: 'Mommy Makeover',
      description: 'Comprehensive treatment plans designed to restore your pre-pregnancy body, typically combining multiple procedures for optimal results.',
      image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_27_20_PM.png",
      procedures: [
        {
          name: 'Breast Lift',
          description: 'Elevate and reshape sagging breasts after pregnancy and breastfeeding.',
          icon: "/icons/mommy-breast-lift.svg"
        },
        {
          name: 'Tummy Tuck',
          description: 'Address stretched abdominal muscles and excess skin following pregnancy.',
          icon: "/icons/mommy-tummy-tuck.svg"
        }
      ]
    }
  ];

  // Adjust image heights to be consistent
  useEffect(() => {
    const adjustImageHeights = () => {
      if (imageRefs.current.size === 0) return;
      // Find the tallest image
      let maxHeight = 0;
      imageRefs.current.forEach(img => {
        if (img && img.offsetHeight > maxHeight) {
          maxHeight = img.offsetHeight;
        }
      });
      // Set the height state if we found a valid height
      if (maxHeight > 0) {
        setImageHeight(maxHeight);
      }
    };
    const handleImageLoad = (categoryId: string) => {
      imagesLoaded.current.add(categoryId);
      // Check if all category images have loaded
      const allCategories = serviceCategories.map(cat => cat.id);
      const allLoaded = allCategories.every(id => imagesLoaded.current.has(id));
      if (allLoaded && !allImagesLoaded.current) {
        allImagesLoaded.current = true;
        adjustImageHeights();
      }
    };
    // Add load event listeners to all images
    serviceCategories.forEach(category => {
      const img = imageRefs.current.get(category.id);
      if (img) {
        if (img.complete) {
          handleImageLoad(category.id);
        } else {
          img.onload = () => handleImageLoad(category.id);
        }
      }
    });
    // Also run after a short delay as a fallback
    const timer = setTimeout(adjustImageHeights, 1000);
    // Adjust when window is resized
    window.addEventListener('resize', adjustImageHeights);
    return () => {
      window.removeEventListener('resize', adjustImageHeights);
      clearTimeout(timer);
    };
  }, [serviceCategories]);

  const getCategoryContent = () => {
    const category = serviceCategories.find(cat => cat.id === activeCategory);
    if (!category) return null;
    return (
      <div className="mt-12">
        <div className="mb-8">
          <h2 className="text-3xl font-light mb-2">{category.title}</h2>
          <p className="text-gray-600 max-w-3xl">{category.description}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image on the left */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden h-full">
              <img
                ref={el => {
                  if (el) imageRefs.current.set(category.id, el);
                }}
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Procedures on the right */}
          <div className="lg:w-1/2 flex">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 w-full content-start">
              {category.procedures.map((procedure, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between bg-gray-50 p-3 sm:p-4 aspect-square"
                >
                  <div className={`flex-1 flex items-center justify-center w-full overflow-hidden ${procedure.icon.startsWith('/icons/') ? 'sm:pt-[18px] sm:pb-[20px]' : ''}`}>
                    <img
                      src={procedure.icon}
                      alt={procedure.name}
                      className={procedure.icon.startsWith('/icons/') 
                        ? "w-full h-full object-contain service-icon-scale" 
                        : "w-6 h-6 sm:w-8 sm:h-8 text-gray-900 service-icon-scale"}
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-normal text-center flex items-center justify-center w-full px-1 whitespace-pre-line">
                    {procedure.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const content = language === 'fr' ? {
    heroTitle: 'Nos procédures',
    heroDescription: 'Solutions complètes en chirurgie plastique adaptées à vos objectifs et besoins esthétiques uniques.',
    processSubtitle: 'Notre processus',
    processTitle: 'Votre parcours chirurgical',
    processDescription: 'Le Dr Saleh s\'engage à fournir des soins exceptionnels tout au long de votre expérience chirurgicale.',
    beforeSurgery: 'Avant la chirurgie',
    beforeSurgeryItems: [
      'Consultation approfondie pour comprendre vos objectifs',
      'Évaluation complète de vos antécédents médicaux',
      'Explication détaillée des options de procédures'
    ],
    duringSurgery: 'Pendant la chirurgie',
    duringSurgeryItems: [
      'Installations chirurgicales de pointe',
      'Anesthésistes certifiés',
      'Techniques chirurgicales avancées'
    ],
    afterSurgery: 'Après la chirurgie',
    afterSurgeryItems: [
      'Instructions détaillées de soins postopératoires',
      'Rendez-vous de suivi réguliers',
      'Accès 24h/24 et 7j/7 au soutien clinique'
    ],
    ctaTitle: 'Prêt à transformer votre apparence?',
    ctaDescription: 'Planifiez une consultation avec le Dr Saleh pour discuter de vos objectifs esthétiques et créer un plan de traitement personnalisé.',
    ctaButton: 'Réserver votre consultation'
  } : {
    heroTitle: 'Our Procedures',
    heroDescription: 'Comprehensive plastic surgery solutions tailored to your unique aesthetic goals and needs.',
    processSubtitle: 'Our Process',
    processTitle: 'Your Surgical Journey',
    processDescription: 'Dr. Saleh is committed to providing exceptional care throughout your entire surgical experience.',
    beforeSurgery: 'Before Surgery',
    beforeSurgeryItems: [
      'Thorough consultation to understand your goals',
      'Comprehensive evaluation of your health history',
      'Detailed explanation of procedure options'
    ],
    duringSurgery: 'During Surgery',
    duringSurgeryItems: [
      'State-of-the-art surgical facilities',
      'Board-certified anesthesiologists',
      'Advanced surgical techniques'
    ],
    afterSurgery: 'After Surgery',
    afterSurgeryItems: [
      'Detailed post-operative care instructions',
      'Regular follow-up appointments',
      '24/7 access to clinical support'
    ],
    ctaTitle: 'Ready to Transform Your Appearance?',
    ctaDescription: 'Schedule a consultation with Dr. Saleh to discuss your aesthetic goals and create a personalized treatment plan.',
    ctaButton: 'Book Your Consultation'
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              {content.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {content.heroDescription}
            </p>
          </div>
        </div>
      </section>
      {/* Category Navigation */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:px-0 sm:mx-0 sm:justify-center">
            <div className="flex space-x-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap pb-4 px-1 font-medium text-sm border-b-2 transition-colors ${
                    activeCategory === category.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Category Content */}
      <section className="py-12">
        <div className="mx-auto px-4 max-w-7xl lg:max-w-none lg:px-4 xl:max-w-7xl xl:px-4">{getCategoryContent()}</div>
      </section>
      {/* Patient-Centered Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={content.processSubtitle}
            title={content.processTitle}
            description={content.processDescription}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-light mb-4">{content.beforeSurgery}</h3>
              <ul className="space-y-4">
                {content.beforeSurgeryItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-light mb-4">{content.duringSurgery}</h3>
              <ul className="space-y-4">
                {content.duringSurgeryItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-light mb-4">{content.afterSurgery}</h3>
              <ul className="space-y-4">
                {content.afterSurgeryItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#141926] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              {content.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {content.ctaDescription}
            </p>
            <Button
              to={language === 'fr' ? '/fr/contact' : '/contact'}
              size="lg"
              className="bg-[#C6AF75] text-[#141926] hover:bg-[#b39c62]"
            >
              {content.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
