import React from "react";
import { Field } from "formik";
import Link from "next/link";
import Message from "@/components/feedback/message";

export const MessagesOne = () => {
  return (
    <Message>
      <p className="text-black nav-link">
        We will ask you a few questions about your project.
        <br /> Once you&apos;ve submitted your answers, we will get back to you
        with feedback
        <br /> (usually within two business days).
      </p>
    </Message>
  );
};

export const MessagesTwo = () => {
  return (
    <Message>
      <p className="text-black nav-link">
        Thank you for taking the time to answer all of our questions.
        <br /> We will get to work on the next steps and will be in touch
        shortly
        <br /> (usually within two business days).
      </p>

      <p className="mt-4 ">
        By clicking &quot;submit&quot; you acknowledge that you have read,
        understand, and completely agree to these{" "}
        <Link href="/terms-conditions" passHref>
          <a target="_blank" rel="noopener" className="text-decoration-none">
            CloudFunding Platform Terms of Service
          </a>
        </Link>
      </p>
    </Message>
  );
};
