const textInput = document.querySelector("#validation-input");
console.log(textInput);
  textInput.addEventListener("blur", () => {
    if (textInput.value.length === Number(textInput.dataset.length)) {
      textInput.classList.remove("invalid");
      return textInput.classList.add("valid");
    }
    return textInput.classList.add("invalid");
  });
  console.log(textInput.placeholder.length);
  console.dir(textInput);
  