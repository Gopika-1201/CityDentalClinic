'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container-tight flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-heading text-lg font-bold text-primary">
            {siteConfig.name}
          </span>
          
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                  pathname === item.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/appointment"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            aria-label="Call us"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground"
          >
            <Phone size={15} />
          </a>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground"
            >
              <Menu size={18} />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-border px-6 py-5">
                  <span className="font-heading text-base font-bold text-primary">
                    {siteConfig.name}
                  </span>
                </div>
                <ul className="flex flex-col gap-1 p-4">
                  {siteConfig.nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-accent',
                          pathname === item.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground/80'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-border p-4">
                  <Link
                    href="/appointment"
                    onClick={() => setOpen(false)}
                    className="block rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="mt-3 block text-center text-sm text-muted-foreground"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
