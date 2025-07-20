import { ABOUT } from "@/db/informació/about";
import { InfoComponent } from "@/pods/info/info.component";

const AboutScreen = () => {
  return (
    <InfoComponent
      texts={ABOUT}
      foto={require("../../../assets/images/sarah.jpg")}
    />
  );
};

export default AboutScreen;
