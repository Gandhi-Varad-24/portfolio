"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links=[
  {href:"/",label:"Home"},
  {href:"/experiences",label:"Work Experiences"},
  {href:"/skills",label:"Skills"},
  {href: "/education", label: "Education"},  
  {href:"/projects",label:"Projects"},
  {href:"/research",label:"Research"},
  {href:"/achievements",label:"Achievements"},
];
export default function Navbar(){
  const pathname=usePathname(); const [open,setOpen]=useState(false);
  return(<header className="sticky top-0 z-50 backdrop-blur bg-ink/60 border-b border-white/10">
    <div className="container flex items-center justify-between h-16">
      <Link href="/" className="font-semibold text-lg"><span className="gradient-text">Varad Gandhi</span></Link>
      <nav className="hidden md:flex items-center gap-6">
        {links.map(l=>(<Link key={l.href} href={l.href} className={`text-sm hover:text-white ${pathname===l.href?"text-white":"text-white/70"}`}>{l.label}</Link>))}
        <a href="/resume.pdf" className="btn btn-primary text-sm">Download Resume</a>
      </nav>
      <button className="md:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&(<div className="md:hidden border-t border-white/10">
      <div className="container py-3 flex flex-col gap-3">
        {links.map(l=>(<Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-white/90">{l.label}</Link>))}
        <a href="/resume.pdf" className="btn btn-primary text-sm">Download Resume</a>
      </div>
    </div>)}
  </header>);
}
