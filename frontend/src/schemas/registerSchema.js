import { z } from "zod";

const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),

  email: z.string().trim().email("Please enter a valid email address."),

  password: z.string().trim().min(6, "Password must be at least 6 characters."),
});

export default registerSchema;
