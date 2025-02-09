import React from "react";
import tanjiroimg from "../images/tanjiro.jpg";

const AboutME = () => {
  return (
    <div style={{ margin: "5px" }}>
      <h1 style={{ textAlign: "center" }}>About Tanjiro</h1>
      <img
        src={tanjiroimg} // Replace with your desired image URL
        alt="Tanjiro Kamado"
        style={{
          width: "300px",
          height: "auto",
          borderRadius: "10px",
          marginLeft: "40%",
        }} // You can style the image if needed
      />
      <p>
        <b>Tanjiro Kamado</b> is the main protagonist of the anime and manga
        series Demon Slayer (Kimetsu no Yaiba). He is a kind-hearted, determined
        young boy who becomes a demon slayer after his family is slaughtered by
        demons and his sister Nezuko is turned into one. Tanjiro is known for
        his strong sense of justice, empathy, and his dedication to protecting
        those he loves. He possesses exceptional physical strength and a unique
        breathing technique called "Water Breathing." Throughout his journey,
        Tanjiro grows stronger, fighting demons while searching for a cure for
        his sister.
      </p>
    </div>
  );
};

export default AboutME;
