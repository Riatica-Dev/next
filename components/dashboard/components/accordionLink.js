import React from "react";
import styles from "@/styles/dashboard/layout.module.css";
import { useRouter } from "next/router";
const AccordionLink = ({ text, image, number, children, pathname }) => {
  const router = useRouter();
  const currentPath =
    router.pathname.indexOf("/", 12) == -1
      ? router.pathname
      : router.pathname.slice(0, router.pathname.indexOf("/", 12));
  const isActive = pathname === currentPath;
  return (
    <div
      className="accordion accordion-flush"
      style={{
        marginLeft: "1.625rem",
        marginRight: "1.625rem",
      }}
    >
      <div className="accordion-item">
        <button
          className={`${styles.accordionButton}  ${
            isActive && styles.activeLink
          } justify-content-between shadow-none accordion-button collapsed rounded-3`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-submissions"
          aria-expanded="false"
          aria-controls="flush-submissions"
          style={{
            padding: "0.625rem",
          }}
        >
          <span className="d-flex">
            {image}
            <span
              className="align-middle"
              style={{
                marginLeft: "0.75rem",
              }}
            >
              {text}
            </span>
          </span>
          {number ? (
            <span className={`${styles.badge} align-middle text-center`}>
              {number >= 100 ? `99+` : `${number}`}
            </span>
          ) : null}
        </button>
        <div
          id="flush-submissions"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionLink;
