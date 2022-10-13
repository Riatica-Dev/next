import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Title from "@/components/utils/title";
import Navbar from "@/components/surfaces/navs";
import MidNavbar from "@/components/surfaces/navs/midNavbar";
import Footer from "@/components/surfaces/footer";
import styles from "@/styles/ongoing_component.module.css";
import OngoingComponent from "@/components/surfaces/cards/onGoingCard";

const Ongoing = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  const [isYieldPeriod, setIsYieldPeriod] = useState(false);

  const myRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", function () {
      HandleScrollerDescription();
    });
  }, []);

  const HandleScrollerDescription = () => {
    if (myRef.current != null) {
      if (myRef.current.offsetTop <= scrollY) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    }
    if (boxRef.current != null) {
      if (boxRef.current.offsetTop - 100 <= scrollY) {
        setIsYieldPeriod(true);
      } else {
        setIsYieldPeriod(false);
      }
    }
  };

  // console.log(data);

  return (
    <>
      <Title pageName="Home" />
      <Navbar />
      <MidNavbar />
      <div id="ongoing">
        <div className="container">
          <Link href="#raise-period">
            <a
              className={`${
                isOnTop && !isYieldPeriod ? styles.fixed : styles.absolute
              } text-black text-decoration-none fw-bold`}
            >
              Raise Period
            </a>
          </Link>
          <div ref={myRef} id="raise-period">
            <OngoingComponent status={1} />
            <OngoingComponent />
            <OngoingComponent />
            <OngoingComponent />
          </div>
          <Link href="#yield-period">
            <a
              className={`${
                isOnTop && isYieldPeriod ? styles.fixed : styles.absolute
              } text-black text-decoration-none fw-bold`}
            >
              Yield Period
            </a>
          </Link>
          <div ref={boxRef} id="yield-period">
            <OngoingComponent status={3} />
            <OngoingComponent status={3} />
            <OngoingComponent status={3} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ongoing;

// export async function getStaticProps() {
//   const response = await fetch("/api/hello");
//   const data = await response.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }
