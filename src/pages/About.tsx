import React from "react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import Stats from "../components/Stats";
import { GraduationCapIcon, AwardIcon, HeartIcon, BookOpenIcon, StarIcon, UserIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const contactPath = isFr ? "/fr/contact" : "/contact";

  const content = {
    en: {
      hero: {
        title: "About Dr. Eli Saleh",
        description:
          "Board-certified plastic and reconstructive surgeon dedicated to excellence in both aesthetic and reconstructive surgery.",
      },
      bio: {
        subtitle: "My Story",
        title: "Dedicated to Surgical Excellence",
        paragraphs: [
          "Dr. Eli Saleh, MD, MSc, FRCSc, is a board-certified plastic and reconstructive surgeon dedicated to excellence in both aesthetic and reconstructive surgery.",
          "He completed his medical degree and a Master's in Clinical Research at the Université de Montréal, where he also pursued his residency training in Plastic and Reconstructive Surgery. During this time, he developed a strong passion for aesthetic surgery and breast reconstruction, fields that allow him to establish his aesthetic practice.",
          "To further refine his expertise, Dr. Saleh completed a prestigious fellowship in Breast Aesthetic and Reconstructive Microsurgery at the renowned Manhattan Eye, Ear & Throat Hospital (MEETH) in New York City. There, he trained with leaders in the field, mastering advanced techniques in both cosmetic breast surgery and complex microsurgical reconstruction.",
          "Now returning to Montréal, Dr. Saleh is establishing his practice at SENSA MD, where he is committed to offering cutting-edge aesthetic procedures tailored to each patient. In parallel, he is also joining the academic team at Hôpital Maisonneuve-Rosemont (HMR), where he contributes to reconstructive surgery and medical education. His philosophy is patient-centred, with a focus on natural results, safety, and long-term outcomes.",
        ],
        scheduleButton: "Schedule a Consultation",
      },
      stats: [
        { value: "MD, MSc", label: "Medical Degrees" },
        { value: "FRCSc", label: "Board Certification" },
        { value: "2", label: "Hospital Affiliations" },
      ],
      qualifications: {
        subtitle: "Education & Training",
        title: "Professional Qualifications",
        description:
          "Dr. Saleh's extensive education and training have prepared him to deliver exceptional care across a range of plastic surgery procedures.",
        items: [
          {
            title: "Medical Degree",
            institution: "Université de Montréal",
            description: "Doctor of Medicine with honors",
          },
          {
            title: "Master's in Clinical Research",
            institution: "Université de Montréal",
            description: "Advanced research methodology and clinical applications",
          },
          {
            title: "Residency Training",
            institution: "Université de Montréal",
            description: "Plastic and Reconstructive Surgery",
          },
          {
            title: "Fellowship",
            institution: "Manhattan Eye, Ear & Throat Hospital, NYC",
            description: "Breast Aesthetic and Reconstructive Microsurgery",
          },
          {
            title: "Board Certification",
            institution: "Royal College of Surgeons of Canada",
            description: "Fellow of the Royal College of Surgeons of Canada (FRCSc)",
          },
          {
            title: "Academic Appointment",
            institution: "Hôpital Maisonneuve-Rosemont",
            description: "Contributing to reconstructive surgery and medical education",
          },
        ],
      },
      philosophy: {
        subtitle: "My Approach",
        title: "Surgical Philosophy",
        description:
          "Dr. Saleh's approach to plastic surgery is guided by core principles that prioritize patient safety, natural results, and personalized care.",
        items: [
          {
            title: "Patient-Centered Care",
            description:
              "Every treatment plan begins with listening carefully to your goals and concerns. Dr. Saleh takes the time to understand your unique situation and develops a personalized approach that aligns with your vision.",
          },
          {
            title: "Natural-Looking Results",
            description:
              "Dr. Saleh believes that the best plastic surgery appears natural and harmonious. His artistic eye and technical precision work together to enhance your features while maintaining your unique identity.",
          },
          {
            title: "Safety First",
            description:
              "Your wellbeing is paramount. Dr. Saleh employs the highest standards of safety and care, using advanced techniques and technologies to minimize risks and optimize outcomes.",
          },
          {
            title: "Comprehensive Support",
            description:
              "From your initial consultation through recovery and beyond, Dr. Saleh and his team provide attentive support and guidance at every step of your journey.",
          },
        ],
      },
      cta: {
        title: "Ready to Begin Your Journey?",
        description: "Schedule a consultation with Dr. Saleh to discuss your aesthetic goals and explore your options.",
        button: "Book Your Consultation",
      },
    },
    fr: {
      hero: {
        title: "À propos de Dr. Eli Saleh",
        description:
          "Chirurgien plasticien et reconstructeur certifié, dédié à l'excellence en chirurgie esthétique et reconstructrice.",
      },
      bio: {
        subtitle: "Mon parcours",
        title: "Dédié à l'excellence chirurgicale",
        paragraphs: [
          "Dr. Eli Saleh, MD, MSc, FRCSc, est un chirurgien plasticien et reconstructeur certifié, dédié à l'excellence en chirurgie esthétique et reconstructrice.",
          "Il a complété son doctorat en médecine et une maîtrise en recherche clinique à l'Université de Montréal, où il a également poursuivi sa résidence en chirurgie plastique et reconstructrice. Durant cette période, il a développé une forte passion pour la chirurgie esthétique et la reconstruction mammaire, des domaines qui lui permettent d'établir sa pratique esthétique.",
          "Pour affiner davantage son expertise, Dr. Saleh a complété un fellowship prestigieux en chirurgie esthétique et reconstructrice mammaire par microchirurgie au célèbre Manhattan Eye, Ear & Throat Hospital (MEETH) à New York. Il y a été formé par des leaders du domaine, maîtrisant des techniques avancées en chirurgie mammaire cosmétique et en reconstruction microchirurgicale complexe.",
          "De retour à Montréal, Dr. Saleh établit sa pratique chez SENSA MD, où il s'engage à offrir des interventions esthétiques de pointe adaptées à chaque patient. Parallèlement, il rejoint l'équipe académique de l'Hôpital Maisonneuve-Rosemont (HMR), où il contribue à la chirurgie reconstructrice et à l'éducation médicale. Sa philosophie est centrée sur le patient, avec un accent sur les résultats naturels, la sécurité et les résultats à long terme.",
        ],
        scheduleButton: "Prendre rendez-vous",
      },
      stats: [
        { value: "MD, MSc", label: "Diplômes médicaux" },
        { value: "FRCSc", label: "Certification" },
        { value: "2", label: "Affiliations hospitalières" },
      ],
      qualifications: {
        subtitle: "Éducation et formation",
        title: "Qualifications professionnelles",
        description:
          "La formation approfondie du Dr. Saleh l'a préparé à offrir des soins exceptionnels dans une gamme d'interventions de chirurgie plastique.",
        items: [
          {
            title: "Doctorat en médecine",
            institution: "Université de Montréal",
            description: "Doctorat en médecine avec distinction",
          },
          {
            title: "Maîtrise en recherche clinique",
            institution: "Université de Montréal",
            description: "Méthodologie de recherche avancée et applications cliniques",
          },
          {
            title: "Résidence",
            institution: "Université de Montréal",
            description: "Chirurgie Plastique et Reconstructrice",
          },
          {
            title: "Fellowship",
            institution: "Manhattan Eye, Ear & Throat Hospital, NYC",
            description: "Chirurgie Esthétique et Reconstructrice Mammaire par Microchirurgie",
          },
          {
            title: "Certification",
            institution: "Collège Royal des Chirurgiens du Canada",
            description: "Fellow du Collège Royal des Chirurgiens du Canada (FRCSc)",
          },
          {
            title: "Poste académique",
            institution: "Hôpital Maisonneuve-Rosemont",
            description: "Contribution à la chirurgie reconstructrice et à l'éducation médicale",
          },
        ],
      },
      philosophy: {
        subtitle: "Mon approche",
        title: "Philosophie chirurgicale",
        description:
          "L'approche du Dr. Saleh en chirurgie plastique est guidée par des principes fondamentaux qui privilégient la sécurité du patient, les résultats naturels et les soins personnalisés.",
        items: [
          {
            title: "Soins centrés sur le patient",
            description:
              "Chaque plan de traitement commence par écouter attentivement vos objectifs et préoccupations. Dr. Saleh prend le temps de comprendre votre situation unique et développe une approche personnalisée alignée sur votre vision.",
          },
          {
            title: "Résultats naturels",
            description:
              "Dr. Saleh croit que la meilleure chirurgie plastique paraît naturelle et harmonieuse. Son sens artistique et sa précision technique travaillent ensemble pour sublimer vos traits tout en préservant votre identité unique.",
          },
          {
            title: "Sécurité avant tout",
            description:
              "Votre bien-être est primordial. Dr. Saleh applique les plus hauts standards de sécurité et de soins, utilisant des techniques et technologies avancées pour minimiser les risques et optimiser les résultats.",
          },
          {
            title: "Accompagnement complet",
            description:
              "De votre consultation initiale jusqu'à la récupération et au-delà, Dr. Saleh et son équipe fournissent un soutien attentif et des conseils à chaque étape de votre parcours.",
          },
        ],
      },
      cta: {
        title: "Prêt à commencer votre parcours?",
        description:
          "Prenez rendez-vous avec Dr. Saleh pour discuter de vos objectifs esthétiques et explorer vos options.",
        button: "Réserver votre consultation",
      },
    },
  };

  const t = content[language];

  const qualificationIcons = [
    <GraduationCapIcon size={24} className="text-black" />,
    <BookOpenIcon size={24} className="text-black" />,
    <UserIcon size={24} className="text-black" />,
    <StarIcon size={24} className="text-black" />,
    <AwardIcon size={24} className="text-black" />,
    <HeartIcon size={24} className="text-black" />,
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6">{t.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{t.hero.description}</p>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading subtitle={t.bio.subtitle} title={t.bio.title} alignment="left" />
              <div className="prose max-w-none">
                {t.bio.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-gray-600 ${index < t.bio.paragraphs.length - 1 ? "mb-6" : ""}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Button to={contactPath}>{t.bio.scheduleButton}</Button>
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
          <Stats items={t.stats} className="py-8" />
        </div>
      </section>
      {/* Qualifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle={t.qualifications.subtitle}
            title={t.qualifications.title}
            description={t.qualifications.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {t.qualifications.items.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-md">
                <div className="bg-white w-12 h-12 rounded-md flex items-center justify-center mb-6 shadow-sm">
                  {qualificationIcons[index]}
                </div>
                <h3 className="text-xl font-light mb-2">{item.title}</h3>
                <p className="text-gray-800 font-medium mb-2">{item.institution}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading
                subtitle={t.philosophy.subtitle}
                title={t.philosophy.title}
                description={t.philosophy.description}
                alignment="left"
              />
              <div className="space-y-6">
                {t.philosophy.items.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-md shadow-sm">
                    <h3 className="text-xl font-light mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/DR.ElieSaleh-241.jpg"
                alt="Dr. Eli Saleh in his clinical environment"
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#141926] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">{t.cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{t.cta.description}</p>
            <Button to={contactPath} size="lg" className="bg-[#C6AF75] text-[#141926] hover:bg-[#b39c62]">
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
