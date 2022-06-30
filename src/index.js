import { removeTargetUser, renderUsers, resetTable } from "./table";
import "./styles.scss";

/* Apply Table features */
const usersContainer = document.getElementById("users");
// Add a single click event listener for all delete button clicks (relying on bubbling)
usersContainer.addEventListener("click", (e) => {
  removeTargetUser(e.target);
});
// Fill in the table with users
renderUsers(usersContainer);
// Optionaly fix the table dimensions upon future modification
/* Comment or delete the code below to see the table shrinking upon deleting the first user */
const table = document.body.getElementsByTagName("table")[0];
for (const row of table.rows) {
  for (const cell of row.children) {
    cell.style.width = cell.getBoundingClientRect().width + "px";
  }
}
/* Set up main menu buttons the reset buttons */
// Reset button
document
  .getElementById("reset-table")
  .addEventListener("click", () => resetTable(usersContainer));
// Add user button
