import React, { useEffect, useState } from "react";
import { FormGroup, Checkbox, FormControlLabel } from "@material-ui/core";
const typesOfCard = [
  { name: "Subscription", id: 1 },
  { name: "burner", id: 2 },
];
const CheckboxComponent = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(typesOfCard.length).fill(false)
  );
  useEffect(() => {
    if (props.onClear) {
      setCheckedState(new Array(typesOfCard.length).fill(false));
      props.onClearAction(false);
    }
  }, [props]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      ++index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const selected = updatedCheckedState.map((item, index) => {
      if (Boolean(item) === true) {
        return typesOfCard[index].name;
      }
      return 0;
    });
    props.onhandleClick(selected);
  };
  return (
    <FormGroup row>
      {typesOfCard.map((card) => (
        <FormControlLabel
          key={card.id}
          control={
            <Checkbox
              checked={checkedState[card.id - 1]}
              onChange={() => handleOnChange(card.id)}
              name="checkedA"
            />
          }
          label={card.name}
          value={card.name}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxComponent;
