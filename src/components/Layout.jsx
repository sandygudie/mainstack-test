import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { Transition } from "@headlessui/react";

export default function Layout({ children }) {
  const [isCollapisible, setCollapisible] = useState(true);



  // const transitionStyles = {
  //   entering: { opacity: 1 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
  // };
  return (
    <div className="mx-auto">
      <Transition
        show={isCollapisible}
        // enter="transform"
        // enterFrom="translate-y-6"
        // enterTo="translate-y-6"
        // leave="transform "
        // leaveFrom="translate-y-6"
        // leaveTo="translate-y-6"
      >
        <Sidebar
          isCollapisible={isCollapisible}
          setCollapisible={setCollapisible}
        />
      </Transition>

      <main className="basis-4/5 ">{children}</main>
    </div>
  );
}
