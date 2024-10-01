import MainCard from "../mainCard/mainCard";
import ProjectCard from "../projectCards/projectCards";
import style from "./homeGrid.module.css";

function HomeGrid() {
  return (
    <div className={style.mainGrid}>
      <MainCard
        title="Bruno Alves"
        abstract="Web & Graphic Designer"
        summary="Hi! I am Bruno, a graphic designer with a strong background in UX/UI design. My expertise lies in crafting user-centered digital experiences and visually engaging designs."
        images={["/src/assets/lightblue.png"]}
        link="/About"
      />
      <MainCard title="Latest Work"/>
      <MainCard
        title="Credentials"
        abstract="More about me"
        images={["/src/assets/lightblue.png"]}
        link="/WorkInProgress"
      />
      <MainCard
        title="Projects"
        abstract="Showcase"
        images={["/src/assets/lightblue.png"]}
        link="/WorkInProgress"
      />
      <MainCard
        title="My Work"
        abstract="Blog"
        images={["/src/assets/lightblue.png"]}
        link="/WorkInProgress"
      />
      <MainCard
        title="Services Offering"
        abstract="Specialization"
        images={[
          "/src/assets/camera.svg",
          "/src/assets/edit.svg",
          "/src/assets/figma.svg",
          "/src/assets/codepen.svg",
        ]}
        link="/WorkInProgress"
      />
      <MainCard
        title="Profiles"
        abstract="Stay with me"
        images={[
          "/src/assets/globe.svg",
          "/src/assets/instagram.svg",
          "/src/assets/twitter.svg",
        ]}
        link="/Contact"
      />
      <ProjectCard years={0} clients={0} projects={0} />
      <MainCard
        title="Let's work together"
        images={[
          "/src/assets/heart.png"
        ]}
        link="/Contact"
      />
    </div>
  );
}

export default HomeGrid;
