import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart2,
  FileText,
  TrendingDown,
  Package,
  Database,
  Building2,
  Truck,
  Brain
} from "lucide-react";

// Update these import paths to match your assets directory
import ArrowRight from "../assets/arrow-right.svg";
import Logo from "../assets/Blue Logo.png";
import MenuIcon from "../assets/menu.svg";

const DropdownItem = ({ title, Icon, link }) => (
  <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
    <Link to={link} className="flex items-center space-x-3">
      <Icon className="h-5 w-5 text-[#001E80]" />
      <span className="text-[#001E80] text-sm font-medium">{title}</span>
    </Link>
  </div>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const productItems = [
    { title: "Automated Scope 3 Monitoring", Icon: BarChart2, link: '/supply-chain' },
    { title: "Product-Based Emission Monitoring", Icon: Package, link: '/product-based' },
    { title: "Data Integration", Icon: Database, link: '/datacollection' },
    { title: "Net-Zero Goal Setting", Icon: TrendingDown, link: '/net-zero' },
    { title: "Scenario-Based Reduction Strategies", Icon: Database, link: '/scenerio-analysis' },
    { title: "Compliance Reporting", Icon: FileText, link: '/reporting' },
  ];

  const solutionItems = [
    { title: "Industries", Icon: Building2, link: '/industries' },
    { title: "Supply Chain", Icon: Truck, link: '/supply-chain' },
    // { title: "AI Monitoring", Icon: Brain },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your emissions and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <Link to="/supply-chain#contact">
            <p>Get Emitrix Demo Now</p>
          </Link>
          <img src={ArrowRight} className="h-4 w-4 inline-flex justify-center items-center" alt="arrow" />
        </div>
      </div>
      <div className="w-full bg-white bg-opacity-50 backdrop-blur-md shadow-md">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-40 h-16 relative">
              <Link to='/'>
                <img
                  src={Logo}
                  alt="Emitrix Logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <img src={MenuIcon} className="h-6 w-6" alt="menu" />
              </button>
              <nav className="hidden md:flex items-center space-x-1">
                <div
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter('product')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                    Product
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${activeDropdown === 'product' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    style={{ left: 'calc(-300% + 10%)' }}
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#001E80] mb-2">Monitoring</h3>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <DropdownItem {...productItems[0]} />
                        <DropdownItem {...productItems[1]} />
                        <DropdownItem {...productItems[2]} />
                      </div>
                      <hr className="my-3 border-gray-200" />
                      <h3 className="text-lg font-semibold text-[#001E80] mb-2">Decarbonization</h3>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <DropdownItem {...productItems[3]} />
                        <DropdownItem {...productItems[4]} />
                      </div>
                      <hr className="my-3 border-gray-200" />
                      <h3 className="text-lg font-semibold text-[#001E80] mb-2">Reporting</h3>
                      <div>
                        <DropdownItem {...productItems[5]} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter('solution')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                    Solutions
                  </button>
                  <div className={`absolute left-0 mt-2 w-[300px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${activeDropdown === 'solution' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#001E80] mb-2">Our Solutions</h3>
                      <div className="space-y-2">
                        {solutionItems.map((item, index) => (
                          <DropdownItem key={index} {...item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a href="https://greenblogs.crown-monkey.com/" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
                <a href="/supply-chain#contact" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          {/* Product Section */}
          <div className="space-y-2">
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-100">
              Product
            </button>
            <div className="pl-4 space-y-2">
              {productItems.map((item, index) => (
                <DropdownItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-2 mt-4">
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-100">
              Solutions
            </button>
            <div className="pl-4 space-y-2">
              {solutionItems.map((item, index) => (
                <DropdownItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Other menu items */}
          <a href="https://greenblogs.crown-monkey.com/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blogs</a>
          <a href="/supply-chain#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;