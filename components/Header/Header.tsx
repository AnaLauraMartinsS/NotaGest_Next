import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Logo from '../../public/Logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header id="home" className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Image src={Logo} alt="Logo da Empresa" className="h-12 w-auto" />

      <nav>
        <ul className="flex gap-6 items-center text-sm font-medium text-gray-700">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="tips" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
              Dicas
            </Link>
          </li>
          <li>
            <Link to="how-it-work-section" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
              Como Funciona
            </Link>
          </li>
          <li>
            <Link to="about-us-section" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link to="faq-section" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600 transition">
              FAQ
            </Link>
          </li>
          <li>
            <RouterLink
              to="/login"
              className="text-blue-600 hover:text-blue-800 transition px-3 py-1 border border-blue-600 rounded"
            >
              Login
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/register"
              className="bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-1 rounded"
            >
              Cadastre-se
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;