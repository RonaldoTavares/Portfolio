import React, { useState } from "react";
import HomePageClass from "./LoginPageClass";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
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
  const [buttonClick, setButtonClick] = useState(true);

  const functionButton = (value) => {
    setButtonClick(value);
  };
  return (
    <Grid className={classes.gridContainer}>
      <Box pt={32} pl={70} pr={70}>
        {buttonClick && (
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
                <Box pl={20} pr={3} pb={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => functionButton(false)}
                  >
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        {!buttonClick && (
          <>
            <Box pl={20} pr={3} pb={6}>
              <Grid xs={12}>
                <CircularProgress className={classes.circularProgress} />
              </Grid>
            </Box>
            <Box pl={17} pr={3} pb={6}>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => functionButton(true)}
              >
                Cancel
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Grid>
  );
};

export default HomePage;
