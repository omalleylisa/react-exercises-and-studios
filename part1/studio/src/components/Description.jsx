import React from "react";
import styles from "./Description.module.css";

let recipeTitle = "Chicken rice with buttered onions";
let recipeShortDesc = "Simple, cheap, but oh-so comforting chicken and rice cooked in an aromatic broth with buttered onions.";

const RecipeAuthor = () => {
  let authorLink = "https://smittenkitchen.com/2023/09/chicken-rice-with-buttered-onions/";
  let authorPhoto = "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2023/09/380702445_10160874506899812_1869498985981286617_n.jpeg?resize=768%2C960&ssl=1";
  let authorName = "Deb Perelman";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>smittenkitchen</a>
      </div>
    </div>
  );
};

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>{recipeTitle}</h1>
          <p>{recipeShortDesc}</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
