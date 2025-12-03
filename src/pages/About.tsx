import React from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Stats from '../components/Stats';
import { GraduationCapIcon, AwardIcon, HeartIcon, BookOpenIcon, StarIcon, UserIcon } from 'lucide-react';
const About = () => {
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
  const qualifications = [{
    title: 'Medical Degree',
    institution: 'Université de Montréal',
    description: 'Doctor of Medicine with honors',
    icon: <GraduationCapIcon size={24} className="text-black" />
  }, {
    title: "Master's in Clinical Research",
    institution: 'Université de Montréal',
    description: 'Advanced research methodology and clinical applications',
    icon: <BookOpenIcon size={24} className="text-black" />
  }, {
    title: 'Residency Training',
    institution: 'Université de Montréal',
    description: 'Plastic and Reconstructive Surgery specialization',
    icon: <UserIcon size={24} className="text-black" />
  }, {
    title: 'Fellowship',
    institution: 'Manhattan Eye, Ear & Throat Hospital, NYC',
    description: 'Breast Aesthetic and Reconstructive Microsurgery',
    icon: <StarIcon size={24} className="text-black" />
  }, {
    title: 'Board Certification',
    institution: 'Royal College of Surgeons of Canada',
    description: 'Fellow of the Royal College of Surgeons of Canada (FRCSc)',
    icon: <AwardIcon size={24} className="text-black" />
  }, {
    title: 'Academic Appointment',
    institution: 'Hôpital Maisonneuve-Rosemont',
    description: 'Contributing to reconstructive surgery and medical education',
    icon: <HeartIcon size={24} className="text-black" />
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              About Dr. Eli Saleh
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Board-certified plastic and reconstructive surgeon dedicated to
              excellence in both aesthetic and reconstructive surgery.
            </p>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading subtitle="My Story" title="Dedicated to Surgical Excellence" alignment="left" />
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Dr. Eli Saleh, MD, MSc, FRCSc, is a board-certified plastic
                  and reconstructive surgeon dedicated to excellence in both
                  aesthetic and reconstructive surgery.
                </p>
                <p className="text-gray-600 mb-6">
                  He completed his medical degree and a Master's in Clinical
                  Research at the Université de Montréal, where he also pursued
                  his residency training in Plastic and Reconstructive Surgery.
                  During this time, he developed a strong passion for aesthetic
                  surgery and breast reconstruction, fields that allow him to
                  combine technical precision with artistry.
                </p>
                <p className="text-gray-600 mb-6">
                  To further refine his expertise, Dr. Saleh completed a
                  prestigious fellowship in Breast Aesthetic and Reconstructive
                  Microsurgery at the renowned Manhattan Eye, Ear & Throat
                  Hospital (MEETH) in New York City. There, he trained with
                  leaders in the field, mastering advanced techniques in both
                  cosmetic breast surgery and complex microsurgical
                  reconstruction.
                </p>
                <p className="text-gray-600">
                  Now returning to Montréal, Dr. Saleh is establishing his
                  practice at SENSA MD, where he is committed to offering
                  cutting-edge aesthetic procedures tailored to each patient. In
                  parallel, he is also joining the academic team at Hôpital
                  Maisonneuve-Rosemont (HMR), where he contributes to
                  reconstructive surgery and medical education. His philosophy
                  is patient-centered, with a focus on natural results, safety,
                  and long-term outcomes.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact">Schedule a Consultation</Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img src="/DR.ElieSaleh-141.jpg" alt="Dr. Eli Saleh" className="rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Stats items={stats} className="py-8" />
        </div>
      </section>
      {/* Qualifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Education & Training" title="Professional Qualifications" description="Dr. Saleh's extensive education and training have prepared him to deliver exceptional care across a range of plastic surgery procedures." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {qualifications.map((item, index) => <div key={index} className="bg-gray-50 p-8 rounded-md">
                <div className="bg-white w-12 h-12 rounded-md flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-light mb-2">{item.title}</h3>
                <p className="text-gray-800 font-medium mb-2">
                  {item.institution}
                </p>
                <p className="text-gray-600">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading subtitle="My Approach" title="Surgical Philosophy" description="Dr. Saleh's approach to plastic surgery is guided by core principles that prioritize patient safety, natural results, and personalized care." alignment="left" />
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-xl font-light mb-2">
                    Patient-Centered Care
                  </h3>
                  <p className="text-gray-600">
                    Every treatment plan begins with listening carefully to your
                    goals and concerns. Dr. Saleh takes the time to understand
                    your unique situation and develops a personalized approach
                    that aligns with your vision.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-xl font-light mb-2">
                    Natural-Looking Results
                  </h3>
                  <p className="text-gray-600">
                    Dr. Saleh believes that the best plastic surgery appears
                    natural and harmonious. His artistic eye and technical
                    precision work together to enhance your features while
                    maintaining your unique identity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-xl font-light mb-2">Safety First</h3>
                  <p className="text-gray-600">
                    Your wellbeing is paramount. Dr. Saleh employs the highest
                    standards of safety and care, using advanced techniques and
                    technologies to minimize risks and optimize outcomes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-xl font-light mb-2">
                    Comprehensive Support
                  </h3>
                  <p className="text-gray-600">
                    From your initial consultation through recovery and beyond,
                    Dr. Saleh and his team provide attentive support and
                    guidance at every step of your journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src="/DR.ElieSaleh-241.jpg" alt="Dr. Eli Saleh in his clinical environment" className="rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#141926] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with Dr. Saleh to discuss your aesthetic
              goals and explore your options.
            </p>
            <Button to="/contact" size="lg" className="bg-[#C6AF75] text-[#141926] hover:bg-[#b39c62]">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default About;