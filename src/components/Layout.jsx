import React, { useState, useRef, Fragment } from "react";
import Sidebar from "./Sidebar";
import { ChakraProvider } from "@chakra-ui/react";
// import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [isCollapisible, setCollapisible] = useState(false);
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();

  return (
    // <ChakraProvider>
    <div className="mx-auto">
      {/* <motion.div
        {...getDisclosureProps()}
        // hidden={isCollapisible}
        initial={false}
        // onAnimationStart={() => setCollapisible(false)}
        // onAnimationComplete={() =>setCollapisible(true)}
        animate={{ width: isCollapisible ? 500 : 10 }}
        > */}
      <Sidebar
        isCollapisible={isCollapisible}
        setCollapisible={setCollapisible}
      />
      {/* </motion.div> */}
      <main className="basis-4/5 ">{children}</main>
    </div>
    // </ChakraProvider>
  );
}
