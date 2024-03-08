import React from "react";
import Contact from "./Contact";

const serviceKey = process.env.YOUR_SERVICE_ID as string;
const templateKey = process.env.YOUR_TEMPLATE_ID as string;
const publicKey = process.env.YOUR_PUBLIC_KEY as string;
const FormInfo = () => {
  return (
    <Contact
      serviceKey={serviceKey}
      templateKey={templateKey}
      publicKey={publicKey}
    />
  );
};

export default FormInfo;
