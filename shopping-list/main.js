const ul = document.querySelector('ul');
const inputElement = document.querySelector('input');
const btn = document.querySelector('button');

btn.onclick = function () {
    let item = inputElement.value;
    inputElement.value = "";
    const newListItem = document.createElement("li");
    const newSpan = document.createElement("span");
    const newDeleteBtn = document.createElement("button");

    newDeleteBtn.onclick = function () {
        newListItem.remove();
    }

    newSpan.textContent = item;
    newDeleteBtn.textContent = "Delete";
    newListItem.appendChild(newSpan);
    newListItem.appendChild(newDeleteBtn);

    ul.appendChild(newListItem);

    inputElement.focus();
}