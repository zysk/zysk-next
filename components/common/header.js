import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState("false");
  const activeElement = router.pathname;
  const serviceActive = activeElement.split("/");

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
            <span
              className={
                router.pathname == "/" ? "active nav-item" : "nav-item"
              }
            >
              <a href="/">Home</a>
            </span>
            <span
              className={
                router.pathname == "/about" ? "active nav-item" : "nav-item"
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
                        serviceActive[1] == "services"
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
                              serviceActive[2] == "web-development"
                                ? "active text-base text-gray-600"
                                : "text-base text-gray-600"
                            }
                          >
                            Websites
                          </a>
                          <a
                            href="/services/custom-application"
                            className={
                              serviceActive[2] == "custom-application"
                                ? "active text-base text-gray-600"
                                : "text-base text-gray-600"
                            }
                          >
                            Custom Applications
                          </a>
                          <a
                            href="/services/front-end-development"
                            className={
                              serviceActive[2] == "front-end-development"
                                ? "active text-base text-gray-600"
                                : "text-base text-gray-600"
                            }
                          >
                            Front-end Development
                          </a>
                          <a
                            href="/services/hybrid-mobile-app"
                            className={
                              serviceActive[2] == "hybrid-mobile-app"
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
            <a
              href="https://zysktechnologies.kekahire.com/"
              className="nav-item"
              target="_blank"
              rel="noreferrer"
            >
              Careers
            </a>
            <span
              className={
                router.pathname == "/contact" ? "active nav-item" : "nav-item"
              }
            >
              <a href="/contact">Contact</a>
            </span>
          </Popover.Group>
        </div>
      </div>

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
                    alt="Workflow"
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
                  <span
                    className={
                      router.pathname == "/" ? "active nav-item" : "nav-item"
                    }
                  >
                    <a href="/">Home</a>
                  </span>
                  <span
                    className={
                      router.pathname == "/about"
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
                        serviceActive[1] == "services"
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
                            serviceActive[2] == "web-development"
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
                            serviceActive[2] == "custom-application"
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
                            serviceActive[2] == "front-end-development"
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
                            serviceActive[2] == "hybrid-mobile-app"
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
                  <a
                    href="https://zysktechnologies.kekahire.com/"
                    className="nav-item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Careers
                  </a>
                  <span
                    className={
                      router.pathname == "/contact"
                        ? "active nav-item"
                        : "nav-item"
                    }
                  >
                    <a href="/contact">Contact</a>
                  </span>
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
