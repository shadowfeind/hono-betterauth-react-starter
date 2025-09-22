import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { SocialLoginButtons } from "./component/social-login-buttons";

import { LoginForm } from "./component/login-form";
import { ForgotForm } from "./component/forgot-form";
import { ModeToggle } from "@/components/mode-toggle";
import { RegisterForm } from "./component/register-form";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="flex justify-end p-4">
        <ModeToggle />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {activeTab === "login" && "Welcome Back"}
            {activeTab === "register" && "Create Account"}
            {activeTab === "forgot" && "Reset Password"}
          </CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            {activeTab === "login" && "Sign in to your account to continue"}
            {activeTab === "register" && "Create a new account to get started"}
            {activeTab === "forgot" &&
              "Enter your email to reset your password"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
              <TabsTrigger value="forgot">Reset</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <LoginForm setActiveTab={setActiveTab} />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <SocialLoginButtons />
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <RegisterForm />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <SocialLoginButtons />
            </TabsContent>

            <TabsContent value="forgot" className="space-y-4">
              <ForgotForm />

              <div className="text-center">
                <Button
                  type="button"
                  variant="link"
                  className="text-sm text-accent hover:text-accent/80"
                  onClick={() => setActiveTab("login")}
                >
                  Back to login
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p>
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="text-accent hover:text-accent/80 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-accent hover:text-accent/80 underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
