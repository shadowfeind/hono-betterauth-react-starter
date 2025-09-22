import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ForgotPasswordSchema,
  type ForgotPasswordSchemaType,
} from "../auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ForgotForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const forgotPasswordForm = useForm<ForgotPasswordSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onForgotPasswordSubmit = async (data: ForgotPasswordSchemaType) => {
    setIsLoading(true);
    try {
      // Handle forgot password logic here
      console.log("Forgot password data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={forgotPasswordForm.handleSubmit(onForgotPasswordSubmit)}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="forgot-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="forgot-email"
            type="email"
            placeholder="Enter your email"
            className="pl-10"
            {...forgotPasswordForm.register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </div>
        {forgotPasswordForm.formState.errors.email && (
          <p className="text-sm text-destructive">
            {forgotPasswordForm.formState.errors.email.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Reset Link"}
      </Button>
    </form>
  );
};
