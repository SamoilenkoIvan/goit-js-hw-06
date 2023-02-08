const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);
for (let i = 0; i < ingredients.length; i += 1) {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = ingredients[i];
  listIngredients.append(navItemEl);
}

