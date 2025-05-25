function RecipeCard({ title, category, createdAt }) {
    return (
      <div className="recipe-card">
        <h3>{title}</h3>
        <p>Category: {category}</p>
        <p>
          Published:{" "}
          {createdAt
            ? new Date(createdAt).toLocaleDateString()
            : "Unknown date"}
        </p>
      </div>
    );
  }
  
  export default RecipeCard;
  