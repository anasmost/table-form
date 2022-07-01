const DEFAULT_USERS = Object.freeze([
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
]);

const users = JSON.parse(localStorage.getItem("users")) ?? [...DEFAULT_USERS];
function storeUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers() {
  return users;
}
export function addUser(user) {
  users.push(user);
  storeUsers();

  return users;
}
export function deleteUser(userID) {
  users.forEach((user, i) => {
    if (user.id === userID) users.splice(i, 1);
  });
  storeUsers;

  return users;
}
export function resetUsers() {
  users.splice(0, Infinity);
  users.push(...DEFAULT_USERS);
  storeUsers();

  return users;
}

export const STATUS = Object.freeze({
  valide: "Validé",
  rejected: "Rejeté",
  "on-validation": "En validation",
});
