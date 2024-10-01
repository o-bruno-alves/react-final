import style from "./titleCard.module.css";

type titleType = {
  title: string,
  image: string
};

function TitleCard(props: titleType) {
  const { title, image } = props;

  return (
    <div className={style.group}>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <img src={image} alt="" />
    </div>
  );
}

export default TitleCard;