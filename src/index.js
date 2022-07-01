import { renderUsers, resetTable } from "./table";
import "./styles.scss";

// Fill in the table with users
renderUsers();
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
