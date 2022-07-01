import { addRow } from "../table";
import { addUser, USER_STATUS } from "../table/user-model";
import getKey from "../utils/object-key";
import "./styles.scss";

const form = document.forms["user-form"];
const dialog = form.closest("dialog");
// Handle user form submit
form.addEventListener("submit", () => {
  const userFormData = {};
  for (const field of form.elements) {
    if (field.id) {
      userFormData[field.id] = field.value;
    }
  }

  const user = addUser(userFormData);
  addRow(user);

  form.reset();
});
// Fill status options before loading dom
const select = dialog.querySelector("#status");
Object.values(USER_STATUS).forEach((status, i) => {
  select[i] = new Option(
    status,
    status,
    i === 0 ? true : false,
    i === 0 ? true : false
  );
});
// Color select value
select.classList.add(getKey(USER_STATUS, select.value));
select.addEventListener("change", () => {
  select.classList.remove(...Object.keys(USER_STATUS));
  select.classList.add(getKey(USER_STATUS, select.value));
});
// Close the form modal when clicking outside the form (on the backdrop)
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
