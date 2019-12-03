const addRow = document.querySelector("#addRow")
const addColumn = document.querySelector("#addColumn")
const removeRow = document.querySelector("#removeRow")
const removeColumn = document.querySelector("#removeColumn")
const workplace = document.querySelector("#workplace")
const difference = 54
let countColumn = 3
let countRow = 3

const getCoords = elem => {
  let box = elem.getBoundingClientRect()

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
}

const showRemoveCubes = () => {
  let columns = document.querySelectorAll("td")
  for (let column of columns) {
    column.addEventListener("mouseover", () => {
      removeRow.style.top = getCoords(column).top + "px"
      removeColumn.style.left = getCoords(column).left + "px"
    })
  }
}

addColumn.addEventListener('click', () => {
  let rows = document.querySelectorAll("tr")
  ++countColumn
  for (let row of rows) {
    row.insertAdjacentHTML("beforeend", '<td class = "square">')
  }
  addColumn.style.left = getCoords(addColumn).left + difference + "px"
  removeColumn.style.left = getCoords(addColumn).left - difference + "px"
})

addRow.addEventListener('click', () => {
  let tr = document.querySelector(".row")
  let tr2 = tr.cloneNode(true)
  ++countRow
  document.querySelector("table").append(tr2)
  addRow.style.top = getCoords(addRow).top + difference + "px"
  removeRow.style.top = getCoords(addRow).top - difference + "px";
})

removeColumn.addEventListener('click', () => {
  let rows = document.querySelectorAll('tr')
  if (countColumn > 1) {
    for (let row of rows) {
      let columns = row.querySelectorAll("td")
      for (let column of columns) {
        if (getCoords(column).left === getCoords(removeColumn).left) {
          column.remove()
          break
        }
      }
    }
    addColumn.style.left = getCoords(addColumn).left - difference + "px"
    --countColumn
  }

  if (getCoords(removeColumn).left === getCoords(addColumn).left) {
    removeColumn.style.left = getCoords(addColumn).left - difference + 'px'
  }
})

removeRow.addEventListener('click', () => {
  let rows = document.querySelectorAll("tr")
  for (let row of rows) {
    if (getCoords(row).top === getCoords(removeRow).top && countRow > 1) {
      row.remove()
      addRow.style.top = getCoords(addRow).top - difference + "px"
      --countRow
      break
    }
  }

  if (getCoords(removeRow).top === getCoords(addRow).top) {
    removeRow.style.top = getCoords(addRow).top - difference + 'px'
  }
})

workplace.addEventListener("mouseover", showRemoveCubes)