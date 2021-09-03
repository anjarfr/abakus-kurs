export default {
  name: "recipes",
  title: "Oppskrifter",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      description: "Navn på oppskriften",
      type: "string",
    },
    {
      name: "instructions",
      title: "Fremgangsmåte",
      description: "Hvordan lager man retten?",
      type: "text",
    },
    {
      name: "vegetarian",
      title: "Vegetar",
      description: "Er retten vegetar?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "duration",
      title: "Tid",
      description: "Hvor lang tid tar retten i minutter?",
      type: "number",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
};
