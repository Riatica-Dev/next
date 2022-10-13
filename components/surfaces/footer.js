import React from "react";
import Link from "next/link";
import { BsMedium, BsTelegram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-grey-200 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="h5 text-bodoni">Explore Campaigns</li>
              <li className="mt-2">
                <Link href="/">
                  <a className="text-decoration-none text-muted">Upcoming</a>
                </Link>
              </li>
              <li className="mt-1 ">
                <Link href="/ongoing#raise-period">
                  <a className="text-decoration-none text-muted">
                    Raise Period
                  </a>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="/ongoing#yield-period">
                  <a className="text-decoration-none text-muted">
                    Yield Period
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="h5 text-bodoni">About</li>
              <li className="mt-2">
                <Link href="#">
                  <a className="text-decoration-none text-muted">About us</a>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="#">
                  <a className="text-decoration-none text-muted">Careers</a>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="#">
                  <a className="text-decoration-none text-muted">Blogs</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="h5 text-bodoni">Help</li>
              <li className="mt-2">
                <Link href="#">
                  <a className="text-decoration-none text-muted">Our rules</a>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="#">
                  <a className="text-decoration-none text-muted">Safety</a>
                </Link>
              </li>
              <li className="mt-1">
                <Link href="#">
                  <a className="text-decoration-none text-muted">Support</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="h5 text-bodoni">Join Our Telegram Community</li>
              <li className="mt-2 d-flex">
                <Link href="https://t.me/CloudFundingLena" passHref>
                  <a className="text-black me-2" rel="noopener" target="_blank">
                    <BsTelegram fontSize="24" />
                  </a>
                </Link>
              </li>
              <li className="d-flex flex-column h5 text-bodoni mt-4">
                Socials
                <ul className={`list-unstyled d-inline-flex mt-2`}>
                  <li>
                    <Link href="https://twitter.com/CloudFundLena" passHref>
                      <a
                        className="text-black me-2"
                        rel="noopener"
                        target="_blank"
                      >
                        <AiOutlineTwitter fontSize={"24"} />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://medium.com/@CloudFundLena" passHref>
                      <a
                        className="text-black me-2"
                        rel="noopener"
                        target="_blank"
                      >
                        <BsMedium fontSize={"24"} />
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right text-center mt-2">
          <p>&copy; CloudFunding 2022. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
