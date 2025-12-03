import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { ArrowRightIcon, FilterIcon } from 'lucide-react';
const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'strategy',
    label: 'Business Strategy'
  }, {
    id: 'operations',
    label: 'Operations'
  }, {
    id: 'digital',
    label: 'Digital Transformation'
  }, {
    id: 'finance',
    label: 'Financial Advisory'
  }];
  const caseStudies = [{
    id: 'retail-transformation',
    title: 'Retail Digital Transformation',
    category: 'digital',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'How we helped a national retail chain increase online sales by 120% through digital transformation.',
    results: ['120% increase in online sales', '35% improvement in customer satisfaction', '18% reduction in operational costs']
  }, {
    id: 'healthcare-operations',
    title: 'Healthcare Operations Optimization',
    category: 'operations',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Streamlining operations for a hospital network resulting in $2.5M annual savings and improved patient care.',
    results: ['$2.5M annual cost savings', '22% reduction in patient wait times', '15% increase in staff productivity']
  }, {
    id: 'fintech-strategy',
    title: 'FinTech Growth Strategy',
    category: 'strategy',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Developing a market expansion strategy for a fintech startup that led to 300% user growth in 18 months.',
    results: ['300% user growth in 18 months', '5 new markets successfully entered', 'Series B funding secured ($25M)']
  }, {
    id: 'manufacturing-supply-chain',
    title: 'Manufacturing Supply Chain Resilience',
    category: 'operations',
    industry: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: "Redesigning a global manufacturer's supply chain to improve resilience and reduce disruption risks.",
    results: ['47% reduction in supply chain disruptions', '28% decrease in inventory costs', 'Improved supplier diversity by 35%']
  }, {
    id: 'saas-pricing-strategy',
    title: 'SaaS Pricing Strategy Optimization',
    category: 'strategy',
    industry: 'Technology',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Developing an optimized pricing strategy for a B2B SaaS platform, resulting in 40% revenue growth.',
    results: ['40% revenue growth in 12 months', '23% increase in average contract value', 'Churn reduced by 15%']
  }, {
    id: 'banking-digital-transformation',
    title: 'Banking Digital Transformation',
    category: 'digital',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Helping a regional bank transform its digital customer experience and internal operations.',
    results: ['68% increase in mobile banking adoption', '42% reduction in processing time', 'Customer satisfaction up by 37%']
  }, {
    id: 'pharmaceutical-merger',
    title: 'Pharmaceutical Merger Integration',
    category: 'finance',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Guiding a successful $1.2B merger between two pharmaceutical companies with minimal disruption.',
    results: ['$1.2B merger completed ahead of schedule', '$95M in synergy savings identified', '97% key talent retention']
  }, {
    id: 'telecom-customer-experience',
    title: 'Telecom Customer Experience Redesign',
    category: 'digital',
    industry: 'Telecommunications',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Transforming the customer experience for a major telecom provider, reducing churn and increasing NPS.',
    results: ['Customer churn reduced by 32%', 'NPS increased from +8 to +42', 'Customer acquisition costs down 25%']
  }, {
    id: 'energy-sustainability',
    title: 'Energy Company Sustainability Strategy',
    category: 'strategy',
    industry: 'Energy',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Developing a comprehensive sustainability strategy for an energy company transitioning to renewable sources.',
    results: ['Carbon emissions reduced by 45%', 'Renewable energy portfolio expanded by 200%', 'ESG rating improved from B to A-']
  }];
  const filteredStudies = activeFilter === 'all' ? caseStudies : caseStudies.filter(study => study.category === activeFilter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore how we've helped businesses across industries overcome
              challenges and achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>
      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0">
            <FilterIcon size={20} className="text-gray-400 mr-2 flex-shrink-0" />
            {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === filter.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {filter.label}
              </button>)}
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map(study => <div key={study.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg group">
                <div className="relative h-56 overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded">
                    {study.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Results:
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => <li key={index} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span> {result}
                        </li>)}
                    </ul>
                  </div>
                  <Link to={`/case-studies/${study.id}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                    Read Full Case Study{' '}
                    <ArrowRightIcon size={16} className="ml-2" />
                  </Link>
                </div>
              </div>)}
          </div>
          {filteredStudies.length === 0 && <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">
                No case studies found
              </h3>
              <p className="text-gray-600">
                Try selecting a different filter category.
              </p>
            </div>}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our expertise can help your business overcome
              challenges and achieve its full potential.
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-md text-lg font-medium transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default CaseStudies;