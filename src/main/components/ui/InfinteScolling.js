import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrolling = (props) => {
  const [dataCard, setDataCard] = useState([]);
  useEffect(() => {
    setDataCard(() => props.data.slice(0, 10));
  }, [props.data]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDataCard((prevState) => [
        ...prevState,
        ...props.data.slice(0 + prevState.length, 10 + prevState.length),
      ]);
    }, 1500);
  };
  return (
    <>
      <InfiniteScroll
        dataLength={dataCard}
        next={fetchMoreData}
        hasMore={!(props.data.length === dataCard.length)}
        loader={<h4>Loading ...</h4>}
      >
        <Card data={dataCard} />
      </InfiniteScroll>
    </>
  );
};
export default InfiniteScrolling;
