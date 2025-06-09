export default function FAQSearch({ value, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher dans la FAQ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 pl-12 rounded-lg border border-afi-dark/20 focus:outline-none focus:ring-2 focus:ring-afi-orange focus:border-transparent"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-afi-dark/50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}