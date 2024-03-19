import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email("Invalid Email").min(5),
    password: z
      .string()
      .min(8)
      .refine(
        (value) => {
          const strongPasswordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          return strongPasswordRegex.test(value);
        },
        {
          message:
            "Password must be strong (at least 8 characters with at least one uppercase letter, one lowercase letter, one digit, and one special character)",
          path: ["password"],
        }
      ),
    confirmPassword: z
      .string()
      .min(8)
      .refine(
        (value) => {
          const strongPasswordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          return strongPasswordRegex.test(value);
        },
        {
          message:
            "Password must be strong (at least 8 characters with at least one uppercase letter, one lowercase letter, one digit, and one special character)",
          path: ["password"],
        }
      ),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
          });
    }
  });
