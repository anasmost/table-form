import "./styles.scss";

const form = document.forms["user-form"];
const dialog = form.closest("dialog");
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) closeUserForm();
});

export function showUserForm() {
  dialog.classList.remove("hide");
  dialog.showModal();
}

export function closeUserForm() {
  dialog.close();
  dialog.classList.add("hide");
}
