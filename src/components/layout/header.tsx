"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MainNav = () => {
  return (
    <div className="hidden md:flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">OpenNyAI</span>
      </Link>
      <nav className="flex gap-6">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          href="/cases"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Cases
        </Link>
        <Link
          href="/clients"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Clients
        </Link>
        <Link
          href="/analytics"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Analytics
        </Link>
      </nav>
    </div>
  );
};

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const navItems = [
    { title: "Dashboard", href: "/" },
    { title: "Cases", href: "/cases" },
    { title: "Clients", href: "/clients" },
    { title: "Analytics", href: "/analytics" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <span className="font-bold">Legal Case Manager</span>
        </Link>
        <div className="flex flex-col space-y-3 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
