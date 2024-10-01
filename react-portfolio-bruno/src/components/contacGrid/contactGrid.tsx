import ContactCollumn from "../contactCollumn/contactCollumn";
import MainCard from "../mainCard/mainCard";
import style from "./contactGrid.module.css"

function ContactGrid() {
  return (
    <div className={style.group}>
      <ContactCollumn />
      <MainCard
        title="Let's work together."
        images={["/src/assets/heart.png"]}
        form={true}
      />
    </div>
  );
}

export default ContactGrid;