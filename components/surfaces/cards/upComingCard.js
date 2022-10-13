import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import globals_styles from "@/styles/globals_register.module.css";
import styles from "@/styles/funding_component.module.css";
import CountDown from "@/components/feedback/countDown";
import Modal from "@/components/utils/modal";

const UpComingCard = ({ status }) => {
  return (
    <>
      <div className="row my-5 justify-content-center">
        <div className="col-lg-4">
          <div
            className={`${styles.fundingImage} d-flex justify-content-center`}
          >
            <Link href="" passHref>
              <Image
                className="rounded-circle "
                src="/images/placeholder_image.jpg"
                alt="Tea House"
                width="190px"
                height="190px"
              />
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex align-items-center h-100">
            <div>
              <p className={`${styles.textCenter} h2 fw-bold`}>
                Campaign Title
              </p>
              <p className={`${styles.text} text-muted`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="list-unstyled d-inline-flex mt-2">
                <li>
                  <Link href="#" passHref>
                    <a
                      className="text-muted me-2"
                      rel="noopener"
                      target="_blank"
                    >
                      <AiOutlineTwitter fontSize="24" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <a
                      className="text-muted me-2"
                      rel="noopener"
                      target="_blank"
                    >
                      <TbWorld fontSize="24" />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="mb-2">
                <p>Raise Period starts in:</p>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className={`${status == 1 && "text-danger"}`}>
                  <CountDown />
                </div>
                <button
                  className={`${globals_styles.btn} btn rounded-3 ${styles.btn}`}
                  data-bs-toggle="modal"
                  data-bs-target="#hichem"
                >
                  Set Alarm
                  <MdOutlineNotificationsActive
                    className={`${styles.bell} ms-1`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        id="hichem"
        label="hichemLabel"
        _className="bg-transparent border-0"
      >
        <div className={`${styles.parentWrapper}`}>
          <span
            className={`${styles.closeBtn} glyphicon glyphicon-remove`}
          ></span>
          <div className={`${styles.reminderWrapper}`}>
            <h4 className="mt-4">SEND ME A REMINDER</h4>
            <input
              type="email"
              name="email"
              className={`${styles.reminderInput}`}
              placeholder="Your e-mail"
            />
            <div className={`${styles.submitBtn}`}>REMIND ME</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpComingCard;
