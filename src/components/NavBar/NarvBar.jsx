import Link from "next/link"

const NavBar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px48">
      {/* LOGO */}
      <div className="">
        <Link 
          className="text-sm bg-black rounded-md px-1 py-1 font-bold flex items-center justify-center"
          href="/"
        >
          <span className="text-white mx-1">LM</span>
          <span className="bg-white rounded-md m-0.5 p-2">mental</span>
        </Link>
      </div>
      {/* RESPONSIZE MENU */}
      <div className="">
        {/* MENU BUTTON */}
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
      </div>
    </div>
  )
}

export default NavBar
