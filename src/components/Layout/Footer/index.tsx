import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/footer-logo-healthy-kitchen.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F6F0] py-7 px-6 md:py-14 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
          <div className="w-10 h-10 relative">
            <Image
              src={logo}
              alt="Healthy Kitchen logo"
              fill
              className="object-contain rounded-md"
              sizes="40px"
              priority
            />
          </div>
          <p className="text-base md:text-xl text-[#1E4D38]">
            © 2025, PLANNED LLC.
          </p>
          <p className="text-base md:text-xl text-[#1E4D38]">
            All Rights Reserved
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-center md:items-end gap-1 md:gap-2 text-[#1E4D38] text-center md:text-right"
        >
          <Link href="/terms-and-condition" className="text-base md:text-xl hover:underline">
            TERMS + CONDITIONS
          </Link>
          <Link href="/privacy-policy" className="text-base md:text-xl hover:underline">
            PRIVACY POLICY
          </Link>
          <Link href="/acceptable-use-policy" className="text-base md:text-xl hover:underline">
            ACCEPTABLE USE POLICY
          </Link>
          <Link href="/faq" className="text-base md:text-xl hover:underline">
            FAQ
          </Link>
          <a
            href="mailto:support@joinplanned.com"
            className="text-base md:text-xl hover:underline"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;