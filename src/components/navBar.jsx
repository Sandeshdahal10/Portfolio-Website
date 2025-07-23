function Navbar(){
  return(
    <>
    <nav className="flex w-[100%] items-center justify-center mt-2">
      <div className="w-[20%]">
        <span className="font-bold">Sandesh</span>
      </div>
      <div>
        <ul className="flex gap-x-10 items-end">
          <li className="text-xl">Home</li>
          <li className="text-xl">About</li>
          <li className="text-xl">Projects</li>
          <li className="text-xl">Contact</li>
        </ul>
      </div>
      <div className="w-[30%] items-center flex justify-end">
        <button className="px-4 py-2 bg-primary rounded-md text-white">Register</button>
      </div>
      <div>

      </div>
    </nav>
    </>
  )
}

export default Navbar;