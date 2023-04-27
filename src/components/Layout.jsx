import React, { useState, useRef, Fragment } from "react";
import Sidebar from "./Sidebar";
// import { ChakraProvider } from "@chakra-ui/react";
// // import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react";
// import { motion } from "framer-motion";

export default function Layout({ children }) {


  return (
    // <ChakraProvider>
    <div className="mx-auto">
      <Sidebar
        isCollapisible={children.props.isCollapisible}
        setCollapisible={children.props.setCollapisible}
      />
      {/* </motion.div> */}
      <main className={`${children.props.isCollapisible? "animate-box-main" : "animate-box-main-collapse pl-[17em] lg:pl-[20em] "} basis-4/5 pr-10 lg:pr-14  `}>{children}</main>
    </div>
    // </ChakraProvider>
  );
}
