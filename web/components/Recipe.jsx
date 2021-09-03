import { useRouter } from "next/dist/client/router";

export const Recipe = ({ recipe }) => {
  const router = useRouter();

  return (
    <div
      className="recipe"
      onClick={() => router.push(`oppskrift/${recipe.slug.current}`)}
    >
      <h3>{recipe.name}</h3>
      <p>{recipe.duration} min</p>
      <p>{recipe.instructions}</p>
    </div>
  );
};
