
import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            newsense<span className="text-primary">.</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Your personalized news digest
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
