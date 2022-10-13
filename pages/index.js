import React from "react";
import Title from "@/components/utils/title";
import Navbar from "@/components/surfaces/navs";
import MidNavbar from "@/components/surfaces/navs/midNavbar";
import Footer from "@/components/surfaces/footer";
import UpComingCard from "@/components/surfaces/cards/upComingCard";

const Home = () => {
  return (
    <>
      <Title pageName="Home" />
      <Navbar />
      <MidNavbar />
      <div id="upcoming">
        <div className="container">
          <UpComingCard status={1} />
          <UpComingCard />
          <UpComingCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
