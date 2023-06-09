import React from "react";
import { navigationItem } from "@/data";
import Image from "next/image";
import DotIcon from "../../public/images/doticon.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

import { Tooltip } from "react-tooltip";

export default function Sidebar({ isCollapisible, setCollapisible }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={`${
        isCollapisible
          ? "animate-box"
          : "animate-box-collapse w-[230px] md:w-[250px]"
      } transition ease-in-out duration-250 fixed left-0 
    z-30 pt-4 pb-12 flex flex-col gap-[40rem] lg:gap-0 lg:justify-between  pl-1 h-full outline-none pr-4 border-gray border-r-[1px]`}
    >
      <div className="relative">
        {!isCollapisible ? (
          <div className="absolute w-full top-4 flex items-center justify-between">
            {" "}
            <Link href={"/"} className="pl-8 block">
              <Image
                src="/images/mainstack-logo.svg"
                width={30}
                height={30}
                alt="logo"
              />{" "}
            </Link>{" "}
            <BsArrowLeftSquare
              className=" hover:text-primary cursor-pointer"
              onClick={() => setCollapisible(true)}
            />
          </div>
        ) : (
          <div className="absolute top-6 pl-8">
            {" "}
            <BsArrowRightSquare
              className=" hover:text-primary cursor-pointer"
              onClick={() => setCollapisible(false)}
            />
          </div>
        )}

        <div className="fixed top-20">
          {navigationItem.map(({ id, subitem, description }) => {
            return (
              <div
                className=" relative flex text-gray-400 flex-col mb-10"
                key={id}
              >
                <p
                  className={`${
                    isCollapisible ? "hidden" : "animate-text"
                  } pl-10 text-[11px] font-light absolute -top-[15em] my-36`}
                >
                  {description}
                </p>
                <div className="flex flex-col gap-1">
                  {subitem.map(({ id, title, Icon, link }) => {
                    return (
                      <Link
                        href={link}
                        key={id}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={title}
                        className={`my-1.5 border-2 font-medium text-[14px] pl-8 border-white ${
                          currentRoute === link &&
                          "text-primary border-l-primary border-l-2"
                        } hover:text-primary hover:border-l-primary hover:border-l-2`}
                      >
                        <Icon className="inline w-5" />
                        <p
                          className={`${
                            isCollapisible ? "hidden" : "animate-text"
                          } inline ml-2`}
                        >
                          {title}
                        </p>
                        {isCollapisible && (
                          <Tooltip
                            id="my-tooltip"
                            place="right"
                            style={{
                              backgroundColor: "hsla(19, 100%, 95%, 0.8)",
                              color: "hsla(19, 100%, 51%, 0.8)",
                              width:"max-content",
                              fontWeight:"normal"
                            }}
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-8 ">
        <div className="flex items-center justify-between">
          <div className="">
            <Image
              width={30}
              height={30}
              src="/images/userimage.png"
              alt="user"
              className="inline mr-3"
            />
            <span
              className={`${
                isCollapisible ? "hidden" : "animate-text"
              } text-gray-400 text-[14px] fixed mt-1 `}
            >
              Blessing Daniels
            </span>
          </div>
          <DotIcon
            className={`${
              isCollapisible ? "hidden" : "inline"
            } cursor-pointer hover:text-primary`}
          />
        </div>
      </div>
    </div>
  );
}
