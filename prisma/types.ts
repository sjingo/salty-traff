import type { User } from "@prisma/client";

export type AddUserProps = {
  name: User["name"];
  email: User["email"];
  password: User["password"];
} & { seed?: boolean };
