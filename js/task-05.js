const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
    if (nameInput.value === "") {
        return (nameOutput.textContent = "Anonymous");
    } nameOutput.textContent = event.currentTarget.value;
});

