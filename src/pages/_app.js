import "@/styles/globals.css";
import Layout from "@/components/Layout";
import React, { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isCollapisible, setCollapisible] = useState(false);
  return (
    <Layout>
      <Component
        isCollapisible={isCollapisible}
        setCollapisible={setCollapisible}
        {...pageProps}
      />
    </Layout>
  );
}
