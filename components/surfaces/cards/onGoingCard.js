import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { AiOutlineTwitter } from "react-icons/ai";
import styles from "@/styles/funding_component.module.css";
import CountDown from "@/components/feedback/countDown";
import Progressbar from "@/components/feedback/progress";

const OngoingComponent = ({ status = 0 }) => {
  return (
    <div className="row my-5 justify-content-center">
      <div className="col-lg-4">
        <div className="d-flex justify-content-center h-100 align-items-center">
          <Link href="" passHref>
            <a>
              <Image
                className="rounded-circle"
                src="/images/placeholder_image.jpg"
                alt="Tea House"
                width="300px"
                height="300px"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="d-flex align-items-center h-100">
          <div>
            <p className="h2 fw-bold">Campaign Title</p>
            <p className={`${styles.text} text-muted`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-unstyled d-inline-flex mt-2">
              <li>
                <Link href="#" passHref>
                  <a className="text-muted me-2" rel="noopener" target="_blank">
                    <AiOutlineTwitter fontSize="24" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="text-muted me-2" rel="noopener" target="_blank">
                    <TbWorld fontSize="24" />
                  </a>
                </Link>
              </li>
            </ul>
            <div className="mt-3 mb-2">
              {status != 0 && status != 1 && <Progressbar />}
            </div>

            {status == 1 ? (
              <div className="mt-3 mb-2">
                <div className="d-flex">
                  <div className="w-100">
                    <Progressbar />
                  </div>
                  <div className="d-flex align-items-center">
                    <Link href="/wrap">
                      <a
                        target="_blank"
                        rel="noopener"
                        className={`${styles.contribute} ${styles.contributeBtn} btn rounded-3 ms-2`}
                      >
                        Contribute
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="text-danger">
                  <CountDown />
                </div>
              </div>
            ) : status == 0 ? (
              <div className="mt-3 mb-2">
                <div className="d-flex">
                  <div className="w-100">
                    <Progressbar />
                  </div>
                  <div className="d-flex align-items-center">
                    <Link href="/wrap">
                      <a
                        className={`bg-grey-400 ${styles.contributeBtn} btn rounded-3 ms-2`}
                      >
                        Contribute
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  className="bg-grey-400 rounded-3 text-center p-2"
                  style={{ maxWidth: "115px" }}
                >
                  <CountDown />
                </div>
              </div>
            ) : (
              <div className="d-flex">
                <Link href="https://github.com/facebook">
                  <a>
                    <button className="rounded-3 btn me-2 bg-grey-400">
                      View metrics
                    </button>
                  </a>
                </Link>
                <div className="rounded-3 bg-grey-400 px-2 pt-2">
                  <CountDown />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingComponent;
