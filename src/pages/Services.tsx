import React, { useEffect, useState, useRef } from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { CheckCircleIcon } from 'lucide-react';
const Services = () => {
  const [activeCategory, setActiveCategory] = useState('facial');
  const [imageHeight, setImageHeight] = useState(0);
  const imageRefs = useRef<Map<string, HTMLImageElement>>(new Map());
  const imagesLoaded = useRef<Set<string>>(new Set());
  const allImagesLoaded = useRef(false);
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
  }, []);
  const categories = [{
    id: 'facial',
    label: 'Facial'
  }, {
    id: 'breast',
    label: 'Breast'
  }, {
    id: 'body',
    label: 'Body'
  }, {
    id: 'nonsurgical',
    label: 'Non-Surgical'
  }, {
    id: 'mommymakeover',
    label: 'Mommy Makeover'
  }];
  const serviceCategories = [{
    id: 'facial',
    title: 'Facial Procedures',
    description: 'Enhance and rejuvenate your facial features with procedures designed to create natural, harmonious results.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_36_11_AM.png",
    procedures: [{
      name: 'Eyelid Surgery (Blepharoplasty)',
      description: 'Rejuvenate the eyes by removing excess skin and fat from the eyelids.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E"
    }, {
      name: 'Facial Fat Transfer',
      description: 'Restore volume and youthful contours using your own fat cells.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'/%3E%3C/svg%3E"
    }, {
      name: 'Buccal Fat Removal',
      description: 'Reduce fullness in the cheeks for a more defined facial appearance.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M20 12H4'/%3E%3C/svg%3E"
    }, {
      name: 'Face and Neck Lift',
      description: 'Address signs of aging by tightening facial tissues and removing excess skin.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15 9l-3 3m0 0l-3-3m3 3V4'/%3E%3C/svg%3E"
    }]
  }, {
    id: 'breast',
    title: 'Breast Procedures',
    description: 'Enhance, reduce, or reconstruct the breasts to achieve your desired silhouette with natural-looking results.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_49_28_AM_1.png",
    procedures: [{
      name: 'Breast Augmentation',
      description: 'Enhance breast size and shape using implants or fat transfer techniques.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 6v6m0 0v6m0-6h6m-6 0H6'/%3E%3C/svg%3E"
    }, {
      name: 'Breast Lift',
      description: 'Elevate and reshape sagging breasts for a more youthful contour.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5 10l7-7m0 0l7 7m-7-7v18'/%3E%3C/svg%3E"
    }, {
      name: 'Male Chest Contouring',
      description: 'Treat gynecomastia to create a more masculine chest contour.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M14 5l7 7m0 0l-7 7m7-7H3'/%3E%3C/svg%3E"
    }, {
      name: 'Inverted Nipple Correction',
      description: 'Correct inverted nipples to improve appearance and function.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 12l2 2 4-4'/%3E%3C/svg%3E"
    }, {
      name: 'Breast Reconstruction',
      description: 'Restore breast appearance after mastectomy or other breast surgery.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'/%3E%3C/svg%3E"
    }, {
      name: 'Tuberous Breast Reduction',
      description: 'Correct tuberous breast deformity for improved shape and symmetry.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M20 12H4'/%3E%3C/svg%3E"
    }, {
      name: 'Breast Asymmetry Correction',
      description: 'Balance breast size and shape for improved symmetry.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2'/%3E%3C/svg%3E"
    }, {
      name: 'Breast Implant Removal',
      description: 'Remove breast implants safely with optional replacement or lift.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 18L18 6M6 6l12 12'/%3E%3C/svg%3E"
    }, {
      name: 'Small Volume Breast Enhancement',
      description: 'Subtle enhancement for patients seeking modest, natural results.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 6v6m0 0v6m0-6h6m-6 0H6'/%3E%3C/svg%3E"
    }]
  }, {
    id: 'body',
    title: 'Body Procedures',
    description: 'Sculpt and contour your body with procedures designed to address specific concerns and enhance your natural shape.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_09_39_PM.png",
    procedures: [{
      name: 'Tummy Tuck (Abdominoplasty)',
      description: 'Flatten the abdomen by removing excess skin and fat and tightening muscles.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"
    }, {
      name: 'Liposuction',
      description: 'Remove stubborn fat deposits to contour and refine body shape.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E"
    }, {
      name: 'Body Lift',
      description: 'Remove excess skin after significant weight loss for improved contours.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5 11l7-7 7 7M5 19l7-7 7 7'/%3E%3C/svg%3E"
    }, {
      name: 'Thigh Lift',
      description: 'Reshape the thighs by reducing excess skin and fat.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5 15l7-7 7 7'/%3E%3C/svg%3E"
    }, {
      name: 'Labial Reduction',
      description: 'Reduce or reshape the labia for improved comfort and aesthetics.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M20 12H4'/%3E%3C/svg%3E"
    }, {
      name: 'Lumps and Bumps',
      description: 'Remove benign skin growths and cysts for smoother contours.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 12l2 2 4-4'/%3E%3C/svg%3E"
    }, {
      name: 'Arm Lift',
      description: 'Remove excess skin from the upper arms for a more toned appearance.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M14 5l7 7m0 0l-7 7m7-7H3'/%3E%3C/svg%3E"
    }]
  }, {
    id: 'nonsurgical',
    title: 'Non-Surgical Procedures',
    description: 'Refresh and rejuvenate with minimally invasive treatments that require little to no downtime.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_21_02_PM.png",
    procedures: [{
      name: 'Neuromodulators',
      description: 'Reduce dynamic wrinkles and fine lines with injectable neuromodulators.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'/%3E%3C/svg%3E"
    }, {
      name: 'Dermal Fillers',
      description: 'Restore volume and smooth wrinkles with hyaluronic acid fillers.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'/%3E%3C/svg%3E"
    }, {
      name: 'Biostimulators',
      description: 'Stimulate collagen production for natural facial rejuvenation.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'/%3E%3C/svg%3E"
    }]
  }, {
    id: 'mommymakeover',
    title: 'Mommy Makeover',
    description: 'Comprehensive treatment plans designed to restore your pre-pregnancy body, typically combining multiple procedures for optimal results.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_27_20_PM.png",
    procedures: [{
      name: 'Breast Lift',
      description: 'Elevate and reshape sagging breasts after pregnancy and breastfeeding.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5 10l7-7m0 0l7 7m-7-7v18'/%3E%3C/svg%3E"
    }, {
      name: 'Tummy Tuck',
      description: 'Address stretched abdominal muscles and excess skin following pregnancy.',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E"
    }]
  }];
  const getCategoryContent = () => {
    const category = serviceCategories.find(cat => cat.id === activeCategory);
    if (!category) return null;
    return <div className="mt-12">
        <div className="mb-8">
          <h2 className="text-3xl font-light mb-2">{category.title}</h2>
          <p className="text-gray-600 max-w-3xl">{category.description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image on the left */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden h-full">
              <img ref={el => {
              if (el) imageRefs.current.set(category.id, el);
            }} src={category.image} alt={category.title} className="w-full h-auto object-cover" />
            </div>
          </div>
          {/* Procedures on the right */}
          <div className="md:w-1/2 flex">
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 w-full content-start">
              {category.procedures.map((procedure, index) => <div key={index} className="flex flex-col items-center justify-between bg-gray-50 p-3 sm:p-4 aspect-square">
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img src={procedure.icon} alt={procedure.name} className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-normal text-center flex items-center justify-center w-full px-1">
                    {procedure.name}
                  </h3>
                </div>)}
            </div>
          </div>
        </div>
      </div>;
  };
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Our Procedures
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive plastic surgery solutions tailored to your unique
              aesthetic goals and needs.
            </p>
          </div>
        </div>
      </section>
      {/* Category Navigation */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:px-0 sm:mx-0 sm:justify-center">
            <div className="flex space-x-8">
              {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`whitespace-nowrap pb-4 px-1 font-medium text-sm border-b-2 transition-colors ${activeCategory === category.id ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}>
                  {category.label}
                </button>)}
            </div>
          </div>
        </div>
      </section>
      {/* Category Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">{getCategoryContent()}</div>
      </section>
      {/* Patient-Centered Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Process" title="Your Surgical Journey" description="Dr. Saleh is committed to providing exceptional care throughout your entire surgical experience." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-light mb-4">Before Surgery</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Thorough consultation to understand your goals
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Comprehensive evaluation of your health history
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Detailed explanation of procedure options
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-light mb-4">During Surgery</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    State-of-the-art surgical facilities
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Board-certified anesthesiologists
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Advanced surgical techniques</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-xl font-light mb-4">After Surgery</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Detailed post-operative care instructions
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Regular follow-up appointments
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon size={20} className="text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    24/7 access to clinical support
                  </p>
                </li>
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
              Ready to Transform Your Appearance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with Dr. Saleh to discuss your aesthetic
              goals and create a personalized treatment plan.
            </p>
            <Button to="/contact" size="lg" className="bg-[#C6AF75] text-[#141926] hover:bg-[#b39c62]">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;