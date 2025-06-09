import React from 'react';
import FAQCard from './FAQCard';

export default function FAQCategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <FAQCard
          key={cat.category}
          category={cat.category}
          icon={cat.icon}
          onClick={() => onSelectCategory(cat.category)}
          isActive={activeCategory === cat.category}
        />
      ))}
    </div>
  );
}