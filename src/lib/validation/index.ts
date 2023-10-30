import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Trop court" }),
  username: z.string().min(2, { message: "Trop court" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit faire au minimum 8 caractères." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit faire au minimum 8 caractères." }),
});

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Trop court" })
    .max(2200, { message: "Trop long" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(2, { message: "Trop court" })
    .max(100, { message: "Trop long" }),
  tags: z.string(),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z
    .string()
    .min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  username: z
    .string()
    .min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  email: z.string().email(),
  bio: z.string(),
});
