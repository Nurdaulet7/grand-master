import React from "react";
import Header from "../../components/Header";
import MainContent from "./MainContent";
import Footer from "../../components/Footer";

function Main() {
  return (
    <div>
      <Header hasbutton />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Main;
