import MainCard from "../mainCard/mainCard";
import TitleCard from "../titleCard/titleCard";
import style from "./aboutGrid.module.css";

function HomeGrid() {
  return (
    <div className={style.mainGrid}>
      <MainCard title="" images={["/src/assets/lightblue.png"]} />
      <TitleCard title="Profile" />
      <MainCard
        title="Bruno Alves"
        summary="I am Guimarães based graphic designer with a strong background in UX/UI design. My expertise lies in crafting user-centered digital experiences and visually engaging designs. With a growing interest in full-stack web development, I am currently expanding my skill set to bridge design and development for seamless digital solutions "
      />
    
      <MainCard
        title="Experience"
        experiences={[{
            years: "2022 - now",
            designation: "Web Designer",
            location: "BEHS"
        },
        {
          years: "2016 - 2022",
          designation: "Web Designer",
          location: "HBS"
        }]}
        
      />
      <MainCard
        title="Education"
        experiences={[
            {
                years: "2024",
                designation: "Fullstack Development",
                location: "EDIT"
            },{
              years: "2013-2016",
              designation: "Graphic Design",
              location: "ESAP - Escola Superior Artística do Porto"
        }]}
        
      />
      <MainCard
        title="My Profile"
        abstract="Stay with me"
        images={[
          "/src/assets/globe.svg",
          "/src/assets/instagram.svg",
          "/src/assets/twitter.svg",
        ]}
        link="/Contact"
      />
      <MainCard
        title="Let's work together"
        link="/Contact"
      />
        <MainCard
        title="Qualifications"
        abstract="More about me"
        images={["/src/assets/lightblue.png"]}
        link="/WorkInProgress"
      />
    </div>
  );
}

export default HomeGrid;
