import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlackNavbar = () => {
  return (
    <nav className="position-relative sticky-top container py-2 pt-4">
      <div className="d-flex justify-content-between">
        <div style={{ width: "200px", height: "41px" }}>
          <Link href="/">
            <a className="text-black text-decoration-none">
              <Image
                src="/images/logos/black-logo.png"
                layout="responsive"
                width="200"
                height="41"
                className="img-fluid"
                alt="logo cloudfunding"
              />
            </a>
          </Link>
        </div>
        <div className="">
          <Link
            href="https://medium.com/@CloudFundLena/after-the-icos-and-ieos-lena-instruments-offers-the-industry-a-new-way-of-crowdfunding-projects-on-14eb7f7f819f"
            passHref
          >
            <a
              className="text-decoration-none text-black nav-link text-center"
              target="_blank"
              rel="noopener"
            >
              What is CloudFunding?
            </a>
          </Link>
          <Link href="/wfp">
            <a
              className="text-black text-muted nav-link text-center mt-4"
              style={{
                fontSize: "0.8rem",
                padding: "0",
              }}
            >
              Our commitment to the WFP
              <br />
              <Image
                src="/images/logos/wfp-black.png"
                height="45"
                width="30"
                alt="logo-wfp"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BlackNavbar;
