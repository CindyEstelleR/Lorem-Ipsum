import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  // L'ensemble des props données au composant lors de son appel sont réunies dans un objet qui est donné en argument à la fonction

  return (
    <div>
      <Title titleTitle={props.contentTitle} />
      <Description descriptionText={props.contentText} />
      {/* <p>{props.contentText}</p> */}
    </div>
  );
};

export default Content;
