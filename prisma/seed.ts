import type { NextApiRequest, NextApiResponse } from "next";
import { addUser, deleteAllUsers } from "./utils";
import { AddUserProps } from "./types";

const user: AddUserProps = {
  email: "s.j.ingolfsson@gmail.com",
  name: "sjingo",
  password: "Reykjavik1@1",
};
type Data = {
  name: string;
};
// const incidents:

export default async function seed(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // users
  await deleteAllUsers();
  await addUser(user);
  //
}
