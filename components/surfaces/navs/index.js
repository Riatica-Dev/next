import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import styles from "@/styles/nav.module.css";
import Nav from "@/components/surfaces/navbar";

const Navbar = () => {
  return (
    <div className={`${styles.header}`}>
      <Nav hidden={true} />
      <video
        src="../video/blue.webm"
        poster="../../images/preload.webp"
        autoPlay
        muted={true}
        loop={true}
        className={`${styles.videoBackground}`}
      />

      <div className={`${styles.headerContent} h-100`}>
        <div
          className={`${styles.content} d-flex flex-column justify-content-between text-center text-white`}
        >
          <div className={`${styles.centerText}`}>
            <p className="h1">Your Decentralised Launchpad</p>
            <p className="h4 mb-4">Coming soon</p>
            <p className="pt-2" style={{ fontSize: "1.1rem" }}>
              Your Flare/Songbird project needs CloudFunding?
              <Link href="mailto:hello@cloudfunding.xyz" passHref>
                <a
                  className={`${styles.href} text-decoration-none text-white d-block`}
                >
                  hello@cloudfunding.xyz
                </a>
              </Link>
            </p>
          </div>
          <div className="container">
            <div className={`${styles.container} nav py-2 mb-2 mb-md-5`}>
              {/* <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link href="https://t.me/CloudFundingLena" passHref>
                  <a
                    className={`${styles.href} text-white nav-link`}
                    title="Join us on Telegram"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaTelegramPlane fontSize={30} />
                  </a>
                </Link>
              </li>
            </ul> */}

              <div className="d-flex">
                <Link href="/wfp">
                  <a
                    className={`${styles.href}  text-white nav-link text-center mt-4 d-flex`}
                    style={{ fontSize: "0.8rem" }}
                  >
                    <Image
                      src="/images/wfp-white.png"
                      height="50px"
                      width="30px"
                      alt="logo-wfp"
                      layout="fixed"
                    />
                    <span className="ms-2 mt-3">Our commitment to the WFP</span>
                  </a>
                </Link>
              </div>
              <div className="nav-item mt-2">
                <Link href="https://t.me/CloudFundingLena" passHref>
                  <a
                    className={`${styles.href} text-white nav-link`}
                    title="Join us on Telegram"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaTelegramPlane fontSize={30} />
                  </a>
                </Link>
              </div>
              <div className="nav-item d-flex ms-auto">
                <div className="mx-4">
                  <div className="nav-item">
                    <Link href="https://twitter.com/CloudFundLena" passHref>
                      <a
                        title="Follow us on Twitter"
                        target="_blank"
                        rel="noopener"
                        className={`${styles.href} text-white nav-link`}
                      >
                        <AiOutlineTwitter fontSize={30} />
                      </a>
                    </Link>
                  </div>
                  <div className="nav-item">
                    <Link href="https://medium.com/@CloudFundLena" passHref>
                      <a
                        title="Join our Medium"
                        target="_blank"
                        rel="noopener"
                        className={`${styles.href} text-white nav-link`}
                      >
                        <BsMedium fontSize={30} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
