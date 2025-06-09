// FAQAccordion.js
import { useState } from 'react';

const categoryEmojis = {
  "Chauffage": "🔥",
  "Pompe & Circulation": "🌀",
  "Éclairage": "💡",
  "Plomberie & Fuites": "💧",
  "Eau & Chloration": "🧪",
  "Garantie": "🛡️",
  "Clavier & Interface": "⚙️",
  "Commande & Livraison": "📦"
};

export default function FAQAccordion({ faqs }) {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="border border-afi-dark/10 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-afi-orange hover:bg-afi-orange/80 transition-colors"
            onClick={() => toggleAccordion(faq.id)}
            aria-expanded={activeId === faq.id}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <span className="font-medium text-white">
              {categoryEmojis[faq.category] || '❓'} {faq.question}
            </span>
            <span className="ml-4 text-white text-2xl">
              {activeId === faq.id ? '−' : '+'}
            </span>
          </button>
          <div
            id={`faq-answer-${faq.id}`}
            className={`px-4 overflow-hidden transition-all duration-300 ${activeId === faq.id ? 'py-4 max-h-screen' : 'max-h-0 py-0'}`}
          >
            <div className="prose prose-sm text-white bg-afi-orange/80 p-4 rounded-lg">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}