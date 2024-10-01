import style from "./projectCard.module.css";

type experienceType = {
  years: number;
  clients: number;
  projects: number;
};

function ProjectCard(props: experienceType) {
  const { years, clients, projects } = props;

  return (
    <div className={style.card}>
      <div className={style.group}>
        <h2>{years}</h2>
        <div className="text">
          <p>Years</p> <p>Experience</p>
        </div>
      </div>
      <div className={style.group}>
        <h2>{clients}</h2>
        <div className="text">
          <p>Clients</p> <p>Worlwide</p>
        </div>
      </div>
      <div className={style.group}>
        <h2>{projects}</h2>
        <div className="text">
          <p>Total</p> <p>Projects</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
