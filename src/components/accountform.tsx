"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SignedOut, SignedIn, UserButton, SignInButton, useClerk } from "@clerk/nextjs";

const LoginForm = () => {
  const router = useRouter();
  const { signOut } = useClerk(); // ✅ Clerk's signOut function

  const handleSignOut = async () => {
    await signOut(); // ✅ Sign out user
    router.push("/"); // ✅ Redirect to home
    router.refresh(); // ✅ Ensure UI updates
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          My Account
        </h2>

        {/* Signed In View */}
        <SignedIn>
          <div className="flex flex-col items-center space-y-4">
            <UserButton afterSignOutUrl="/" />

            {/* Custom Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              Sign Out
            </button>
          </div>
        </SignedIn>

        {/* Signed Out View */}
        <SignedOut>
          <div className="flex flex-col items-center">
            <SignInButton mode="modal">
              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default LoginForm;




