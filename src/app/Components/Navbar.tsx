"use client";
import Link from "next/link";
import { Search, User, Menu, X, Globe, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";
import { allInfluencers } from "@/data/influencers";



const SearchDropdown = ({ query, onSelect }: { query: string; onSelect: () => void }) => {
  const results = query.length >= 1
    ? allInfluencers.filter(
        (inf) =>
          inf.name.toLowerCase().includes(query.toLowerCase()) ||
          inf.niche.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  if (results.length === 0 && query.length >= 1) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-xl p-4 z-50">
        <p className="text-sm text-gray-500 dark:text-gray-500 text-center">Nenhum influenciador encontrado</p>
      </div>
    );
  }

  if (results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      {results.map((inf) => (
        <button
          key={inf.name}
          onClick={onSelect}
          className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-left"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={inf.img} alt={inf.name} />
            <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold">
              {inf.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{inf.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{inf.campaigns} campanhas</p>
          </div>
          <Badge className="text-xs shrink-0 bg-slate-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 border-0">
            {inf.niche}
          </Badge>
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [dark, setDark] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const links = [{label:"Encontrar Influencers", href:"/encontrarInfluencer"},
              {label:"Para Empresas"  , href: "/paraEmpresas"},
              {label:"Para Influenciadores", href: "/paraInfluencer"},
              {label:"Sobre" , href:"/about"}];

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  const clearSearch = () => {
    setQuery("");
    setFocused(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black backdrop-blur-md shadow-md dark:border-gray-600">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4  max-w-7xl ">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-500  shrink-0">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-black"></div>
          InfluencerAo
        </a>

        <div ref={searchRef} className="hidden md:flex relative max-w-xs flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white" />
          <Input
            placeholder="Buscar influenciadores por nicho..."
            className="pl-9 h-9 dark:border-gray-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
          />
          {focused && <SearchDropdown query={query} onSelect={clearSearch} />}
        </div>

        <div className="hidden  lg:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-foreground hover:text-blue-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={toggleDark}>
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Globe className="h-4 w-4" />
          </Button>
          <Avatar className="h-9 w-9 cursor-pointer">
            <AvatarFallback className="bg-primary/10 text-primary text-sm"><User className="h-4 w-4" /></AvatarFallback>
          </Avatar>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200  p-4 space-y-3 animate-in slide-in-from-top-2 duration-200 ">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar influenciadores..."
              className="pl-9 dark:border-gray-600"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
            />
            {focused && <SearchDropdown query={query} onSelect={clearSearch} />}
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button variant="ghost" className="w-full flex text-black dark:text-white items-start justify-start hover:text-blue-600">
                {link.label}
              </Button>
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-gray-600">
            <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={toggleDark}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Globe className="h-4 w-4" />
            </Button>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarFallback className="bg-primary/10 text-primary text-sm"><User className="h-4 w-4" /></AvatarFallback>
            </Avatar>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
