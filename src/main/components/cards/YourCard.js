import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { yourCardDataList } from "../../../action/cardData";
import InfiniteScroll from "../ui/InfinteScolling";
import FilterSearch from "../ui/FilterSearch";

const YourCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(yourCardDataList());
  }, [dispatch]);
  const { yourCardData } = useSelector((state) => state.cardData);

  const [cardDataList, setCardDataList] = useState(yourCardData);

  const filteredData = (data) => {
    setCardDataList(() => data);
  };
  return (
    <>
      <FilterSearch data={yourCardData} filteredData={filteredData} />
      <Grid item xs={12}>
        <InfiniteScroll data={cardDataList} />
      </Grid>
    </>
  );
};
export default YourCard;
