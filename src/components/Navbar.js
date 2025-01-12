import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-darkGreen hover:text-primaryGreen transition duration-300"
        >
          Nirajan Shah
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#about"
              className="text-darkGreen hover:text-primaryGreen transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-darkGreen hover:text-primaryGreen transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-darkGreen hover:text-primaryGreen transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
