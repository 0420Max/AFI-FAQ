import { useState, useEffect } from 'react';
import FAQCategoryFilter from './FAQCategoryFilter';
import FAQSearch from './FAQSearch';
import FAQAccordion from './FAQAccordion';

export default function FAQModule({ faqCategories, allFAQs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  useEffect(() => {
    let filtered = allFAQs;
    
    if (activeCategory) {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(term) || 
        faq.answer.toLowerCase().includes(term));
    }
    
    setFilteredFAQs(filtered);
  }, [activeCategory, searchTerm, allFAQs]);

  // Show 5 random FAQs by default
  useEffect(() => {
    if (!activeCategory && !searchTerm) {
      const shuffled = [...allFAQs].sort(() => 0.5 - Math.random());
      setFilteredFAQs(shuffled.slice(0, 5));
    }
  }, [allFAQs, activeCategory, searchTerm]);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <h2 className="text-3xl font-bold text-afi-dark mb-8 text-center">FAQ Assistance</h2>
      
      <div className="space-y-8">
        <FAQSearch value={searchTerm} onChange={setSearchTerm} />
        
        <FAQCategoryFilter
          categories={faqCategories}
          activeCategory={activeCategory}
          onSelectCategory={(category) => {
            setActiveCategory(activeCategory === category ? null : category);
            setSearchTerm('');
          }}
        />
        
        {filteredFAQs.length > 0 ? (
          <>
            <h3 className="text-xl font-semibold text-afi-dark">
              {activeCategory 
                ? `${activeCategory} FAQs` 
                : searchTerm 
                  ? `Résultats de recherche pour "${searchTerm}"`
                  : 'FAQs en vedette'}
            </h3>
            <FAQAccordion faqs={filteredFAQs} />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-afi-dark/70">Aucune FAQ trouvée correspondant à vos critères.</p>
          </div>
        )}
      </div>
    </div>
  );
}