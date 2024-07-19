import React from "react";
import FeedbackForm from "./FeedbackForm";
import BottomFooter from "./BottomFooter";
import { ConsultationForm } from "./ConsultationForm";

const Footer = () => {
  return (
    <footer>
      <div>
        <ConsultationForm />
      </div>
      <div>
        <FeedbackForm />
      </div>
      <div>
        <BottomFooter />
      </div>
    </footer>
  );
};

export default Footer;
