let input = document.querySelector(".block_form_input");
let btn = document.querySelector(".block_form_btn");
let blockList = document.querySelector(".block_list");

function createElements(text) {
  let newElem = document.createElement("p");
  let deleteSpan = document.createElement("span");

  deleteSpan.className = "block_list_delete";
  deleteSpan.textContent = "delete";

  newElem.className = "block_list_elem";
  newElem.textContent = text;
  newElem.appendChild(deleteSpan);

  deleteSpan.addEventListener("click", function () {
    blockList.removeChild(newElem);
  });

  blockList.appendChild(newElem);
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!(input.value === "Add task" || input.value == "")) {
    createElements(input.value);
    input.value = "Add task";
  }
});
input.addEventListener("focus", function () {
  input.value = "";
});
input.addEventListener("blur", function () {
  if (input.value == "") input.value = "Add task";
});
