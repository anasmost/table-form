import { addIterator } from "../utils/object-key";

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

export const USER_STATUS = Object.freeze({
  valide: "Validé",
  rejected: "Rejeté",
  "on-validation": "En validation",
});

const USER_STRUCTURE = Object.freeze(Object.keys(DEFAULT_USERS[0]));

const users = JSON.parse(localStorage.getItem("users")) ?? [...DEFAULT_USERS];
for (const user of users) {
  addIterator(user, USER_STRUCTURE);
}

function storeUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers() {
  return users;
}
export function addUser(formUser) {
  formUser.id = Math.floor(1000000000 * Math.random());
  addIterator(formUser, USER_STRUCTURE);

  const user = { ...formUser };

  users.push(user);
  storeUsers();

  return user;
}
export function deleteUser(userID) {
  users.forEach((user, i) => {
    if (user.id == userID) users.splice(i, 1);
  });
  storeUsers();

  return users;
}
export function resetUsers() {
  users.splice(0, Infinity);
  users.push(...DEFAULT_USERS);

  for (const user of users) {
    addIterator(user, USER_STRUCTURE);
  }

  storeUsers();

  return users;
}
