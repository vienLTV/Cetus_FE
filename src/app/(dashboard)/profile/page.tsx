"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    companyEmail: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const firstName = localStorage.getItem("firstName") || "";
    const lastName = localStorage.getItem("lastName") || "";
    const companyEmail = localStorage.getItem("companyEmail") || "";
    const role = localStorage.getItem("role") || "";

    setUserInfo({ firstName, lastName, companyEmail, role });
    setIsLoading(false);
  }, []);

  const fullName = `${userInfo.firstName} ${userInfo.lastName}`.trim();

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>View your profile details</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8 text-gray-500">Loading profile...</div>
            ) : fullName ? (
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1 text-base text-gray-900">{fullName}</div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 text-base text-gray-900">
                    {userInfo.companyEmail || "Not available"}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Role</label>
                  <div className="mt-1">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {userInfo.role || "No role assigned"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No user information found. Please log in again.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
