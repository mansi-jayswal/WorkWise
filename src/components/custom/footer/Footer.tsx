import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';
import { FaPinterest } from 'react-icons/fa6';
import Link from 'next/link';

interface IFooterLinks {
  label: string;
  link: string;
}

const footerLinks: IFooterLinks[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Latest Jobs',
    link: '/all-jobs',
  },
  {
    label: 'Contact Us',
    link: '/contact',
  },

  {
    label: 'Login',
    link: '/login',
  },
];

const Footer = () => {
  return (
    <>
      <footer className="width-0 sticky top-full rounded-lg bg-black py-8 text-white">
        <div className="mx-auto flex min-h-full flex-col p-4 md:py-3">
          <div className="flex-grow">
            <div className="flex flex-wrap justify-between">
              <div className="mb-4 w-full md:mb-0 md:w-1/3">
                <h4 className="mb-2 text-lg font-bold">Quick Links</h4>
                <ul>
                  {footerLinks.map((link, index) => (
                    <li className="mb-2" key={index}>
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 w-full md:mb-0 md:w-1/3">
                <h4 className="mb-2 text-lg font-bold">Follow Us</h4>
                <ul className="flex gap-4">
                  <li className="mb-2">
                    <Link href="#" className="hover:text-customRed">
                      <FaFacebook size={25} />
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="hover:text-customRed">
                      <FaXTwitter size={25} />
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="hover:text-customRed">
                      <BsInstagram size={25} />
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#" className="hover:text-customRed">
                      <FaPinterest size={25} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h4 className="mb-2 text-lg font-bold">Contact Info</h4>
                <p>Email: workwise@info.com</p>
                <p>Phone: 079-12345678</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 py-2 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mansi Jayswal. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
