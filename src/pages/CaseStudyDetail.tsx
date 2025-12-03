import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, QuoteIcon } from 'lucide-react';
const CaseStudyDetail = () => {
  const {
    id
  } = useParams();
  // This would typically come from an API or database
  // For this example, we'll hard-code a case study
  const caseStudy = {
    id: 'retail-transformation',
    title: 'Retail Digital Transformation',
    category: 'Digital Transformation',
    industry: 'Retail',
    client: 'NationalMart',
    duration: '8 months',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    challenge: 'NationalMart, a brick-and-mortar retail chain with 200+ locations nationwide, was facing declining sales and increasing competition from e-commerce giants. Their existing online presence was outdated, accounting for less than 5% of total sales, and their in-store operations lacked the digital integration needed to meet changing customer expectations.',
    approach: ['Conducted comprehensive analysis of current digital capabilities and customer journey', 'Developed an integrated omnichannel strategy connecting online and in-store experiences', 'Redesigned e-commerce platform with focus on user experience and mobile optimization', 'Implemented data analytics system to enable personalized marketing and inventory management', 'Created digital training program for store associates to enhance customer service'],
    solution: "We designed and implemented a comprehensive digital transformation strategy that revolutionized both NationalMart's customer-facing experiences and back-end operations. This included a complete overhaul of their e-commerce platform, implementation of a unified inventory management system, integration of in-store digital touchpoints, and development of a mobile app with features like scan-and-go checkout and personalized recommendations.",
    results: ['120% increase in online sales within 12 months', '35% improvement in customer satisfaction scores', '18% reduction in operational costs through improved inventory management', '42% increase in mobile app engagement metrics', '22% growth in average transaction value through personalized recommendations'],
    testimonial: {
      quote: "Stratify Consulting didn't just deliver a new website or app – they transformed how we think about retail. Their strategic approach connected our digital and physical channels in ways that genuinely improved the customer experience while driving significant revenue growth.",
      author: 'Sarah Johnson',
      position: 'Chief Digital Officer',
      company: 'NationalMart'
    }
  };
  if (!caseStudy) {
    return <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
        <p className="mb-8">
          The case study you're looking for doesn't exist or has been removed.
        </p>
        <Button to="/case-studies" variant="primary">
          Back to Case Studies
        </Button>
      </div>;
  }
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/case-studies" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
              <ArrowLeftIcon size={16} className="mr-2" /> Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {caseStudy.industry}
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {caseStudy.category}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <p className="text-blue-200 text-sm">Client</p>
                <p className="font-semibold">{caseStudy.client}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Industry</p>
                <p className="font-semibold">{caseStudy.industry}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Service</p>
                <p className="font-semibold">{caseStudy.category}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Duration</p>
                <p className="font-semibold">{caseStudy.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading subtitle="The Challenge" title="Understanding the Problem" alignment="left" />
            <p className="text-gray-700 text-lg mb-8">{caseStudy.challenge}</p>
          </div>
        </div>
      </section>
      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading subtitle="Our Approach" title="How We Tackled the Challenge" alignment="left" />
            <div className="space-y-4 mb-8">
              {caseStudy.approach.map((step, index) => <div key={index} className="flex items-start">
                  <CheckCircleIcon size={24} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{step}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading subtitle="The Solution" title="Implementing Strategic Change" alignment="left" />
            <p className="text-gray-700 text-lg mb-8">{caseStudy.solution}</p>
          </div>
        </div>
      </section>
      {/* Results Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading subtitle="The Results" title="Measurable Business Impact" alignment="left" className="text-white" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {caseStudy.results.map((result, index) => <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-white font-medium">{result}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <QuoteIcon size={40} className="text-blue-100 mb-4" />
              <p className="text-gray-700 text-xl italic mb-6">
                {caseStudy.testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-gray-600">
                  {caseStudy.testimonial.position},{' '}
                  {caseStudy.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Let's discuss how our expertise can help your business overcome
              challenges and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" size="lg">
                Schedule a Consultation
              </Button>
              <Button to="/case-studies" variant="outline" size="lg" icon={<ArrowRightIcon size={16} />}>
                Explore More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default CaseStudyDetail;