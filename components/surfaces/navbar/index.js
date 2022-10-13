import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/nav.module.css";

const Nav = ({ black = false, hidden }) => {
  return (
    <nav className="position-relative sticky-top container py-2 pt-4">
      <div className="d-flex justify-content-between">
        <div style={{ width: "200px", height: "41px" }}>
          <Link href="/">
            <a className="text-black text-decoration-none">
              {black ? (
                <Image
                  src="/images/black-logo.png"
                  layout="responsive"
                  width="200"
                  height="41"
                  className="img-fluid"
                  alt="logo cloudfunding"
                />
              ) : (
                <Image
                  src="/images/white-logo.png"
                  layout="responsive"
                  width="200"
                  height="41"
                  className="img-fluid"
                  alt="logo cloudfunding"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="">
          <Link
            href="https://medium.com/@CloudFundLena/after-the-icos-and-ieos-lena-instruments-offers-the-industry-a-new-way-of-crowdfunding-projects-on-14eb7f7f819f"
            passHref
          >
            <a
              className={`${
                black ? "text-black" : `${styles.href} text-white`
              } text-decoration-none nav-link text-center`}
              target="_blank"
              rel="noopener"
            >
              What is CloudFunding?
            </a>
          </Link>
          <Link href="/wfp">
            <a
              className={`${
                black ? "text-black text-muted" : `${styles.href} text-white`
              } nav-link text-center mt-4`}
              style={{
                fontSize: "0.8rem",
                padding: "0",
                visibility: `${hidden && "hidden"}`,
              }}
            >
              Our commitment to the WFP
              <br />
              {black ? (
                <Image
                  src="/images/wfp-black.png"
                  height="45"
                  width="30"
                  alt="logo-wfp"
                />
              ) : (
                <Image
                  src="/images/wfp-white.png"
                  height="45"
                  width="30"
                  alt="logo-wfp"
                />
              )}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
