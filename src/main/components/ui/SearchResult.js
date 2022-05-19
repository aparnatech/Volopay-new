export const SearchResult = (value, data) => {
  if (value !== "") {
    const filteredData = data.filter((el) => {
      //return the item which contains the user input
      return el.name.toLowerCase().includes(value);
    });
    return filteredData;
  } else {
    return data;
  }
};
