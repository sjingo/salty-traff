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

export default async function seed() {
  // users
  await deleteAllUsers();
  await addUser(user);
  //
}
