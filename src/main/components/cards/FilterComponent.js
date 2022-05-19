import React, { useState } from "react";
import { Grid, Button, makeStyles, Card } from "@material-ui/core";
import SelectComponent from "../ui/SelectComponent";
import CheckboxComponent from "../ui/CheckboxComponent";

const useStyles = makeStyles((theme) => ({
  filterdivPosition: {
    position: "absolute",
    right: "49px",
    top: "11rem",
    width: "27%",
    zIndex: 1,
  },
  subheader: {
    color: "#30373770",
    padding: "0.6rem 0",
  },
  filterTitle: {
    margin: "0",
    padding: "0.2rem 0 0.5rem",
    borderBottom: "1px solid #dfdfdf",
    color: "rgb(76, 76, 76)",
  },
  btnDisplay: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  MuiButtonContainedClear: {
    backgroundColor: "#ffffff",
    color: "#000",
    width: "120px",
  },
  MuiButtonContainedApply: {
    width: "120px",
  },
}));

const FilterComponent = (props) => {
  const classes = useStyles();
  const [type, setType] = useState([]);
  const [cardHolder, setCardHolder] = useState(null);
  const [clear, setClear] = useState(false);

  const onhandleClick = (value) => {
    setType(value);
  };

  const onhandleClickCard = (value) => {
    setCardHolder(value);
  };

  const filterData = (cancel = null) => {
    if (cancel) {
      props.filteredData(props.data);
      setClear(true);
      setCardHolder(null);
      setType([]);
      return;
    }
    const filteredData = props.data.filter((item) => {
      if (type.length > 0 && cardHolder) {
        return (
          type.includes(item["card_type"]) && item.cardholder === cardHolder
        );
      }
      return type.includes(item["card_type"]) || item.cardholder === cardHolder;
    });
    props.filteredData(filteredData);
    setType([]);
  };

  const onClearAction = (clear) => {
    setClear(clear);
  };

  return (
    <Grid item md={12} className={classes.filterdivPosition}>
      <Card style={{ padding: "1rem" }}>
        <div className={classes.filterTitle}>Filters</div>
        <div className={classes.subheader}>Type</div>
        <CheckboxComponent
          data={props.data}
          onhandleClick={onhandleClick}
          onClearAction={onClearAction}
          onClear={clear}
        />
        <SelectComponent
          data={props.data}
          onhandleClick={onhandleClickCard}
          onClear={clear}
          onClearAction={onClearAction}
        />
        <div className={classes.btnDisplay}>
          <Button
            variant="contained"
            color="secondary"
            // disabled={type.length === 0 && !cardHolder}
            onClick={() => filterData()}
            classes={{
              root: classes.MuiButtonContainedApply,
            }}
          >
            Apply
          </Button>
          <Button
            variant="contained"
            // disabled={type.length === 0 && !cardHolder}
            onClick={() => filterData(true)}
            classes={{
              root: classes.MuiButtonContainedClear,
            }}
          >
            Clear
          </Button>
        </div>
      </Card>
    </Grid>
  );
};

export default FilterComponent;
