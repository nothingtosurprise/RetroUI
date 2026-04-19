"use client";

import React from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import type { User as UserType } from "@/types/auth";

export default function UserMenu({ user }: { user: UserType }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-white hover:bg-gray-50 transition-colors relative group">
          <div className="absolute -bottom-1 -right-1 left-1 top-1 border-2 border-black bg-black transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center bg-white relative">
            <User className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm relative hidden sm:inline">
            {user.name || user.email}
          </span>
          <svg
            className="w-4 h-4 relative"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[200px] bg-white border-2 border-black mt-2 relative z-50"
          sideOffset={5}
        >
          <div className="absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 border-2 border-black bg-black pointer-events-none" />

          <div className="relative bg-white">
            {/* User Info */}
            <div className="px-4 py-3 border-b-2 border-black">
              <p className="font-bold text-sm">{user.name || "User"}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              {user.isPro && (
                <span className="inline-block mt-1 px-2 py-0.5 text-xs font-bold bg-yellow-100 border border-black">
                  PRO
                </span>
              )}
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <DropdownMenu.Item asChild>
                <Link
                  href="/blocks"
                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 outline-none cursor-pointer"
                >
                  <Settings className="w-4 h-4" />
                  <span>Blocks</span>
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="h-0.5 bg-black my-1" />

              <DropdownMenu.Item asChild>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 outline-none cursor-pointer text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </DropdownMenu.Item>
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
