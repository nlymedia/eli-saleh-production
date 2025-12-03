import React from 'react';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import Accordion from '../components/Accordion';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CalendarIcon, InfoIcon, ShieldIcon, UserIcon } from 'lucide-react';
const Contact = () => {
  const faqItems = [{
    title: 'What should I expect during my consultation?',
    content: <p>
          Your consultation with Dr. Saleh will include a detailed discussion of
          your goals, a thorough examination, and a review of your medical
          history. Dr. Saleh will explain appropriate procedure options,
          potential outcomes, and answer any questions you may have. The
          consultation typically lasts 45-60 minutes.
        </p>
  }, {
    title: 'Do you offer virtual consultations?',
    content: <p>
          Yes, we offer virtual consultations for patients who are unable to
          visit our office initially. While a physical examination will
          eventually be necessary before any surgical procedure, virtual
          consultations are a convenient way to begin the conversation and
          determine if you are a good candidate for your desired procedure.
        </p>
  }, {
    title: 'How much does a consultation cost?',
    content: <p>
          Initial consultations with Dr. Saleh have a fee of $150, which can be
          applied toward the cost of your procedure if you choose to proceed.
          This fee helps ensure dedicated time with Dr. Saleh to thoroughly
          discuss your goals and options.
        </p>
  }, {
    title: 'How do I prepare for my consultation?',
    content: <p>
          To make the most of your consultation, we recommend bringing a list of
          questions, information about your medical history, and clear ideas
          about your goals. For certain procedures, it can be helpful to bring
          reference images that illustrate the results you're hoping to achieve.
        </p>
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're here to answer your questions and help you schedule your
              consultation with Dr. Saleh.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading subtitle="Get in Touch" title="Contact Information" description="Reach out to schedule your consultation or to have any questions answered by our dedicated team." alignment="left" />
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPinIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">Office Location</h3>
                    <p className="text-gray-600">
                      123 Medical Avenue, Suite 500
                    </p>
                    <p className="text-gray-600">Montréal, QC H1A 1A1</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <PhoneIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">Phone</h3>
                    <p className="text-gray-600">(514) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <MailIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">Email</h3>
                    <p className="text-gray-600">info@drelisaleh.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <ClockIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: By appointment only
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-md">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 flex-shrink-0">
                    <InfoIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-2">
                      Hospital Affiliations
                    </h3>
                    <p className="text-gray-600 mb-1">
                      <strong>SENSA MD</strong> - Private practice for aesthetic
                      procedures
                    </p>
                    <p className="text-gray-600">
                      <strong>Hôpital Maisonneuve-Rosemont</strong> - Academic
                      position for reconstructive surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-md shadow-md border border-gray-100">
                <h2 className="text-2xl font-light mb-6">
                  Request a Consultation
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Consultation Process Section - Now first */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What to Expect" title="The Consultation Process" description="Understanding what to expect during your consultation with Dr. Saleh." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <CalendarIcon size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-light mb-3">Before Your Visit</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete your patient forms</li>
                <li>• Gather your medical history</li>
                <li>• Prepare questions for Dr. Saleh</li>
                <li>• Consider your aesthetic goals</li>
                <li>• Arrange transportation if needed</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <UserIcon size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-light mb-3">
                During Your Consultation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Discuss your aesthetic goals</li>
                <li>• Undergo physical examination</li>
                <li>• Review procedure options</li>
                <li>• Discuss potential outcomes</li>
                <li>• Receive a personalized plan</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ShieldIcon size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-light mb-3">
                After Your Consultation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Receive a detailed treatment plan</li>
                <li>• Review procedure cost estimate</li>
                <li>• Consider financing options</li>
                <li>• Schedule your procedure date</li>
                <li>• Obtain pre-operative instructions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Consultation FAQ Section - Now second */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Consultation Information" title="Frequently Asked Questions" description="Find answers to common questions about consultations with Dr. Saleh." />
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
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
              Take the first step toward achieving your aesthetic goals by
              scheduling your consultation with Dr. Saleh today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+15145551234" className="bg-[#C6AF75] text-[#141926] hover:bg-[#b39c62] px-8 py-3.5 rounded-md text-lg font-medium transition-colors">
                Call (514) 555-1234
              </a>
              <a href="mailto:info@drelisaleh.com" className="bg-transparent text-white border border-white hover:bg-white hover:text-[#141926] px-8 py-3.5 rounded-md text-lg font-medium transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;