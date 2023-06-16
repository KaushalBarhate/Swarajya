import React from "react";
import { Footer } from "flowbite-react";
import {
  // FaFacebook,
  // FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
export default function FooterComponent() {
  return (
    <Footer
      container={true}
      className="rounded-none bg-transparent inset-x-0 bottom-0 mt-auto text-white"
    >
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex text-white sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-white"
            href="/"
            by="Swarajya"
            year={2023}
          />
          {/* <Footer.Brand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        /> */}
          <Footer.LinkGroup>
            <Footer.Link href={"https://www.linkedin.com/company/swarajya-vit-chennai/"} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white" size={20} />
            </Footer.Link>
            <Footer.Link href={"https://instagram.com/swarajya_vitc?igshid=MmJiY2I4NDBkZg=="} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white" size={20} />
            </Footer.Link>
            <Footer.Link href={"https://twitter.com/swarajya_vitc"} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white" size={20} />
            </Footer.Link>
            <Footer.Link href={"https://www.facebook.com/profile.php?id=100092189738798"} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white" size={20} />
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
}
