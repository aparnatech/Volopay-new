import React, { useState } from "react";
import SearchAppBar from "../ui/SearchInput";
import { SearchResult } from "../ui/SearchResult";
import FilterComponent from "../cards/FilterComponent";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "end",
    padding: "1.3rem 0",
    margin: "4rem 0 0",
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
const FilterSearch = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const callBack = async (value) => {
    const result = await SearchResult(value, props.data);
    props.filteredData(result);
  };

  const filteredDataForCard = (data) => {
    props.filteredData(data);
  };

  const showFilterComponent = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={classes.toolBar}>
        <SearchAppBar onAction={callBack} />
        <div className={classes.filterDiv} onClick={showFilterComponent}>
          <i className="material-icons" style={{ fontSize: "20px" }}>
            filter_list
          </i>
          <span>Filter</span>
        </div>
        {show && (
          <FilterComponent
            data={props.data}
            filteredData={filteredDataForCard}
          />
        )}
      </div>
    </>
  );
};
export default FilterSearch;
