import React from "react";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  return (
    <>
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
      <div className={`list-group-flush my-3`}>
        <div>
          <div></div>
          <div>
            <ul className="list-unstyled">
              <li>
                <Link href="/dashboard">Home </Link>
              </li>
              <li>
                <Link href="/dashboard/submissions">Submissions </Link>
              </li>
              <li>Upcoming</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
