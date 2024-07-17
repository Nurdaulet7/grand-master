import React from "react";
import ConsultationForm from "./ConsultationForm";
import FeedbackForm from "./FeedbackForm";
import BottomFooter from "./BottomFooter";

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
