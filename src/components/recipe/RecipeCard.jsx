function RecipeCard({ title, category, createdAt, image, instructions }) {
  const displayDate = createdAt?.toDate?.() || new Date(createdAt);

  return (
    <div className="recipe-card">
      <h3>{title}</h3>

      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: "200px", marginBottom: "10px" }}
        />
      )}

      <p><strong>Category:</strong> {category}</p>

      <p>
        <strong>Published:</strong>{" "}
        {displayDate ? displayDate.toLocaleDateString() : "Unknown"}
      </p>

      {instructions && (
        <p><strong>Instructions:</strong> {instructions.slice(0, 80)}...</p>
      )}
    </div>
  );
}

export default RecipeCard;
