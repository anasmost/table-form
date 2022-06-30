import { getUsers, deleteUser, resetUsers } from "./user-model";
import { createRow, removeRow } from "./user-row";

import "./styles.scss";

export function removeTargetUser(removeTriggerer) {
  // removeTriggerer must be the trash button or its li parent
  if (removeTriggerer.closest(".delete")) {
    const userRow = removeTriggerer.closest("tr");
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
