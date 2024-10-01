import ContactCard from "../contactCard/contactCard";
import useFetch from "../hooks/useFetch";
import style from "./contactCollumn.module.css";



function ContactCollumn() {
  const contactInfo= useFetch("src/api/contacts.json")

  return (
    <div>
      <div>
        <h2>Contact Info</h2>
        <div className={style.info}>
          <ContactCard
            image="/src/assets/mail.svg"
            title="Mail me"
            information={contactInfo?.email}
          />
          <ContactCard
            image="/src/assets/smartphone.svg"
            title="Contact me"
            information={contactInfo?.phones}
          />
          <ContactCard
            image="/src/assets/map-pin.svg"
            title="Mail me"
            information={contactInfo?.address}
          />
        </div>
      </div>
      <div >
        <h2>Social Info</h2>
        <div className={style.social}>
          <ContactCard image="/src/assets/globe.svg" />
          <ContactCard image="/src/assets/instagram.svg" />
          <ContactCard image="/src/assets/twitter.svg" />
        </div>
      </div>
    </div>
  );
}

export default ContactCollumn;
