import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

import { links } from "./data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState("false");
  const { pathname } = router;

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Popover className="relative bg-white" id="navbarNav">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 lg:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img className="h-14 w-auto sm:h-16" src="/img/logo.png" alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button
              className="bg-white rounded-md inline-flex items-center justify-center 
            text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-16">
            {links.map((link) => (
              <React.Fragment key={link.id}>
                {/* If a nav link is not having children */}
                {!link.children && (
                  <Link href={link.url}>
                    <a
                      className={
                        pathname == link.url ? "active nav-item" : "nav-item"
                      }
                      rel={link.type === "external" ? "noreferrer" : ""}
                      target={link.type === "external" ? "_blank" : ""}
                    >
                      {link.name}
                    </a>
                  </Link>
                )}

                {/* If a nav link has children */}

                {link.children && (
                  <Popover className="relative">
                    {({ open }) => (
                      <React.Fragment>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
                          )}
                        >
                          <Link
                            href={link.url}
                            className={
                              pathname.startsWith(link.url)
                                ? "active nav-item dropdown-toggle"
                                : "nav-item dropdown-toggle"
                            }
                          >
                            <a>{link.name}</a>
                          </Link>
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-56 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="ring-1 rounded-sm ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-3 bg-white px-4 py-3">
                                {link.children.map((child) => (
                                  <Link key={child.id} href={child.url}>
                                    <a
                                      className={
                                        pathname === child.url
                                          ? "active text-base text-gray-600"
                                          : "text-base text-gray-600"
                                      }
                                    >
                                      {child.name}
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </React.Fragment>
                    )}
                  </Popover>
                )}
              </React.Fragment>
            ))}
          </Popover.Group>
        </div>
      </div>

      {/* Mobile header */}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-14 w-auto"
                    src="/img/logo.png"
                    alt="Zysk Technologies"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md  inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-5">
                  {links.map((link) => (
                    <React.Fragment key={link.id}>
                      {!link.children && (
                        <Link key={link.id} href={link.url}>
                          <a
                            className={
                              pathname == link.url
                                ? "active nav-item"
                                : "nav-item"
                            }
                            rel={link.type === "external" ? "noreferrer" : ""}
                            target={link.type === "external" ? "_blank" : ""}
                          >
                            {link.name}
                          </a>
                        </Link>
                      )}

                      {link.children && (
                        <div>
                          <a
                            href="#"
                            onClick={handleToggle}
                            className={
                              pathname.startsWith(link.url)
                                ? "active nav-item dropdown-toggle"
                                : "nav-item dropdown-toggle"
                            }
                          >
                            {link.name}
                          </a>
                          <div className={show ? "hidden" : "pt-2"}>
                            {link.children.map((child) => (
                              <Link key={child.id} href={child.url}>
                                <a
                                  className={`pl-3 pt-1 block text-sm font-semibold ${
                                    pathname === child.url ? "active" : ""
                                  }`}
                                >
                                  {child.name}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
