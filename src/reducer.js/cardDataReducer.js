import {
  CARD_DATA,
  YOUR_CARD_DATA,
  BLOCKED_CARDS,
} from "../action/ActionTypes";

const initialState = {
  cardData: [],
  yourCardData: [],
  blockedCards: [],
};
const ownerID = 1;
export default function cardData(state = initialState, action) {
  switch (action.type) {
    case CARD_DATA:
      return {
        ...state,
        cardData: action.data,
      };
    case YOUR_CARD_DATA:
      return {
        ...state,
        yourCardData: action.data.filter((item) => item.owner_id === ownerID),
      };
    case BLOCKED_CARDS:
      return {
        ...state,
        blockedCards: action.data.filter(
          (item) => item.card_type === "Blocked"
        ),
      };
    default:
      return state;
  }
}
