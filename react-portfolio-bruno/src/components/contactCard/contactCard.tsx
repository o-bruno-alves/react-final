import style from "./contactCard.module.css";

type ContactType = {
  image: string;
  title?: string;
  information?: string[];
};

function ContactCard(props: ContactType) {
  const { image, title, information } = props;
  let cardStyle;
  if (title && information) {
    cardStyle = style.info;
  } else {
    cardStyle = style.social;
  }
  return (
    <div className={cardStyle}>
      <img src={image} alt="" />
      {title && information ? (
        <div>
          <p className={style.grey}>{title}</p>
          {information.map((info) => (
            <p >{info}</p>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ContactCard;
