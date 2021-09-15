import React from "react";
import ItemListClasses from "./ItemListClasses";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const ItemList = (item) => {
  const classes = ItemListClasses();
  const history = useHistory();

  const changeMenuItem = (path) => {
    history.push(path);
  };

  return (
    <Box mt={2} className={classes.box}>
      <Button
        color="default"
        onClick={() => {
          changeMenuItem(item.item.path);
        }}
        className={classes.button}
      >
        <div className={classes.space} />
        <ArrowForwardIosIcon />
        <span>{item.item.text}</span>
      </Button>
    </Box>
  );
};

export default ItemList;
