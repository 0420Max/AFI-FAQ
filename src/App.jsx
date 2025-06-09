import FAQModule from './components/FAQModule';
import { faqData, allFAQs } from './data/faqs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <FAQModule 
        faqCategories={faqData.map(({ category, icon }) => ({ category, icon }))}
        allFAQs={allFAQs}
      />
    </div>
  );
}

export default App;