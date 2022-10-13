import React from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Dropzone = ({ form, field_name, _className = "dropzone rounded-20" }) => {
  const { setFieldValue } = form;

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFieldValue(
        field_name,
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    multiple: false,
  });
  return (
    <div {...getRootProps({ className: `${_className} dropzone` })}>
      <input {...getInputProps()} />
      <div className="d-flex justify-content-center align-items-center h-100">
        <AiOutlineCloudUpload fontSize="25" />
      </div>
    </div>
  );
};

export default Dropzone;
