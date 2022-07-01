import { STATUS } from "../table/user-model";
import getKey from "../utils/object-key";
import "./styles.scss";

const form = document.forms["user-form"];
const dialog = form.closest("dialog");
// Fill status options before loading dom
const select = dialog.querySelector("#status");
Object.values(STATUS).forEach((status, i) => {
  select[i] = new Option(
    status,
    status,
    i === 0 ? true : false,
    i === 0 ? true : false
  );
});
select.classList.add(getKey(STATUS, select.value));
select.addEventListener("change", () => {
  select.classList.remove(...Object.keys(STATUS));
  select.classList.add(getKey(STATUS, select.value));
});
// Close the form modal when clicking outside
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

export function saveUser() {}
