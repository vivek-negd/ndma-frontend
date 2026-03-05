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
      <IndiaMap/>
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