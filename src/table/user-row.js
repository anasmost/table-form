import getKey from "../utils/object-key";

import { USER_STATUS } from "./user-model";

const userTemplate = document.querySelector("#users tbody template");
const tableRow = userTemplate.content.firstElementChild;

export function createRow(user) {
  const tr = tableRow.cloneNode(true);

  // Apply user values to the corresponding row cells
  [...user].forEach((value, i) => {
    const td = tr.children[i];
    // style status cells
    if (td.firstElementChild?.classList.contains("status")) {
      const span = td.firstElementChild;
      const statusKey = getKey(USER_STATUS, value);

      span.classList.add(statusKey);
      span.textContent = value;
    }
    // format dates
    else if (td.classList.contains("date")) {
      td.textContent = Intl.DateTimeFormat("en-GB").format(new Date(value));
    }
    // every other row cells
    else {
      td.textContent = value;
    }
  });

  return tr;
}

export function removeRow(row) {
  row.remove();
}
