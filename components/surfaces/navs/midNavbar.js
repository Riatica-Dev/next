import React from "react";
import { GoThreeBars } from "react-icons/go";
import Link from "next/link";
import styles from "@/styles/show_component.module.css";
import { useRouter } from "next/router";
const MidNavbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white">
      <div className="container">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#middleNavBar"
          aria-controls="middleNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GoThreeBars />
        </button>
        <div className="collapse navbar-collapse text-center" id="middleNavBar">
          <ul className="navbar-nav w-100">
            <div className={`${styles.navbar} d-lg-flex`}>
              <li className="nav-item">
                <Link href="/" passHref>
                  <a
                    className={`${
                      pathname == "/" && styles.active
                    } nav-link text-grey-300`}
                  >
                    Upcoming
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/ongoing" passHref>
                  <a
                    className={`${
                      pathname == "/ongoing" && styles.active
                    } nav-link text-grey-300`}
                  >
                    Ongoing
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/past" passHref>
                  <a
                    className={`${
                      pathname == "/past" && styles.active
                    } nav-link text-grey-300`}
                  >
                    Past
                  </a>
                </Link>
              </li>
            </div>

            <div className={`${styles.faqLink} d-flex`}>
              <div>
                <Link href="/faq">
                  <a className="text-black nav-link mx-auto">
                    What is CloudFunding?
                  </a>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MidNavbar;
