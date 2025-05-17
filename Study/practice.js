const language = {
  name: "JavaScript",
  type: "programming",
  paradigm: "multi-paradigm",
};

// console.log(Object.keys(language));
// console.log(Object.entries(language));

language.popularity = "high";

const a = "users";
language[a] = 1000;

console.log(language);
