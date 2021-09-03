import client from "../client";
import { Recipe } from "../components/Recipe";

const HomePage = (props) => {
  const { recipes } = props;

  return (
    <div className="home">
      <h1>Hei Trondheim!</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

HomePage.getInitialProps = async () => {
  return { recipes: await client.fetch(`*[_type == 'recipes']`) };
};

export default HomePage;
