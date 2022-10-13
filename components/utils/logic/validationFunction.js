import * as Yup from "yup";

export const wordCounter = (str) => {
  const regex = /\s+/gi;
  let wordCount = 0;
  if (Number(Number(str.length) - 1) != 0) {
    wordCount = str.trim().replace(regex, " ").split(" ").length;
  }
  return wordCount;
};

export const imageValidator = Yup.array()
  .test("required", "Please upload an image.", (value) => {
    return value && value.length == 1;
  })
  .test("type", "Please choose only photo.", (value) => {
    return (
      value &&
      value[0] &&
      (value[0].type == "image/jpeg" ||
        value[0].type == "image/png" ||
        value[0].type == "image/jpg")
    );
  })
  .test("min_size", "Sorry, minimum size has to be 50kb.", (value) => {
    return value && value[0] && value[0].size >= 50000;
  })
  .test("max_size", "Sorry, maximum size has to be 2mb.", (value) => {
    return value && value[0] && value[0].size <= 2000000;
  });

export const pdfValidator = Yup.array()
  .test("required", "Please upload a pdf file.", (value) => {
    return value && value.length == 1;
  })
  .test("type", "Please choose only a pdf file.", (value) => {
    return value && value[0] && value[0].type == "application/pdf";
  })
  .test("max_size", "Sorry, maximum size has to be 2MB.", (value) => {
    return value && value[0] && value[0].size <= 19000000;
  });

export const twitterValidator = Yup.string()
  .url("Please enter a valid twitter url.")
  .test("twitter url", "Please enter a twitter valid url", (value) => {
    if (!value) {
      return true;
    } else {
      return value && value.includes("twitter.com");
    }
  })
  .required("Please enter a twitter account url.");
