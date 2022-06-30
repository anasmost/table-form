import { getUsers, deleteUser, resetUsers } from "./user-model";
import { createRow, removeRow } from "./user-row";

import "./styles.scss";

export function removeTargetUser(e) {
  if (e.target.closest(".delete")) {
    const userRow = e.target.closest("tr");
    deleteUser(userRow.querySelector("td[data-id]").textContent);
    removeRow(userRow);
  }
}
export function renderUsers(usersContainer) {
  usersContainer.replaceChildren(...getUsers().map((user) => createRow(user)));
}

export function resetTable(usersContainer) {
  resetUsers();
  renderUsers(usersContainer);
}
