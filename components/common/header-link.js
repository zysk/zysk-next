import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderLink = ({ data, pathname }) => {
  return (
    <>
      {!data.children && (
        <Link href={data.url}>
          <a
            className={classNames(
              pathname === data.url ? "active" : "",
              " nav-item group flex items-center px-2 text-2xl lg:text-base font-medium py-4 lg:font-bold"
            )}
            rel={data.type === "external" ? "noreferrer" : ""}
            target={data.type === "external" ? "_blank" : ""}
          >
            {data.name}
          </a>
        </Link>
      )}
      {data.children && (
        <Popover className="relative">
          {({ open }) => (
            <React.Fragment>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-2xl font-medium hover:text-gray-900"
                )}
              >
                {/* <Link href=""> */}
                <p
                  className={classNames(
                    pathname.startsWith(data.url)
                      ? "active dropdown-toggle"
                      : "dropdown-toggle",
                    "  nav-item group flex items-center px-2 text-2xl font-medium py-4 lg:text-base lg:font-bold"
                  )}
                >
                  {data.name}
                </p>
                {/* </Link> */}
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
                <Popover.Panel className="absolute z-20 -ml-4 transform px-2 w-full lg:w-56 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="overflow-hidden lg:ring-1 lg:rounded-sm lg:ring-black lg:ring-opacity-5 ">
                    <div className="relative grid gap-3 bg-white px-4 py-3">
                      {data.children.map((child) => (
                        <Link key={child.id} href={child.url}>
                          <a
                            className={classNames(
                              pathname === child.url
                                ? "active text-base"
                                : "text-base",
                              "  text-gray-600 font-medium text-xl lg:text-base py-2 lg:py-0"
                            )}
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
    </>
  );
};

export default HeaderLink;
