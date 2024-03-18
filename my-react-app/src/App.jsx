import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Content from "./components/Content";

const App = () => {
  const name = "Lorem Ipsum";

  return (
    <>
      <Content
        contentTitle={"Lorem"}
        contentText={
          "In eget turpis non tortor iaculis tincidunt. Ut egestas feugiat magna. Duis enim nibh, gravida vel, nonummy non, sollicitudin ac, enim. Sed in tortor sed tellus eleifend cursus. Morbi a dolor at nibh molestie faucibus. Duis sed wisi. Duis fringilla, dui et malesuada dignissim, elit eros dictum lacus, rhoncus imperdiet pede elit nec tellus. Aenean at ligula eget nulla imperdiet faucibus. Quisque vestibulum lorem ac leo. Sed laoreet neque ut magna."
        }
      />
      <Content
        contentTitle={"Ipsum"}
        contentText={
          "Quisque ullamcorper placerat ipsum. Cras nibh. Morbi vel justo vitae lacus tincidunt ultrices. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In hac habitasse platea dictumst. Integer tempus convallis augue. Etiam facilisis. Nunc elementum fermentum wisi. Aenean placerat. Ut imperdiet, enim sed gravida sollicitudin, felis odio placerat quam, ac pulvinar elit purus eget enim. Nunc vitae tortor. Proin tempus nibh sit amet nisl. Vivamus quis tortor vitae risus porta vehicula."
        }
      />

      {/* <div className="quote2">
        <h1>Ipsum</h1>
        <p>
          Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut
          orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius,
          ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus
          sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer
          id felis. Curabitur aliquet pellentesque diam. Integer quis metus
          vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla
          et sapien. Integer tortor tellus, aliquam faucibus, convallis id,
          congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat,
          augue non elementum posuere, metus purus iaculis lectus, et tristique
          ligula justo vitae magna.
        </p>
      </div> */}
    </>
  );
};

export default App;
