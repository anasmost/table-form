import { renderUsers, resetTable } from "./table";
import "./styles.scss";

// Fill in the table with users
renderUsers();
// Optionally fix the table dimensions upon future modification
/* Comment or delete the code below, before the next comment, to see the table shrinking upon deleting the first user */
const table = document.body.getElementsByTagName("table")[0];
for (const row of table.rows) {
  for (const cell of row.children) {
    cell.style.width = cell.getBoundingClientRect().width + "px";
  }
}
/* Set up main menu buttons */
// Reset button
document.getElementById("reset-table").addEventListener("click", resetTable);
// Add user button
document.getElementById("add-user").addEventListener("click", async () => {
  const { showUserForm } = await import(
    /* webpackPrefetch: true */ "./form-dialog"
  );
  showUserForm();
});
