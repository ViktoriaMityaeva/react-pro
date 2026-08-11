import { z } from "zod";

export const groupRegistrationSchema = z.object({
  username: z.string().min(1, "Имя обязательно"),
  email: z.email({ message: "Некорректный формат email" }),
  password: z.string().min(6, "Минимум необходимо 6 символов"),
  confirmPassword: z.string().min(1, "Подтвердите пароль"),
  socialLinks: z.array(
    z.object({
      url: z.string().url("Некорректный URL"),
    })
  ),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});

export type GroupRegistrationValues = z.infer<typeof groupRegistrationSchema>;

export const defaultValues: GroupRegistrationValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  socialLinks: [{ url: "" }],
};