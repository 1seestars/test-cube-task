let addRow = document.querySelector("#addRow");
let addColumn = document.querySelector("#addColumn");
let removeRow = document.querySelector("#removeRow");
let removeColumn = document.querySelector("#removeColumn");
let addDist = "222";
let addDiff = "54";
let addDist2 = "224";
let addDiff2 = "54";
let table = document.querySelector("#table");

addRow.onclick = () => {
  let origin = document.querySelector("#origin");
  let tr2 = origin.cloneNode(true);

  table.append(tr2);

  addRow.style.top = `${+addDist + +addDiff}px`;
  addDist = `${+addDist + +addDiff}`;
};

addColumn.onclick = () => {
  let columns = document.querySelectorAll("tr");

  for (let column of columns) {
    column.insertAdjacentHTML("beforeend", '<td class = "square">');
  }

  addColumn.style.left = `${+addDist2 + +addDiff2}px`;
  addDist2 = `${+addDist2 + +addDiff2}`;
};

removeRow.onclick = () => {
    console.log(1)
};

removeColumn.onclick = () => {};

let div = document.createElement("div");
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.append(div);
div.style.opacity = "1";
div.style.transition = "1s";
setTimeout(() => {
  div.style.opacity = "0";
  setTimeout(() => this.remove(), 1000);
}, 2000);
