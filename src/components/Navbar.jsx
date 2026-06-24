import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    "Premium Saree Wholesale Collection • Bulk Orders Available",
    "New Arrivals Added Every Week • Best Wholesale Prices",
    "WhatsApp Us For Bulk Orders & Latest Catalog",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) =>
        prev === offers.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [offers.length]);

  const links = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

  const nextOffer = () => {
    setCurrentOffer(
      currentOffer === offers.length - 1
        ? 0
        : currentOffer + 1
    );
  };

  const prevOffer = () => {
    setCurrentOffer(
      currentOffer === 0
        ? offers.length - 1
        : currentOffer - 1
    );
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#8B0A13] text-white">

        <div className="max-w-7xl mx-auto h-11 flex items-center justify-between px-4">

          <button
            onClick={prevOffer}
            className="hover:opacity-70 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <p className="text-[10px] md:text-sm tracking-[2px] uppercase text-center font-medium">
            {offers[currentOffer]}
          </p>

          <button
            onClick={nextOffer}
            className="hover:opacity-70 transition"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <h1 className="text-3xl font-bold text-[#8B0A13]">
                Surat Textiles
              </h1>

              <span className="text-[10px] tracking-[3px] uppercase text-gray-500">
                Wholesale Collection
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10">

              {links.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[15px] uppercase tracking-wide transition ${
                      isActive
                        ? "text-[#8B0A13]"
                        : "text-gray-800 hover:text-[#8B0A13]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      {isActive && (
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#8B0A13]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

            </nav>

            {/* WhatsApp */}
            <div className="hidden md:flex items-center">

              <a
                href="https://wa.me/9199999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#8B0A13] hover:opacity-80 transition"
              >
                <MessageCircle size={24} />
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-[#8B0A13]"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t">

            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b text-gray-700 hover:bg-gray-50"
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="https://wa.me/91999999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-4 text-[#8B0A13] font-medium"
            >
              <MessageCircle size={20} />
              WhatsApp Inquiry
            </a>

          </div>
        </div>

      </header>
    </>
  );
}