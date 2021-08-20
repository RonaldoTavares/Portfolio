import React from "react";
import HomePageClass from "./HomePageClass";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#FFF",
      fontFamily: "'Poppins', sans-serif",
    },
    "& .MuiInputLabel-formControl": {
      color: "#FFF",
      fontFamily: "'Poppins', sans-serif",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFF",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#FFF",
    },
    "& .MuiInputBase-input": {
      color: "#FFF",
      fontFamily: "'Poppins', sans-serif",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#FFF",
      },
    },
  },
})(TextField);

const HomePage = () => {
  const classes = HomePageClass();
  return (
    <Grid className={classes.gridContainer}>
      <Box pt={32} pl={70} pr={70}>
        <Box className={classes.boxlogin}>
          <Grid container>
            <Grid xs={12} item className={classes.text}>
              Login
            </Grid>
            <Grid xs={12} item>
              <Box pl={3} pr={3} pb={6}>
                <CssTextField
                  fullWidth
                  id="standard-multiline-flexible"
                  label="Usuário"
                />
              </Box>
              <Box pl={3} pr={3} pb={6}>
                <CssTextField
                  fullWidth
                  id="standard-multiline-flexible"
                  label="Senha"
                />
              </Box>
              <Box pl={3} pr={3} pb={6}>
                <Button className={classes.button}>Entrar</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default HomePage;
