const liWithClass = document.querySelectorAll('.item');
console.log("Number of categories:", liWithClass.length);
console.log(liWithClass.children);
const menuItemsByTagNames = document.querySelectorAll("h2");
for (let menuItemsByTagName of menuItemsByTagNames) {
    console.log('Category:', menuItemsByTagName.textContent);
    const liWithoutClass = document.querySelectorAll("li");
console.log('Elements:', liWithoutClass.length);
}
console.log(liWithoutClass);

