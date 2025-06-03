function RecipeCard({ title, category, createdAt, image, instructions }) {
  const displayDate = createdAt?.toDate?.() || new Date(createdAt);

  return (
    <div className="recipe-card">
      <h3>{title}</h3>

      {image && (
        <img src={image} alt={title} style={{ width: "200px" }} />
      )}

      <p>Category: {category || "Unknown"}</p>

      {instructions && (
        <p><strong>Instructions:</strong> {instructions.slice(0, 100)}...</p>
      )}

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
