function RandomRecipeButton() {
  const handleClick = () => {
    alert("This will later show a random recipe");
  };

  return (
    <div className="random-button">
      <button onClick={handleClick}>🎲 Random Recipe</button>
    </div>
  );
}

export default RandomRecipeButton;
