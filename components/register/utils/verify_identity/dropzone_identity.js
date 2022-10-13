import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import { FiHelpCircle } from "react-icons/fi";
import styles from "@/styles/register.module.css";
import globals_styles from "@/styles/globals_register.module.css";
import Dropzone from "@/components/inputs/dropzone";
import { Preview } from "@/components/inputs/preview";
import Modal from "@/components/utils/modal";
import Error from "@/components/feedback/error";
import { ValuesContext } from "pages/register";
import Image from "next/image";

const DropzoneIdentity = () => {
  const { values, changeValue } = useContext(ValuesContext);

  return (
    <>
      <div className={`${globals_styles.stepsForm}`}>
        <p className="py-1">
          Upload your identification document as well as a photo of you
        </p>
        <>
          <div>
            {values.identity_type == "national_identity_card" ||
            values.identity_type == "driving_licence" ? (
              <div className="row">
                <div className="my-2 col-sm-12 col-md-6">
                  <label htmlFor="id_image.side_1">
                    Your identification document side one
                  </label>
                  <Field name="id_image.side_1">
                    {({ form, meta }) => {
                      return (
                        <Dropzone
                          form={form}
                          field_name="id_image.side_1"
                          _className={`${
                            meta.error &&
                            meta.touched &&
                            "border-danger bg-danger"
                          } form-control`}
                        />
                      );
                    }}
                  </Field>
                  <Preview
                    preview={values.id_image.side_1}
                    field_name="id_image.side_1"
                    changeValue={changeValue}
                  />
                  <ErrorMessage
                    name="id_image.side_1"
                    render={(error) => <Error error={error} />}
                  />
                </div>

                <div className="my-2 col-sm-12 col-md-6">
                  <label htmlFor="id_image.side_2">
                    Your identification document side two
                  </label>
                  <Field name="id_image.side_2">
                    {({ form, meta }) => {
                      return (
                        <Dropzone
                          form={form}
                          field_name="id_image.side_2"
                          _className={`${
                            meta.error &&
                            meta.touched &&
                            "border-danger bg-danger"
                          } form-control`}
                        />
                      );
                    }}
                  </Field>
                  <Preview
                    preview={values.id_image.side_2}
                    field_name="id_image.side_2"
                    changeValue={changeValue}
                  />
                  <ErrorMessage
                    name="id_image.side_2"
                    render={(error) => <Error error={error} />}
                  />
                </div>
              </div>
            ) : (
              <div className={`${styles.dropzoneInput} my-2`}>
                <label htmlFor="id_image.side_1">
                  Your identification document{" "}
                </label>
                <Field name="id_image.side_1">
                  {({ form, meta }) => {
                    return (
                      <Dropzone
                        form={form}
                        field_name="id_image.side_1"
                        _className={`${
                          meta.error &&
                          meta.touched &&
                          "border-danger bg-danger"
                        } form-control`}
                      />
                    );
                  }}
                </Field>
                <Preview
                  preview={values.id_image.side_1}
                  field_name="id_image.side_1"
                  changeValue={changeValue}
                />
                <ErrorMessage
                  name="id_image.side_1"
                  render={(error) => <Error error={error} />}
                />
              </div>
            )}
          </div>

          <div className="my-2">
            <label htmlFor="selfie_image">
              Photo of you holding your document
            </label>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <Field name="selfie_image" type="file">
                  {({ form, meta }) => {
                    return (
                      <Dropzone
                        form={form}
                        label="Your selfie"
                        field_name="selfie_image"
                        _className={`${
                          meta.error &&
                          meta.touched &&
                          "border-danger bg-danger"
                        } form-control`}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="selfie_image"
                  render={(error) => <Error error={error} />}
                />
              </div>
              <div className="col-md-6 col-sm-12 mt-2 text-center">
                <p>
                  How the photo should be
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#selfieExplanation"
                  >
                    <FiHelpCircle />
                  </button>{" "}
                </p>
              </div>
            </div>
            <Preview
              preview={values.selfie_image}
              field_name="selfie_image"
              changeValue={changeValue}
            />
          </div>
        </>
      </div>
      <Modal id="selfieExplanation" label="selfieExplanationLabel">
        <>
          <div className="modal-header">
            <h5 className="modal-title" id="selfieExplanationLabel">
              How your verification photo should be
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Image
              src="/images/selfie.webp"
              alt="Selfie"
              width="230"
              height="200"
              layout="responsive"
            />
          </div>
        </>
      </Modal>
    </>
  );
};

export default DropzoneIdentity;
