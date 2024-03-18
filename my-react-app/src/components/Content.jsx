const Content = (props) => {
  // L'ensemble des props données au composant lors de son appel sont réunies dans un objet qui est donné en argument à la fonction

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Content;
