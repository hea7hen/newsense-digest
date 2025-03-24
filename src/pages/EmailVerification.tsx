
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const EmailVerification = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-800 px-6 py-8 shadow sm:rounded-lg sm:px-10 text-center">
      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-6">
        <Mail className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Verify your email</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        We've sent a verification link to{" "}
        <span className="font-medium text-foreground">
          {user?.email || "your email address"}
        </span>
        . Click the link to verify your account.
      </p>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-500">
        If you don't see the email, check your spam folder.
      </p>
      <div className="flex flex-col space-y-4">
        <Link to="/auth/login">
          <Button variant="outline" className="w-full">
            Back to login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmailVerification;
