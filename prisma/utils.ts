import { PrismaClient, User } from "@prisma/client";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { AddUserProps } from "./types";

const prisma = new PrismaClient();

export const deleteAllUsers = async () => {
  const result = await prisma.user.deleteMany({});
  return result;
};

export const addUser = async ({
  email,
  name,
  password,
  seed = true,
}: AddUserProps) => {
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return !seed
      ? NextResponse.json({ error: "User already exists" }, { status: 400 })
      : false;
  } else {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: await hash(password, 10),
      } as User,
    });
    return !seed ? NextResponse.json(user) : true;
  }
};

export const deleteIncidentTypes = async () => {
  const result = await prisma.incidentType.deleteMany({});
  return result;
};
