import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import globals_styles from "@/styles/globals_register.module.css";
import Error from "@/components/feedback/error";
import Dropzone from "@/components/inputs/dropzone";
import Modal from "../utils/modal";

export const Preview = ({ preview, field_name, changeValue }) => {
  return (
    <div
      className={`${globals_styles.imagePreview} ${
        preview.length == 0 ? "mt-0" : "mt-3"
      }`}
    >
      {preview.map((file) => {
        return (
          <div key={file.name}>
            <div className="d-flex justify-content-end">
              <span
                className={`${globals_styles.deleteBtn}`}
                onClick={() => changeValue(field_name, [])}
              >
                <AiOutlineCloseCircle fontSize={20} />
              </span>
            </div>
            {file.type === "application/pdf" ? (
              <embed
                type="application/pdf"
                src={file.preview}
                height={150}
                width={150}
              />
            ) : (
              <Image
                height={150}
                width={150}
                src={file.preview}
                alt={file.name}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const PreviewRead = ({
  label,
  _classNameLabel = "",
  _styleLabel = "",
  dataTarget,
  preview,
}) => {
  return (
    <>
      <div className="form-group mb-3">
        {label && (
          <label
            className={`${_classNameLabel} fw-500 d-flex`}
            style={{ _styleLabel }}
          >
            {label}
          </label>
        )}
        <button
          type="button"
          className="btn d-flex"
          data-bs-toggle="modal"
          data-bs-target={`#${dataTarget}`}
        >
          <span className="me-3 text-decoration-underline link-primary">
            Preview
          </span>
          <Image
            src="/images/svg/image.svg"
            alt="image icon"
            width="20"
            height="20"
          />
        </button>
      </div>
      <Modal id={dataTarget} label={`${dataTarget}label`}>
        <div className="modal-header">
          <h5 className="modal-title" id={`${dataTarget}label`}>
            {label}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="p-3">
          {preview.map((file) => {
            return (
              <div key={file.name}>
                {file.type === "application/pdf" ? (
                  <div
                    style={{
                      height: "80vh",
                      width: "100%",
                    }}
                  >
                    <embed
                      type="application/pdf"
                      src={file.preview}
                      height="100%"
                      width="100%"
                    />
                  </div>
                ) : (
                  <Image
                    height={500}
                    width={500}
                    layout="responsive"
                    src={file.preview}
                    alt={file.name}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
