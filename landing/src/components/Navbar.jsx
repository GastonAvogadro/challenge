import menu from "../assets/menu.png";

function Navbar() {
  const navlinks = ["Products", "Rooms", "Services", "Inspirations"];
  return (
    <header className="absolute w-[85%] sm:w-[90%] top-4 left-[30px] md:left-[100px] flex gap-7 justify-between md:justify-center items-center">
      <h1 className="text-[2.12rem] font-merriweather font-bold mb-2 text-white md:text-terracotta tracking-[2px]">
        antic
      </h1>
      <nav>
        <ul className="hidden md:flex gap-6">
          {navlinks.map((link) => (
            <li key={link} className="text-[1.12rem] font-varta text-brownLight">
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <img className="md:hidden" src={menu} />
    </header>
  );
}

export default Navbar;
