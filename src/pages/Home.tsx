import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import SectionHeading from "../components/SectionHeading";
import Stats from "../components/Stats";
import Accordion from "../components/Accordion";
import { HeartIcon, AwardIcon, ClockIcon, ChevronRightIcon, CheckCircleIcon, UserIcon, SmileIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const content = {
    en: {
      hero: {
        title1: "Refined Aesthetics,",
        title2: "Natural Results",
        description:
          "Dr. Eli Saleh combines surgical expertise with an artistic vision to enhance your natural beauty with results that look and feel authentic.",
        exploreProcedures: "Explore Procedures",
        scheduleConsultation: "Schedule Consultation",
      },
      services: {
        subtitle: "Our Expertise",
        title: "Comprehensive Aesthetic & Reconstructive Solutions",
        description:
          "Dr. Saleh offers a full spectrum of procedures to enhance your natural beauty and restore form and function.",
        viewAll: "View All Procedures",
        items: [
          {
            title: "Facial Procedures",
            description:
              "Enhance your natural beauty with procedures designed to rejuvenate and refine facial features.",
            link: "/services#facial",
          },
          {
            title: "Breast Procedures",
            description:
              "Achieve the silhouette you desire with our comprehensive breast enhancement and reconstruction options.",
            link: "/services#breast",
          },
          {
            title: "Body Procedures",
            description: "Sculpt and contour your body with procedures tailored to help you look and feel your best.",
            link: "/services#body",
          },
          {
            title: "Non-Surgical",
            description:
              "Explore our range of minimally invasive treatments for rejuvenation with little to no downtime.",
            link: "/services#nonsurgical",
          },
        ],
      },
      about: {
        subtitle: "About Dr. Saleh",
        title: "Expertise That Inspires Confidence",
        description:
          "Board-certified plastic surgeon specializing in aesthetic and reconstructive procedures with advanced fellowship training.",
        learnMore: "Learn More About Dr. Saleh",
        features: [
          {
            title: "Advanced Training",
            description:
              "Completed prestigious fellowship in Breast Aesthetic and Reconstructive Microsurgery at Manhattan Eye, Ear & Throat Hospital in NYC.",
          },
          {
            title: "Artistic Approach",
            description:
              "Combines technical precision with an artistic eye to create natural-looking, harmonious results tailored to each patient.",
          },
          {
            title: "Patient-Centered Philosophy",
            description:
              "Dedicated to understanding your unique goals and concerns, ensuring personalized care at every step.",
          },
          {
            title: "Academic Excellence",
            description:
              "Contributes to medical education and reconstructive surgery at Hôpital Maisonneuve-Rosemont, staying at the forefront of plastic surgery advances.",
          },
        ],
      },
      stats: [
        { value: "MD, MSc", label: "Medical Degrees" },
        { value: "FRCSc", label: "Board Certification" },
        { value: "2", label: "Hospital Affiliations" },
      ],
      approach: {
        subtitle: "Our Approach",
        title: "The Patient Experience",
        description: "We are committed to excellence at every stage of your journey with us.",
        steps: [
          {
            number: "1",
            title: "Consultation",
            description:
              "A thorough discussion of your goals, concerns, and options in a comfortable, no-pressure environment. Dr. Saleh takes the time to listen and understand your unique aesthetic vision.",
          },
          {
            number: "2",
            title: "Personalized Plan",
            description:
              "A customized treatment approach designed specifically for your unique anatomy and aesthetic goals. Each plan is meticulously crafted to achieve natural, harmonious results.",
          },
          {
            number: "3",
            title: "Expert Care",
            description:
              "Procedures performed with meticulous attention to detail in a state-of-the-art, safe environment. Dr. Saleh's technical precision and artistic approach ensure exceptional results.",
          },
          {
            number: "4",
            title: "Attentive Follow-Up",
            description:
              "Comprehensive post-operative care and ongoing support throughout your recovery journey. Our team remains accessible to address any questions or concerns as you heal.",
          },
        ],
      },
      testimonials: {
        subtitle: "Patient Stories",
        title: "What Our Patients Say",
        description: "Hear from those who have trusted Dr. Saleh with their aesthetic and reconstructive journeys.",
        items: [
          {
            quote:
              "Dr. Saleh's attention to detail and artistic approach resulted in exactly the natural look I was hoping for. His expertise and genuine care made the entire experience exceptional.",
            author: "Marie L.",
            position: "Facial Rejuvenation Patient",
          },
          {
            quote:
              "After my breast reconstruction, I feel whole again. Dr. Saleh's technical skill is matched only by his compassion. He guided me through every step with patience and understanding.",
            author: "Sophie T.",
            position: "Reconstruction Patient",
          },
          {
            quote:
              "The results of my procedure exceeded my expectations. Dr. Saleh took the time to understand my goals and concerns, creating a customized approach that was perfect for me.",
            author: "Jean M.",
            position: "Body Contouring Patient",
          },
        ],
      },
      faq: {
        subtitle: "Common Questions",
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about plastic surgery and our practice.",
        additionalQuestions: "Have additional questions? We are here to help.",
        contactUs: "Contact Us",
        items: [
          {
            title: "What happens during a consultation?",
            content:
              "During your initial consultation, Dr. Saleh will discuss your goals, medical history, and concerns. He will perform an examination, explain appropriate procedure options, and develop a personalized treatment plan. This is also an opportunity to ask questions and view before/after photos of similar cases.",
          },
          {
            title: "How do I prepare for plastic surgery?",
            content:
              "Preparation varies by procedure, but generally includes: stopping smoking at least 4 weeks before surgery, avoiding certain medications and supplements, arranging for recovery time and assistance, and following specific pre-operative instructions provided by our team.",
          },
          {
            title: "What is the recovery process like?",
            content:
              "Recovery depends on the specific procedure performed. Dr. Saleh will provide detailed post-operative instructions, schedule follow-up appointments to monitor your healing, and remain available to address any concerns. Most patients return to normal activities within 1-6 weeks, depending on the procedure.",
          },
          {
            title: "Are the results permanent?",
            content:
              "Many surgical procedures provide long-lasting results, though natural aging continues. Non-surgical treatments typically require maintenance. Dr. Saleh will discuss the expected longevity of your specific procedure during your consultation and recommend maintenance strategies when appropriate.",
          },
        ],
      },
      cta: {
        title: "Begin Your Transformation",
        description: "Schedule a consultation with Dr. Saleh to discuss your aesthetic goals and explore your options.",
        button: "Book Your Consultation",
      },
    },
    fr: {
      hero: {
        title1: "Esthétique raffinée,",
        title2: "résultats naturels",
        description:
          "Dr. Eli Saleh allie expertise chirurgicale et vision artistique pour sublimer votre beauté naturelle avec des résultats authentiques.",
        exploreProcedures: "Explorer les interventions",
        scheduleConsultation: "Prendre rendez-vous",
      },
      services: {
        subtitle: "Notre Expertise",
        title: "Solutions esthétiques et reconstructrices complètes",
        description:
          "Dr. Saleh offre une gamme complète d'interventions pour sublimer votre beauté naturelle et restaurer forme et fonction.",
        viewAll: "Voir toutes les interventions",
        items: [
          {
            title: "Interventions du visage",
            description:
              "Sublimez votre beauté naturelle avec des interventions conçues pour rajeunir et affiner les traits du visage.",
            link: "/fr/services#facial",
          },
          {
            title: "Interventions mammaires",
            description:
              "Obtenez la silhouette désirée avec nos options complètes d'augmentation et de reconstruction mammaire.",
            link: "/fr/services#breast",
          },
          {
            title: "Interventions corporelles",
            description:
              "Sculptez et modelez votre corps avec des interventions adaptées pour vous aider à vous sentir au mieux.",
            link: "/fr/services#body",
          },
          {
            title: "Non-chirurgical",
            description:
              "Découvrez notre gamme de traitements peu invasifs pour un rajeunissement avec peu ou pas de temps de récupération.",
            link: "/fr/services#nonsurgical",
          },
        ],
      },
      about: {
        subtitle: "À Propos de Dr. Saleh",
        title: "Une expertise qui inspire confiance",
        description:
          "Chirurgien plasticien certifié spécialisé dans les interventions esthétiques et reconstructrices avec une formation avancée en fellowship.",
        learnMore: "En savoir plus sur Dr. Saleh",
        features: [
          {
            title: "Formation avancée",
            description:
              "A complété un fellowship prestigieux en Chirurgie Esthétique et Reconstructrice Mammaire par Microchirurgie au Manhattan Eye, Ear & Throat Hospital à New York.",
          },
          {
            title: "Approche artistique",
            description:
              "Combine précision technique et sens artistique pour créer des résultats naturels et harmonieux adaptés à chaque patient.",
          },
          {
            title: "Philosophie centrée sur le patient",
            description:
              "Dédié à comprendre vos objectifs et préoccupations uniques, assurant des soins personnalisés à chaque étape.",
          },
          {
            title: "Excellence académique",
            description:
              "Contribue à l'éducation médicale et à la chirurgie reconstructrice à l'Hôpital Maisonneuve-Rosemont, restant à l'avant-garde des avancées en chirurgie plastique.",
          },
        ],
      },
      stats: [
        { value: "MD, MSc", label: "Diplômes médicaux" },
        { value: "FRCSc", label: "Certification" },
        { value: "2", label: "Affiliations hospitalières" },
      ],
      approach: {
        subtitle: "Notre Approche",
        title: "L'Expérience Patient",
        description: "Nous nous engageons à l'excellence à chaque étape de votre parcours avec nous.",
        steps: [
          {
            number: "1",
            title: "Consultation",
            description:
              "Une discussion approfondie de vos objectifs, préoccupations et options dans un environnement confortable et sans pression. Dr. Saleh prend le temps d'écouter et de comprendre votre vision esthétique unique.",
          },
          {
            number: "2",
            title: "Plan personnalisé",
            description:
              "Une approche de traitement sur mesure conçue spécifiquement pour votre anatomie et vos objectifs esthétiques uniques. Chaque plan est méticuleusement élaboré pour obtenir des résultats naturels et harmonieux.",
          },
          {
            number: "3",
            title: "Soins experts",
            description:
              "Des interventions réalisées avec une attention méticuleuse aux détails dans un environnement sécuritaire et à la pointe de la technologie. La précision technique et l'approche artistique du Dr. Saleh garantissent des résultats exceptionnels.",
          },
          {
            number: "4",
            title: "Suivi attentif",
            description:
              "Des soins post-opératoires complets et un soutien continu tout au long de votre parcours de récupération. Notre équipe reste accessible pour répondre à toutes vos questions ou préoccupations pendant votre guérison.",
          },
        ],
      },
      testimonials: {
        subtitle: "Témoignages",
        title: "Ce que disent nos patients",
        description:
          "Découvrez les témoignages de ceux qui ont fait confiance au Dr. Saleh pour leurs parcours esthétiques et reconstructeurs.",
        items: [
          {
            quote:
              "L'attention aux détails et l'approche artistique du Dr. Saleh ont donné exactement le look naturel que j'espérais. Son expertise et son soin sincère ont rendu toute l'expérience exceptionnelle.",
            author: "Marie L.",
            position: "Patiente en Rajeunissement Facial",
          },
          {
            quote:
              "Après ma reconstruction mammaire, je me sens à nouveau entière. La compétence technique du Dr. Saleh n'a d'égale que sa compassion. Il m'a guidée à chaque étape avec patience et compréhension.",
            author: "Sophie T.",
            position: "Patiente en Reconstruction",
          },
          {
            quote:
              "Les résultats de mon intervention ont dépassé mes attentes. Dr. Saleh a pris le temps de comprendre mes objectifs et préoccupations, créant une approche personnalisée parfaite pour moi.",
            author: "Jean M.",
            position: "Patient en Remodelage Corporel",
          },
        ],
      },
      faq: {
        subtitle: "Questions Fréquentes",
        title: "Foire aux questions",
        description: "Trouvez des réponses aux questions courantes sur la chirurgie plastique et notre pratique.",
        additionalQuestions: "Avez-vous d'autres questions? Nous sommes là pour vous aider.",
        contactUs: "Nous contacter",
        items: [
          {
            title: "Que se passe-t-il lors d'une consultation?",
            content:
              "Lors de votre consultation initiale, Dr. Saleh discutera de vos objectifs, de votre historique médical et de vos préoccupations. Il effectuera un examen, expliquera les options d'intervention appropriées et développera un plan de traitement personnalisé. C'est aussi l'occasion de poser des questions et de voir des photos avant/après de cas similaires.",
          },
          {
            title: "Comment me préparer pour une chirurgie plastique?",
            content:
              "La préparation varie selon l'intervention, mais comprend généralement: arrêter de fumer au moins 4 semaines avant la chirurgie, éviter certains médicaments et suppléments, prévoir du temps de récupération et de l'assistance, et suivre les instructions pré-opératoires spécifiques fournies par notre équipe.",
          },
          {
            title: "Comment se déroule la récupération?",
            content:
              "La récupération dépend de l'intervention spécifique réalisée. Dr. Saleh fournira des instructions post-opératoires détaillées, planifiera des rendez-vous de suivi pour surveiller votre guérison et restera disponible pour répondre à toute préoccupation. La plupart des patients reprennent leurs activités normales dans un délai de 1 à 6 semaines, selon l'intervention.",
          },
          {
            title: "Les résultats sont-ils permanents?",
            content:
              "De nombreuses interventions chirurgicales offrent des résultats durables, bien que le vieillissement naturel continue. Les traitements non chirurgicaux nécessitent généralement un entretien. Dr. Saleh discutera de la durée prévue de votre intervention spécifique lors de votre consultation et recommandera des stratégies d'entretien si approprié.",
          },
        ],
      },
      cta: {
        title: "Commencez votre transformation",
        description:
          "Prenez rendez-vous avec Dr. Saleh pour discuter de vos objectifs esthétiques et explorer vos options.",
        button: "Réserver votre consultation",
      },
    },
  };

  const t = content[language];
  const servicesPath = isFr ? "/fr/services" : "/services";
  const contactPath = isFr ? "/fr/contact" : "/contact";
  const aboutPath = isFr ? "/fr/a-propos" : "/about";

  const serviceImages = [
    "/ChatGPT_Image_Oct_1%2C_2025%2C_11_36_11_AM.png",
    "/ChatGPT_Image_Oct_1%2C_2025%2C_11_49_28_AM_1.png",
    "/ChatGPT_Image_Oct_1%2C_2025%2C_12_09_39_PM.png",
    "/ChatGPT_Image_Oct_1%2C_2025%2C_12_21_02_PM.png",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                {t.hero.title1}
                <br />
                <span className="text-black">{t.hero.title2}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">{t.hero.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button to={servicesPath} size="lg">
                  {t.hero.exploreProcedures}
                </Button>
                <Button to={contactPath} variant="outline" size="lg">
                  {t.hero.scheduleConsultation}
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
          <SectionHeading
            subtitle={t.services.subtitle}
            title={t.services.title}
            description={t.services.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {t.services.items.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<div />}
                link={service.link}
                image={serviceImages[index]}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to={servicesPath} variant="outline">
              {t.services.viewAll}
            </Button>
          </div>
        </div>
      </section>
      {/* About/Why Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img
                src="/DR.ElieSaleh-041.jpg"
                alt="Dr. Eli Saleh in his clinical environment"
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading
                subtitle={t.about.subtitle}
                title={t.about.title}
                description={t.about.description}
                alignment="left"
              />
              <div className="space-y-4 mb-8">
                {t.about.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon size={24} className="text-black mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-light mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button to={aboutPath} icon={<ChevronRightIcon size={16} />}>
                {t.about.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Stats items={t.stats} className="py-8" />
        </div>
      </section>
      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={t.approach.subtitle}
            title={t.approach.title}
            description={t.approach.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {t.approach.steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-md shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-[#141926] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="font-medium">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-light">{step.title}</h3>
                </div>
                <p className="text-gray-600 ml-12">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={t.testimonials.subtitle}
            title={t.testimonials.title}
            description={t.testimonials.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t.faq.subtitle} title={t.faq.title} description={t.faq.description} />
          <div className="max-w-3xl mx-auto">
            <Accordion
              items={t.faq.items.map((item) => ({
                title: item.title,
                content: <p>{item.content}</p>,
              }))}
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">{t.faq.additionalQuestions}</p>
            <Button to={contactPath}>{t.faq.contactUs}</Button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#141926] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">{t.cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{t.cta.description}</p>
            <Button to={contactPath} size="lg" className="bg-[#C6AF75] text-white hover:bg-[#b39c62]">
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
