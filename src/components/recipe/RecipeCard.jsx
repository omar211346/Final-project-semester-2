function RecipeCard({ title, category, createdAt }) {
  const displayDate = createdAt?.toDate?.() || new Date(createdAt);
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>
        Published:{" "}
        {displayDate
          ? displayDate.toLocaleDateString()
          : "Unknown date"}
      </p>
    </div>
  );
}

export default RecipeCard;
