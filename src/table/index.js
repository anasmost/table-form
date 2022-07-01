import { getUsers, deleteUser, resetUsers } from "./user-model";
import { createRow, removeRow } from "./user-row";

import "./styles.scss";

const usersContainer = document.querySelector("table#users").tBodies[0];
// Add a single click event listener for all delete button clicks (relying on bubbling)
usersContainer.addEventListener("click", (e) => {
  // e.target must be the trash button or its li parent
  if (e.target.closest(".delete")) {
    const userRow = e.target.closest("tr");
    deleteUser(userRow.querySelector("td[data-id]").textContent);
    removeRow(userRow);
  }
});

export function renderUsers() {
  usersContainer.replaceChildren(...getUsers().map((user) => createRow(user)));
  // Optionally fix the table dimensions upon future modification
  /* Comment or delete the code below, before the next comment, to see the table shrinking upon deleting the first user */
  const table = document.body.getElementsByTagName("table")[0];
  for (const row of table.rows) {
    for (const cell of row.children) {
      cell.style.minWidth = cell.getBoundingClientRect().width + "px";
    }
  }
}

export function resetTable() {
  resetUsers();
  renderUsers();
}

export function addRow(user) {
  usersContainer.append(createRow(user));
}
