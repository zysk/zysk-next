import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

import { links } from "./data";
import HeaderLink from "./header-link";

const Header = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = router;

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <Popover className="relative bg-white" id="navbarNav">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 lg:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <img
                  className="h-14 w-auto sm:h-16"
                  src="/img/logo.png"
                  alt="Zysk Technologies"
                />
              </a>
            </Link>
          </div>
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 ">
            <button
              type="button"
              className="px-4 text-gray-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6 active" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-14">
            {/* Loop through menu links and list */}
            {links.map((link) => (
              <React.Fragment key={link.id}>
                <HeaderLink data={link} pathname={pathname} />
              </React.Fragment>
            ))}
          </Popover.Group>
        </div>
      </div>

      {/* Mobile header */}

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-sm w-full pt-5 pb-4 bg-white">
              {/* Open sidebar when clicked on Menu icon */}
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-16 w-auto"
                  src="/img/logo.png"
                  alt="Zysk Technologies"
                />
              </div>

              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {/* loop through menu links and list */}
                  {links.map((link) => (
                    <React.Fragment key={link.id}>
                      <HeaderLink data={link} pathname={pathname} />
                    </React.Fragment>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="md:pl-64 flex flex-col flex-1"></div>
    </Popover>
  );
};

export default Header;
