const userTemplate = document.querySelector("#users > template");
const tableRow = userTemplate.content.firstElementChild;

export function createRow(user) {
  const tr = tableRow.cloneNode(true);

  Object.values(user).forEach((value, i) => {
    const td = tr.children[i];
    td.textContent = value;
  });

  return tr;
}

export function removeRow(row) {
  row.remove();
}
