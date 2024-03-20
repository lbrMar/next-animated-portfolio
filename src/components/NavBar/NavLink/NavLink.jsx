"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

const NavLink = ({ menuLink }) => {
  const pathname = usePathname()

  return (
    <div>
      <Link
        className={`rounded p-1 font-semibold ${pathname === menuLink.url ? 'bg-black text-white' : 'text-black'} hover:bg-black hover:text-white`}
        href={menuLink.url} 
        key={menuLink.key}
      >
        {menuLink.title}
      </Link>
    </div>
  )
}

export default NavLink
