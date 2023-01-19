const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
const navItemEl = listIngredients.createElement('li');
navItemEl.classList.add('item');
listIngredients.append(
  navItemEl,
  navItemEl,
  navItemEl,
  navItemEl,
  navItemEl,
  navItemEl
);
