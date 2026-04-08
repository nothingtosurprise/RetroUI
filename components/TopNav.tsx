"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/retroui";
import { navConfig } from "@/config/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export default function TopNav() {
  const { isDarkMode, toggleDarkMode } = useTheme();
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
      className={`sticky z-50 w-full transition-all duration-300 ${
        isScrolled ? "top-4" : "top-0"
      }`}
    >
      {/* <div className="w-full bg-black text-white">
        <div className="container max-w-6xl mx-auto px-4 py-2 flex justify-center space-x-4 items-center">
          <Text className="text-sm lg:text-center">
            Ship faster with premium blocks and templates!
          </Text>
          <a href="https://dub.sh/retroui-pro" target="_blank">
            <Button
              size="sm"
              className="shadow-none font-sans font-bold px-2 py-1 w-30"
            >
              RetroUI Pro
              <ArrowUpRight className="ml-auto h-4 w-4 inline-block" />
            </Button>
          </a>
        </div>
      </div> */}
      <div
        className={`container max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-card border-2 px-6"
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
            <Button variant="outline" size="sm" className="bg-card">
              Sign In
            </Button>

            <Button size="sm">
              Get Access
            </Button>
          </div>
        </div>
      </div>
    </nav >
  );
}
