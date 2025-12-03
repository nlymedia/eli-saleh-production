import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeading from '../components/SectionHeading';
import Stats from '../components/Stats';
import Accordion from '../components/Accordion';
import { HeartIcon, AwardIcon, ClockIcon, ChevronRightIcon, CheckCircleIcon, UserIcon, SmileIcon } from 'lucide-react';
const Home = () => {
  const services = [{
    title: 'Facial Procedures',
    description: 'Enhance your natural beauty with procedures designed to rejuvenate and refine facial features.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_36_11_AM.png",
    link: '/services#facial'
  }, {
    title: 'Breast Procedures',
    description: 'Achieve the silhouette you desire with our comprehensive breast enhancement and reconstruction options.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_11_49_28_AM_1.png",
    link: '/services#breast'
  }, {
    title: 'Body Procedures',
    description: 'Sculpt and contour your body with procedures tailored to help you look and feel your best.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_09_39_PM.png",
    link: '/services#body'
  }, {
    title: 'Non-Surgical',
    description: 'Explore our range of minimally invasive treatments for rejuvenation with little to no downtime.',
    image: "/ChatGPT_Image_Oct_1%2C_2025%2C_12_21_02_PM.png",
    link: '/services#nonsurgical'
  }];
  const testimonials = [{
    quote: "Dr. Saleh's attention to detail and artistic approach resulted in exactly the natural look I was hoping for. His expertise and genuine care made the entire experience exceptional.",
    author: 'Marie L.',
    position: 'Facial Rejuvenation Patient'
  }, {
    quote: "After my breast reconstruction, I feel whole again. Dr. Saleh's technical skill is matched only by his compassion. He guided me through every step with patience and understanding.",
    author: 'Sophie T.',
    position: 'Reconstruction Patient'
  }, {
    quote: 'The results of my procedure exceeded my expectations. Dr. Saleh took the time to understand my goals and concerns, creating a customized approach that was perfect for me.',
    author: 'Jean M.',
    position: 'Body Contouring Patient'
  }];
  const stats = [{
    value: 'MD, MSc',
    label: 'Medical Degrees'
  }, {
    value: 'FRCSc',
    label: 'Board Certification'
  }, {
    value: '2',
    label: 'Hospital Affiliations'
  }];
  const faqItems = [{
    title: 'What happens during a consultation?',
    content: <p>
          During your initial consultation, Dr. Saleh will discuss your goals,
          medical history, and concerns. He will perform an examination, explain
          appropriate procedure options, and develop a personalized treatment
          plan. This is also an opportunity to ask questions and view
          before/after photos of similar cases.
        </p>
  }, {
    title: 'How do I prepare for plastic surgery?',
    content: <p>
          Preparation varies by procedure, but generally includes: stopping
          smoking at least 4 weeks before surgery, avoiding certain medications
          and supplements, arranging for recovery time and assistance, and
          following specific pre-operative instructions provided by our team.
        </p>
  }, {
    title: 'What is the recovery process like?',
    content: <p>
          Recovery depends on the specific procedure performed. Dr. Saleh will
          provide detailed post-operative instructions, schedule follow-up
          appointments to monitor your healing, and remain available to address
          any concerns. Most patients return to normal activities within 1-6
          weeks, depending on the procedure.
        </p>
  }, {
    title: 'Are the results permanent?',
    content: <p>
          Many surgical procedures provide long-lasting results, though natural
          aging continues. Non-surgical treatments typically require
          maintenance. Dr. Saleh will discuss the expected longevity of your
          specific procedure during your consultation and recommend maintenance
          strategies when appropriate.
        </p>
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Refined Aesthetics,
                <br />
                <span className="text-black">Natural Results</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Dr. Eli Saleh combines surgical expertise with an artistic
                vision to enhance your natural beauty with results that look and
                feel authentic.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/services" size="lg">
                  Explore Procedures
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white p-2 rounded-md shadow-xl">
                <img src="/DR.ElieSaleh-082.jpg" alt="Dr. Eli Saleh" className="rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Expertise" title="Comprehensive Aesthetic & Reconstructive Solutions" description="Dr. Saleh offers a full spectrum of procedures to enhance your natural beauty and restore form and function." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={<div />} // Placeholder as we're using images instead
          link={service.link} image={service.image} />)}
          </div>
          <div className="mt-12 text-center">
            <Button to="/services" variant="outline">
              View All Procedures
            </Button>
          </div>
        </div>
      </section>
      {/* About/Why Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img src="/DR.ElieSaleh-041.jpg" alt="Dr. Eli Saleh in his clinical environment" className="rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading subtitle="About Dr. Saleh" title="Expertise That Inspires Confidence" description="Board-certified plastic surgeon specializing in aesthetic and reconstructive procedures with advanced fellowship training." alignment="left" />
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-1">
                      Advanced Training
                    </h3>
                    <p className="text-gray-600">
                      Completed prestigious fellowship in Breast Aesthetic and
                      Reconstructive Microsurgery at Manhattan Eye, Ear & Throat
                      Hospital in NYC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-1">
                      Artistic Approach
                    </h3>
                    <p className="text-gray-600">
                      Combines technical precision with an artistic eye to
                      create natural-looking, harmonious results tailored to
                      each patient.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-1">
                      Patient-Centered Philosophy
                    </h3>
                    <p className="text-gray-600">
                      Dedicated to understanding your unique goals and concerns,
                      ensuring personalized care at every step.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-1">
                      Academic Excellence
                    </h3>
                    <p className="text-gray-600">
                      Contributes to medical education and reconstructive
                      surgery at Hôpital Maisonneuve-Rosemont, staying at the
                      forefront of plastic surgery advances.
                    </p>
                  </div>
                </div>
              </div>
              <Button to="/about" icon={<ChevronRightIcon size={16} />}>
                Learn More About Dr. Saleh
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Stats items={stats} className="py-8" />
        </div>
      </section>
      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Approach" title="The Patient Experience" description="We are committed to excellence at every stage of your journey with us." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#141926] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="font-medium">1</span>
                </div>
                <h3 className="text-xl font-light">Consultation</h3>
              </div>
              <p className="text-gray-600 ml-12">
                A thorough discussion of your goals, concerns, and options in a
                comfortable, no-pressure environment. Dr. Saleh takes the time
                to listen and understand your unique aesthetic vision.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#141926] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="font-medium">2</span>
                </div>
                <h3 className="text-xl font-light">Personalized Plan</h3>
              </div>
              <p className="text-gray-600 ml-12">
                A customized treatment approach designed specifically for your
                unique anatomy and aesthetic goals. Each plan is meticulously
                crafted to achieve natural, harmonious results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#141926] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="font-medium">3</span>
                </div>
                <h3 className="text-xl font-light">Expert Care</h3>
              </div>
              <p className="text-gray-600 ml-12">
                Procedures performed with meticulous attention to detail in a
                state-of-the-art, safe environment. Dr. Saleh's technical
                precision and artistic approach ensure exceptional results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#141926] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  <span className="font-medium">4</span>
                </div>
                <h3 className="text-xl font-light">Attentive Follow-Up</h3>
              </div>
              <p className="text-gray-600 ml-12">
                Comprehensive post-operative care and ongoing support throughout
                your recovery journey. Our team remains accessible to address
                any questions or concerns as you heal.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Patient Stories" title="What Our Patients Say" description="Hear from those who have trusted Dr. Saleh with their aesthetic and reconstructive journeys." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} position={testimonial.position} />)}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Common Questions" title="Frequently Asked Questions" description="Find answers to common questions about plastic surgery and our practice." />
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Have additional questions? We're here to help.
            </p>
            <Button to="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#141926] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Begin Your Transformation
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with Dr. Saleh to discuss your aesthetic
              goals and explore your options.
            </p>
            <Button to="/contact" size="lg" className="bg-[#C6AF75] text-white hover:bg-[#b39c62]">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;