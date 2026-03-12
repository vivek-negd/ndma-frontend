import TopBar from "../../../admin/components/layout/TopBar";
import WebHeader from "./WebHeader";
import HeroCarousel from "./HeroCarousel";
import { LeadershipSection } from "./LeadershipSection";
import VideosGallery from "./MediaSection/VideoGallery";
import { PhotoGallery } from "./MediaSection/PhotoGallery";
import { VolunteerPresenceSection } from "./VolunteerPresenceSection";
import { AchievementsSection } from "./AchievementsSection";
import { TrainingUpdatesSection } from "./TrainingUpdatesSection";
import { SocialMediaSection } from "./SocialMediaSection";
import { StateLogosSection } from "./StateLogosSection";
import { Footer } from "../../components/layouts/Footer";
import IndiaMap from "../../../admin/pages/Dashboard/IndiaMap";

const Home = () => {
  return (
    <>
      <TopBar />
      <WebHeader />
      <HeroCarousel />
      <LeadershipSection />
      <VideosGallery />
      <PhotoGallery />
      
      {/* India Map Section */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "24px 80px 36px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <IndiaMap />
        </div>
      </section>
      
      {/* <VolunteerPresenceSection /> */}
      <AchievementsSection />
      <TrainingUpdatesSection />
      <SocialMediaSection />
      <StateLogosSection />
      <Footer />
    </>
    
  );
};

export default Home;