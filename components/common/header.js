/* eslint-disable */
import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

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
          <Popover.Group as="nav" className="hidden lg:flex space-x-16">
            <span
              className={
                router.pathname === "/" ? "active nav-item" : "nav-item"
              }
            >
              <a href="/">Home</a>
            </span>
            <span
              className={
                router.pathname === "/about" ? "active nav-item" : "nav-item"
              }
            >
              <a href="/about">About</a>
            </span>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
                    )}
                  >
                    <span
                      className={
                        serviceActive[1] === "services"
                          ? "active nav-item dropdown-toggle"
                          : "nav-item dropdown-toggle"
                      }
                    >
                      Services
                    </span>
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
                          <a
                            href="/services/web-development"
                            className={
                              serviceActive[2] === "web-development"
                                ? "active text-base text-gray-600"
                                : "text-base text-gray-600"
                            }
                          >
                            Websites
                          </a>
                          <a
                            href="/services/custom-application"
                            className={
                              serviceActive[2] === "custom-application"
                                ? "active text-base text-gray-600"
                                : "text-base text-gray-600"
                            }
                          >
                            Custom Applications
                          </a>
                          <a
                            href="/services/front-end-development"
                            className={
                              serviceActive[2] === "front-end-development"
                                ? "active text-base text-gray-600"
                                : "text-base text-gray-600"
                            }
                          >
                            Front-end Development
                          </a>
                          <a
                            href="/services/hybrid-mobile-app"
                            className={
                              serviceActive[2] === "hybrid-mobile-app"
                                ? "active text-base text-gray-600"
                                : "text-base text-gray-600"
                            }
                          >
                            Hybrid Apps Development
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="https://blog.zysk.tech/"
              className="nav-item"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
            <span
              className={
                router.pathname === "/contact" ? "active nav-item" : "nav-item"
              }
            >
              <a href="/contact">Contact</a>
            </span>
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
              <div className="mt-6">
                <nav className="grid gap-y-5">
                  <span
                    className={
                      router.pathname === "/" ? "active nav-item" : "nav-item"
                    }
                  >
                    <a href="/">Home</a>
                  </span>
                  <span
                    className={
                      router.pathname === "/about"
                        ? "active nav-item"
                        : "nav-item"
                    }
                  >
                    <a href="/about">About</a>
                  </span>
                  <div>
                    <a
                      href="#"
                      onClick={handleToggle}
                      className={
                        serviceActive[1] === "services"
                          ? "active nav-item dropdown-toggle"
                          : "nav-item dropdown-toggle"
                      }
                    >
                      Services
                    </a>
                    <div className={show ? "hidden" : "pt-2"}>
                      <p className="pl-3 pt-1">
                        <a
                          href="/services/web-development"
                          className={
                            serviceActive[2] === "web-development"
                              ? "active font-semibold text-sm"
                              : "font-semibold text-sm"
                          }
                        >
                          Websites
                        </a>
                      </p>
                      <p className="pl-3 pt-1">
                        <a
                          href="/services/custom-application"
                          className={
                            serviceActive[2] === "custom-application"
                              ? "active font-semibold text-sm"
                              : "font-semibold text-sm"
                          }
                        >
                          Custom Applications
                        </a>
                      </p>
                      <p className="pl-3 pt-1">
                        <a
                          href="/services/front-end-development"
                          className={
                            serviceActive[2] === "front-end-development"
                              ? "active font-semibold text-sm"
                              : "font-semibold text-sm"
                          }
                        >
                          Front-end Development
                        </a>
                      </p>
                      <p className="pl-3 pt-1">
                        <a
                          href="/services/hybrid-mobile-app"
                          className={
                            serviceActive[2] === "hybrid-mobile-app"
                              ? "active font-semibold text-sm"
                              : "font-semibold text-sm"
                          }
                        >
                          Hybrid Apps Development
                        </a>
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://blog.zysk.tech/"
                    className="nav-item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                  <span
                    className={
                      router.pathname === "/contact"
                        ? "active nav-item"
                        : "nav-item"
                    }
                  >
                    <a href="/contact">Contact</a>
                  </span>
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
