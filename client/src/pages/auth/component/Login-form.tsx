import { useForm, Controller } from "react-hook-form";
import { LoginSchema, type LoginSchemaType } from "../auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useLoginMutation } from "../queries/login-query";

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
export const LoginForm = ({ setActiveTab }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useLoginMutation();
  const loginForm = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: zodResolver(LoginSchema),
  });

  const onLoginSubmit = async (data: LoginSchemaType) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={loginForm.handleSubmit(onLoginSubmit)}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            className="pl-10"
            {...loginForm.register("email")}
          />
        </div>
        {loginForm.formState.errors.email && (
          <p className="text-sm text-destructive">
            {loginForm.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="login-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="pl-10 pr-10"
            {...loginForm.register("password")}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
        {loginForm.formState.errors.password && (
          <p className="text-sm text-destructive">
            {loginForm.formState.errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Controller
            control={loginForm.control}
            name="rememberMe"
            render={({ field }) => (
              <Checkbox
                id="remember-me"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Label htmlFor="remember-me">Remember me</Label>
        </div>
        <Button
          type="button"
          variant="link"
          className="px-0 text-sm text-accent hover:text-accent/80"
          onClick={() => setActiveTab("forgot")}
        >
          Forgot password?
        </Button>
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};
