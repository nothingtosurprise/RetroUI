"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/retroui";
import { navConfig } from "@/config/navigation";
import { useAuth } from "@/contexts/AuthContext";
import UserMenu from "@/components/UserMenu";

export default function TopNav() {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`container mx-auto sticky z-50 w-full transition-all duration-300 px-4 ${
        isScrolled ? "top-4" : "top-0"
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-card border-2 px-6 max-w-7xl"
            : "px-4 lg:px-0"
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="shrink-0">
            <a
              href="/"
              className="text-black font-head text-2xl flex items-end"
            >
              <Image
                src="/images/logo.png"
                alt="retro ui logo"
                className="mr-2"
                height={30}
                width={30}
              />
              <div className="text-foreground">RetroUI</div>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {navConfig.topNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:underline decoration-primary underline-offset-2 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <UserMenu user={user} />
            ) : (
              <>
                <Button variant="outline" size="sm" className="bg-card" render={<Link href="/sign-in">Sign In</Link>} />
                <Button size="sm" render={<Link href="/pricing">Get Access</Link>} />
              </>
            )}
          </div>
        </div>
      </div>
    </nav >
  );
}
