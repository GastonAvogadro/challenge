
function Navbar() {
  const navlinks = ["Products", "Rooms", "Services", "Inspirations"];
  return (
    <header className="absolute top-4 left-[100px] flex gap-7 justify-center items-center">
      <h1 className="text-[2.12rem] font-merriweather font-bold mb-2 text-terracotta tracking-[2px]">antic</h1>
      <nav>
        <ul className="flex gap-6">
          {navlinks.map((link) => (
            <li key={link} className="text-[1.12rem] font-varta text-brownLight">{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
