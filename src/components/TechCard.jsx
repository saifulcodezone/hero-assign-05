function TechCard({ tech, onAdd, added }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition flex flex-col">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12 object-contain"
        />
        {tech.badge && (
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
            style={{
              backgroundColor: tech.badgeBg || "#DBEAFE",
              color: tech.badgeText || "#2563EB",
            }}
          >
            {tech.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 mb-4 flex-grow">
        {tech.description}
      </p>

      {/* Info row: Category · Difficulty · Rating */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap"
          style={{ backgroundColor: "#F1F5F9", color: "#475569" }}
        >
          {tech.category}
        </span>
        <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
          {tech.difficulty}
        </span>
        <span className="text-sm text-gray-900 font-semibold ml-auto flex items-center gap-1 whitespace-nowrap">
          <span style={{ color: "#FBBF24" }}>★</span> {tech.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={added}
        style={{
          backgroundColor: added ? "#E5E7EB" : "#0F172A",
          color: added ? "#6B7280" : "#FFFFFF",
        }}
        className={`w-full py-3 rounded-lg font-semibold text-sm transition ${
          added ? "cursor-not-allowed" : "hover:opacity-90"
        }`}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;
