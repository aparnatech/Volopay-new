import React, { useEffect } from "react";
import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: "100%",
  },
  selectEmpty: {
    margin: "0.8rem 0rem",
    backgroundColor: "#e7dbdb4a",
  },
  subheader: {
    color: "#30373770",
  },
}));

export default function SelectComponent(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const cardHolder = props.data.filter((item) => item.cardholder);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.onhandleClick(event.target.value);
  };

  useEffect(() => {
    if (props.onClear) {
      setAge("");
      props.onClearAction(false);
    }
  }, [props]);
  return (
    <Grid item md={12}>
      <span className={classes.subheader}>Cardholder</span>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Select Cardholder
          </MenuItem>
          {cardHolder.map((item, index) => (
            <MenuItem key={index} value={item.cardholder}>
              {item.cardholder}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
