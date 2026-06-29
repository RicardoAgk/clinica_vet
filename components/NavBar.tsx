"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-b border-zinc-800 bg-black/95 px-6 py-4 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
          onClick={closeMenu}
        >
          Clínica veterinária de Santa Maria
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 text-zinc-200 transition hover:border-zinc-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:hidden"
          aria-controls="main-navigation"
          aria-expanded={isOpen}
          aria-label={
            isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
          }
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">
            {isOpen ? "Fechar menu" : "Abrir menu"}
          </span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
          </span>
        </button>

        <div
          id="main-navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } w-full flex-col gap-4 text-sm font-medium text-zinc-300 md:flex md:w-auto md:flex-row md:items-center md:gap-6`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
