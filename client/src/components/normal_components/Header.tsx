// client/src/components/normal_components/Header.tsx
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
} from "lucide-react";

import { Button } from "../ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Custom Order", href: "/custom-order" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          {/* Replace this with your actual logo later */}
          <div className="flex h-8 w-8 items-center justify-center">
            <span className="text-xl font-black text-primary">
              ◈
            </span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.15em] text-white">
              HEADCRAFT
            </span>
            <span className="mt-1 text-[7px] tracking-[0.3em] text-muted-foreground">
              MADE FOR CREATORS
            </span>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="mx-auto hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                relative py-6 text-xs font-medium
                text-muted-foreground
                transition-colors
                hover:text-white
                after:absolute
                after:bottom-0
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-primary
                after:transition-all
                hover:after:w-full
              `}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="ml-auto flex items-center gap-1">

          {/* Search */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-muted-foreground hover:bg-white/5 hover:text-white sm:inline-flex"
            aria-label="Search"
          >
            <Search className="size-[18px]" />
          </Button>

          {/* Wishlist */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-muted-foreground hover:bg-white/5 hover:text-white sm:inline-flex"
            aria-label="Wishlist"
          >
            <Heart className="size-[18px]" />
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:bg-white/5 hover:text-white"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="size-[18px]" />

            <span className="absolute right-1 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-primary px-1 text-[8px] font-bold text-white">
              2
            </span>
          </Button>

          {/* User */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-muted-foreground hover:bg-white/5 hover:text-white sm:inline-flex"
            aria-label="Account"
          >
            <User className="size-[18px]" />
          </Button>

          {/* Mobile menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="border-t border-border bg-[#050505] md:hidden">
          <nav className="flex flex-col px-4 py-4">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/5 px-2 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4 flex gap-2">
              <Button variant="outline" className="flex-1">
                <User />
                Account
              </Button>

              <Button variant="cta" className="flex-1">
                <ShoppingCart />
                Cart
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}