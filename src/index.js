import { removeTargetUser, renderUsers, resetTable } from "./table";
import "./styles.scss";

// Table features
const usersContainer = document.getElementById("users");
usersContainer.addEventListener("click", removeTargetUser);
renderUsers(usersContainer);

document
  .querySelector("main button[type=reset]")
  .addEventListener("click", () => resetTable(usersContainer));
