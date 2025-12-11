import React from "react";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CalendarIcon, InfoIcon, ShieldIcon, UserIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const content = {
    en: {
      hero: {
        title: "Contact Us",
        description: "We're here to answer your questions and help you schedule your consultation with Dr. Saleh.",
      },
      contactInfo: {
        subtitle: "Get in Touch",
        title: "Contact Information",
        description: "Reach out to schedule your consultation or to have any questions answered by our dedicated team.",
        location: {
          title: "Office Location",
          address1: "750 Lucerne Rd.",
          address2: "Mont Royal, QC, H3R 2H6",
        },
        phone: {
          title: "Phone",
        },
        email: {
          title: "Email",
        },
        hours: {
          title: "Office Hours",
          weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
          saturday: "Saturday: By appointment only",
          sunday: "Sunday: Closed",
        },
        affiliations: {
          title: "Hospital Affiliations",
          sensa: "SENSA MD - Private practice for aesthetic procedures",
          hmr: "Hôpital Maisonneuve-Rosemont - Academic position for reconstructive surgery",
        },
      },
      form: {
        title: "Request a Consultation",
      },
      process: {
        subtitle: "What to Expect",
        title: "The Consultation Process",
        description: "Understanding what to expect during your consultation with Dr. Saleh.",
        before: {
          title: "Before Your Visit",
          items: [
            "Complete your patient forms",
            "Gather your medical history",
            "Prepare questions for Dr. Saleh",
            "Consider your aesthetic goals",
          ],
        },
        during: {
          title: "During Your Consultation",
          items: [
            "Discuss your aesthetic goals",
            "Undergo physical examination",
            "Review procedure options",
            "Discuss potential outcomes",
            "Receive a personalized plan",
          ],
        },
        after: {
          title: "After Your Consultation",
          items: [
            "Receive a detailed treatment plan",
            "Review procedure cost estimate",
            "Consider financing options",
            "Schedule your procedure date",
            "Obtain pre-operative instructions",
          ],
        },
      },
      faq: {
        subtitle: "Consultation Information",
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about consultations with Dr. Saleh.",
        items: [
          {
            title: "What should I expect during my consultation?",
            content:
              "Your consultation with Dr. Saleh will include a detailed discussion of your goals, a thorough examination, and a review of your medical history. Dr. Saleh will explain appropriate procedure options, potential outcomes, and answer any questions you may have.",
          },
          {
            title: "Do you offer virtual consultations?",
            content:
              "Yes, we offer virtual consultations for patients who are unable to visit our office initially. While a physical examination will eventually be necessary before any surgical procedure, virtual consultations are a convenient way to begin the conversation and determine if you are a good candidate for your desired procedure.",
          },
          {
            title: "How much does a consultation cost?",
            content:
              "Initial consultations with Dr. Saleh have a fee of $150, which can be applied toward the cost of your procedure if you choose to proceed. This fee helps ensure dedicated time with Dr. Saleh to thoroughly discuss your goals and options.",
          },
          {
            title: "How do I prepare for my consultation?",
            content:
              "To make the most of your consultation, we recommend bringing a list of questions, information about your medical history, and clear ideas about your goals. For certain procedures, it can be helpful to bring reference images that illustrate the results you're hoping to achieve.",
          },
        ],
      },
      cta: {
        title: "Ready to Begin Your Journey?",
        description:
          "Take the first step toward achieving your aesthetic goals by scheduling your consultation with Dr. Saleh today.",
        callButton: "Call (514) 400-5124",
        emailButton: "Email Us",
      },
    },
    fr: {
      hero: {
        title: "Nous contacter",
        description:
          "Nous sommes là pour répondre à vos questions et vous aider à planifier votre consultation avec Dr. Saleh.",
      },
      contactInfo: {
        subtitle: "Contactez-nous",
        title: "Coordonnées",
        description:
          "Contactez-nous pour planifier votre consultation ou pour que notre équipe dévouée réponde à vos questions.",
        location: {
          title: "Adresse du Bureau",
          address1: "750 Lucerne Rd.",
          address2: "Mont Royal, QC, H3R 2H6",
        },
        phone: {
          title: "Téléphone",
        },
        email: {
          title: "Courriel",
        },
        hours: {
          title: "Heures d'ouverture",
          weekdays: "Lundi - Vendredi: 9h00 - 17h00",
          saturday: "Samedi: Sur rendez-vous seulement",
          sunday: "Dimanche: Fermé",
        },
        affiliations: {
          title: "Affiliations hospitalières",
          sensa: "SENSA MD - Pratique privée pour les interventions esthétiques",
          hmr: "Hôpital Maisonneuve-Rosemont - Poste académique pour la chirurgie reconstructrice",
        },
      },
      form: {
        title: "Demander une consultation",
      },
      process: {
        subtitle: "À quoi S'attendre",
        title: "Le Processus de consultation",
        description: "Comprendre ce à quoi vous attendre lors de votre consultation avec Dr. Saleh.",
        before: {
          title: "Avant votre visite",
          items: [
            "Remplir vos formulaires patient",
            "Rassembler votre historique médical",
            "Préparer vos questions pour Dr. Saleh",
            "Réfléchir à vos objectifs esthétiques",
          ],
        },
        during: {
          title: "Durant votre consultation",
          items: [
            "Discuter de vos objectifs esthétiques",
            "Passer un examen physique",
            "Revoir les options d'intervention",
            "Discuter des résultats potentiels",
            "Recevoir un plan personnalisé",
          ],
        },
        after: {
          title: "Après votre consultation",
          items: [
            "Recevoir un plan de traitement détaillé",
            "Revoir l'estimation des coûts",
            "Considérer les options de financement",
            "Planifier la date de votre intervention",
            "Obtenir les instructions pré-opératoires",
          ],
        },
      },
      faq: {
        subtitle: "Informations sur la consultation",
        title: "Foire aux questions",
        description: "Trouvez des réponses aux questions courantes sur les consultations avec Dr. Saleh.",
        items: [
          {
            title: "À quoi dois-je m'attendre lors de ma consultation?",
            content:
              "Votre consultation avec Dr. Saleh comprendra une discussion détaillée de vos objectifs, un examen approfondi et une revue de votre historique médical. Dr. Saleh expliquera les options d'intervention appropriées, les résultats potentiels et répondra à toutes vos questions.",
          },
          {
            title: "Offrez-vous des consultations virtuelles?",
            content:
              "Oui, nous offrons des consultations virtuelles pour les patients qui ne peuvent pas visiter notre bureau initialement. Bien qu'un examen physique sera éventuellement nécessaire avant toute intervention chirurgicale, les consultations virtuelles sont un moyen pratique de commencer la conversation et de déterminer si vous êtes un bon candidat pour l'intervention souhaitée.",
          },
          {
            title: "Combien coûte une consultation?",
            content:
              "Les consultations initiales avec Dr. Saleh ont des frais de 150$, qui peuvent être appliqués au coût de votre intervention si vous décidez de procéder. Ces frais garantissent un temps dédié avec Dr. Saleh pour discuter en profondeur de vos objectifs et options.",
          },
          {
            title: "Comment me préparer pour ma consultation?",
            content:
              "Pour tirer le meilleur parti de votre consultation, nous recommandons d'apporter une liste de questions, des informations sur votre historique médical et des idées claires sur vos objectifs. Pour certaines interventions, il peut être utile d'apporter des images de référence illustrant les résultats que vous espérez obtenir.",
          },
        ],
      },
      cta: {
        title: "Prêt à commencer votre parcours?",
        description:
          "Faites le premier pas vers la réalisation de vos objectifs esthétiques en planifiant votre consultation avec Dr. Saleh dès aujourd'hui.",
        callButton: "Appeler (514) 400-5124",
        emailButton: "Nous écrire",
      },
    },
  };

  const t = content[language];

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
      {/* Contact Information and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                subtitle={t.contactInfo.subtitle}
                title={t.contactInfo.title}
                description={t.contactInfo.description}
                alignment="left"
              />
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPinIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">{t.contactInfo.location.title}</h3>
                    <a 
                      href="https://www.google.com/maps/dir//750+Lucerne+Rd,+Mount+Royal,+QC+H3R+2H6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:underline block"
                    >
                      {t.contactInfo.location.address1}
                    </a>
                    <a 
                      href="https://www.google.com/maps/dir//750+Lucerne+Rd,+Mount+Royal,+QC+H3R+2H6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:underline block"
                    >
                      {t.contactInfo.location.address2}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <PhoneIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">{t.contactInfo.phone.title}</h3>
                    <p className="text-gray-600">
                      <a href="tel:+15144005124" className="hover:underline">
                        (514) 400-5124
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <MailIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">{t.contactInfo.email.title}</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@elisalehmd.com" className="hover:underline">
                        info@elisalehmd.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <ClockIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-1">{t.contactInfo.hours.title}</h3>
                    <p className="text-gray-600">{t.contactInfo.hours.weekdays}</p>
                    <p className="text-gray-600">{t.contactInfo.hours.saturday}</p>
                    <p className="text-gray-600">{t.contactInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-md">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-4 flex-shrink-0">
                    <InfoIcon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-2">{t.contactInfo.affiliations.title}</h3>
                    <p className="text-gray-600 mb-1">
                      <strong>SENSA MD</strong> - {t.contactInfo.affiliations.sensa.split(" - ")[1]}
                    </p>
                    <p className="text-gray-600">
                      <strong>Hôpital Maisonneuve-Rosemont</strong> - {t.contactInfo.affiliations.hmr.split(" - ")[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-md shadow-md border border-gray-100">
                <h2 className="text-2xl font-light mb-6">{t.form.title}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Consultation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t.process.subtitle} title={t.process.title} description={t.process.description} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <CalendarIcon size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-light mb-3">{t.process.before.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {t.process.before.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <UserIcon size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-light mb-3">{t.process.during.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {t.process.during.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ShieldIcon size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-light mb-3">{t.process.after.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {t.process.after.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Consultation FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle={t.faq.subtitle} title={t.faq.title} description={t.faq.description} />
          <div className="max-w-3xl mx-auto mt-12">
            <Accordion
              items={t.faq.items.map((item) => ({
                title: item.title,
                content: <p>{item.content}</p>,
              }))}
            />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#141926] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">{t.cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{t.cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+15144005124"
                className="bg-[#C6AF75] text-[#141926] hover:bg-[#b39c62] px-8 py-3.5 rounded-md text-lg font-medium transition-colors"
              >
                {t.cta.callButton}
              </a>
              <a
                href="mailto:info@elisalehmd.com"
                className="bg-transparent text-white border border-white hover:bg-white hover:text-[#141926] px-8 py-3.5 rounded-md text-lg font-medium transition-colors"
              >
                {t.cta.emailButton}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
