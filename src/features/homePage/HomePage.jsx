import React from "react";
import homePageClasses from "./homePageClasses";
import { Box } from "@material-ui/core";
import ItemList from "./ItemList";

const HomePage = () => {
  const data = [
    { text: "Pagina de Produto.", path: "/login" },
    { text: "douglas.", path: "/login" },
  ];
  const classes = homePageClasses();
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <Box mt={6} mr={43} className={classes.boxred}>
          <a className={classes.textTitle}>
            Bem <br />
            vindo ao <br />
          </a>
          <a className={`${classes.textTitle} ${classes.textColor}`}>
            meu Portfólio
          </a>
        </Box>
      </div>
      <div className={classes.container}>
        <Box>
          <a className={classes.text}>
            Aqui você vai encontrar alguns pequenos componentes
            <br /> construídos por mim. Sinta-se a vontade para navegar e <br />
            conhecer um pouco do portfólio.
          </a>
        </Box>
      </div>
      <div>
        {data.map((item) => (
          <ItemList item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
