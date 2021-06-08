import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardTable from "../components/Cards/CardTable";

export default function Landing() {
  return (
    <>
      <IndexNavbar/>
        <div className="flex flex-wrap mt-8">
        <div className="w-full mb-12 px-4">
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
      <Footer />
    </>
  );
}
