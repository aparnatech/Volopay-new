import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FilterSearch from "../ui/FilterSearch";
import InfiniteScrolling from "../ui/InfinteScolling";
import { blockedCardDataList } from "../../../action/cardData";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "end",
    padding: "1.3rem 0",
    right: "2rem",
  },
  root: {
    flexGrow: 1,
  },
  filterDiv: {
    border: "1px solid #dfdfdf",
    padding: "2px",
    backgroundColor: "#ede2e259",
    display: "flex",
    color: "#888484",
    cursor: "pointer",
    height: "20px",
  },
}));
const BlockedCards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blockedCardDataList());
  }, [dispatch]);
  const { blockedCards } = useSelector((state) => state.cardData);
  const [cardDataList, setCardDataList] = useState(blockedCards);
  const classes = useStyles();
  const filteredData = (data) => {
    setCardDataList(data);
  };

  return (
    <>
      <FilterSearch data={blockedCards} filteredData={filteredData} />
      <div className={classes.toolBar}>
        <Grid item xs={12}>
          <InfiniteScrolling data={cardDataList} />
        </Grid>
      </div>
    </>
  );
};
export default BlockedCards;
