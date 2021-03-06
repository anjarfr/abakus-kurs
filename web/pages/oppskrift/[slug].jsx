import client from "../../client";

const RecipePage = (props) => {
  const { recipe } = props;
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.duration} min</p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

RecipePage.getInitialProps = async (context) => {
  const { slug = "" } = context.query;
  return {
    recipe: await client.fetch(
      `*[_type == 'recipes' && slug.current == $slug][0]`,
      { slug }
    ),
  };
};

export default RecipePage;
