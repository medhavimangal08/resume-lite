import React from "react";
import Navbar from "./component/navbar";
import AboutME from "./component/AboutME";
import Section from "./component/section";

const sectionData = [
  {
    headingobj: "Power of Tanjiro",
    descriptionobj:
      "Tanjiro Kamado is an exceptionally powerful fighter in Demon Slayer, known for his mastery of Water Breathing and later the ancient Sun Breathing technique, which grants him immense strength and speed. His heightened sense of smell allows him to track demons and predict their movements. Tanjiro's unwavering determination, compassion, and strategic intellect make him a formidable opponent. Additionally, he possesses superhuman strength and an ability to heal faster after acquiring the Demon Slayer Mark, further enhancing his combat abilities",
  },
  {
    headingobj: "Friends of Tanjiro",
    descriptionobj:
      "Tanjiro Kamado has formed strong bonds with several key friends throughout his journey. Nezuko, his younger sister, is his closest companion and the driving force behind his quest to cure her after she is turned into a demon. He also forms a deep friendship with Zenitsu Agatsuma, a cowardly yet loyal ally, and Inosuke Hashibira, a wild and brash fighter who becomes one of his closest comrades. Kanao Tsuyuri, a skilled demon slayer, also becomes a friend and ally, although initially distant. Their teamwork and unwavering support for Tanjiro strengthen his resolve to protect others and defeat demons.",
  },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutME />
      {sectionData.map((value, index) => (
        <Section
          key={index}
          heading={value.headingobj}
          description={value.descriptionobj}
        />
      ))}
    </div>
  );
};

export default App;
