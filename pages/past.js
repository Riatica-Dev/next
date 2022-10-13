import React from "react";
import Title from "@/components/utils/title";
import Navbar from "@/components/surfaces/navs";
import MidNavbar from "@/components/surfaces/navs/midNavbar";
import Footer from "@/components/surfaces/footer";

const Past = () => {
  return (
    <>
      <Title pageName="Home" />
      <Navbar />
      <MidNavbar />
      <div id="past">
        <div className="container">Past</div>
      </div>
      <Footer />
    </>
  );
};

export default Past;
