import { User } from "@prisma/client";

export type SignUp = Omit<User, "id">;

export type SignIn = Omit<User, "id" | "name ">;