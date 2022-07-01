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
}

export function resetTable() {
  resetUsers();
  renderUsers();
}
