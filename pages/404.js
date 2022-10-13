import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/utils/title";
import styles from "@/styles/notFound.module.css";

const NotFound = () => {
  return (
    <>
      <Title pageName="Not Found 😞" />
      <div className="container">
        <div
          className={`${styles.hieghtView} d-flex justify-content-center align-items-center`}
        >
          <div className="text-center">
            <Image
              src="/images/notFoundPlaceholder.png"
              alt="Not found Image"
              height="400"
              width="500"
            />

            <h3 className="pt-3">Page Not Found </h3>
            <p className="w-75 p-3 mx-auto">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href="/" passHref>
              <a>
                <button className="btn rounded-pill bg-grey-400 mt-3">
                  Go To Home
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
