import { addUser, deleteAllUsers } from "./utils";
import { AddUserProps } from "./types";

const user: AddUserProps = {
  email: "s.j.ingolfsson@gmail.com",
  name: "sjingo",
  password: "Reykjavik1@1",
};
async function seed() {
  // users
  await deleteAllUsers();
  await addUser(user);
  // incidentTypes
  // await deleteIncidentTypes()
  // await inciddents.forEach(addIncident)
}
