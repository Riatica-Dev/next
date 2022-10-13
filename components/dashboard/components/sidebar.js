import React from "react";
import Image from "next/image";
import { NavActiveLink, AccordionActivelink } from "./activeLink";
import CoinsPrice from "./coinsPrice";
import AccordionLink from "./accordionLink";
import styles from "@/styles/dashboard/layout.module.css";

const Sidebar = () => {
  return (
    <nav className={`${styles.sidebarWrapper}`}>
      <div
        className={`${styles.sidebarContent} d-flex flex-column justify-content-between`}
      >
        <div>
          <div className="sidebar-heading py-2 px-4 d-flex justify-content-center">
            <div className="d-flex">
              <div
                style={{
                  width: "40px",
                  backgroundColor: "black",
                  borderRadius: " 10px",
                  height: "40px",
                  padding: "5px",
                }}
              >
                <Image
                  src="/images/logo.png"
                  width="50px"
                  height="50px"
                  alt="logo image"
                />
              </div>
              <p className="d-flex align-items-center ms-1 fw-bold fs-5">
                ClouldFunding
              </p>
            </div>
          </div>
          <div className="list-group-flush my-3 ">
            <CoinsPrice />
            <ul className="list-unstyled">
              <NavActiveLink
                pathname="/dashboard"
                anchorImage={
                  <Image
                    src="/images/svg/home.svg"
                    alt="Home icon"
                    width="24"
                    height="24"
                  />
                }
                anchorText="Home"
              />

              <AccordionLink
                text="Submissions"
                image={
                  <Image
                    src="/images/svg/enveloppe.svg"
                    alt="Enveloppe icon"
                    width="24"
                    height="24"
                  />
                }
                number={5}
                pathname="/dashboard/submissions"
              >
                <ul className="list-unstyled">
                  <AccordionActivelink
                    accordionText="First Step"
                    pathname="/dashboard/submissions/pre-register"
                  />
                  <AccordionActivelink
                    accordionText="Second Step"
                    pathname="/dashboard/submissions/register"
                  />
                </ul>
              </AccordionLink>
              <NavActiveLink
                pathname="/dashboard/upcoming"
                anchorImage={
                  <Image
                    src="/images/svg/calender.svg"
                    alt="Calendar icon"
                    width="24"
                    height="24"
                  />
                }
                anchorText="Upcoming"
                anchorNumber={100}
              />
              <NavActiveLink
                pathname="/dashboard/ongoing"
                anchorImage={
                  <Image
                    src="/images/svg/message.svg"
                    alt="Message icon"
                    width="24"
                    height="24"
                  />
                }
                anchorText="Ongoing"
                anchorNumber={56}
              />
              <NavActiveLink
                pathname="/dashboard/manager"
                anchorImage={
                  <Image
                    src="/images/svg/wallet.svg"
                    alt="wallet icon"
                    width="24"
                    height="24"
                  />
                }
                anchorText="Manager"
              />
            </ul>
          </div>
        </div>
        <div>
          <ul className="list-unstyled">
            <NavActiveLink
              pathname="#"
              anchorImage={
                <Image
                  src="/images/svg/help_faq.svg"
                  alt="Help & FAQ icon"
                  width="24"
                  height="24"
                />
              }
              anchorText="Help & FAQ"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
