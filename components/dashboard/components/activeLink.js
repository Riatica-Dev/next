import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/dashboard/layout.module.css";

export const NavActiveLink = ({
  pathname,
  anchorText,
  anchorImage,
  anchorNumber,
}) => {
  const router = useRouter();
  const currentPath =
    router.pathname.indexOf("/", 12) == -1
      ? router.pathname
      : router.pathname.slice(0, router.pathname.indexOf("/", 12));
  const isActive = pathname === currentPath;

  return (
    <li
      className={`${styles.navItem} rounded ${isActive && styles.activeLink}`}
    >
      <Link href={pathname}>
        <a
          className={`d-flex justify-content-between ${styles.navLink}  text-decoration-none`}
        >
          <span className="d-flex">
            {anchorImage}
            <span
              className="align-middle"
              style={{
                marginLeft: "0.75rem",
              }}
            >
              {anchorText}
            </span>
          </span>
          {anchorNumber ? (
            <span className={`${styles.badge} align-middle text-center`}>
              {anchorNumber >= 100 ? `99+` : `${anchorNumber}`}
            </span>
          ) : null}
        </a>
      </Link>
    </li>
  );
};

export const AccordionActivelink = ({ pathname, accordionText }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const isActive = pathname === currentPath;

  return (
    <li className={`${styles.accordionLink}`}>
      <Link href={pathname}>
        <a
          className={`${
            isActive ? styles.navLink : "text-grey-300"
          } text-decoration-none`}
        >
          {accordionText}
        </a>
      </Link>
    </li>
  );
};
