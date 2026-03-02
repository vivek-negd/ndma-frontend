import TopBar from "../../../admin/components/layout/TopBar"
import WebHeader from "../home/WebHeader"
import { Footer } from "../../components/layouts/Footer";
import { AboutUsContent } from "./AboutUsContent";

export const AboutUs = () => {
  return (
    <>
      <TopBar />
      <WebHeader />
     <AboutUsContent />
       {/* <WhyAapdaMitra />
      <WhatIsAapdaMitra /> */}
      <Footer />
      </>
  )}