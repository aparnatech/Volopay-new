import {
  CARD_DATA,
  YOUR_CARD_DATA,
  BLOCKED_CARDS,
} from "../action/ActionTypes";
import cardList from "../data/cardData.json";
export function cardDataList() {
  return {
    type: CARD_DATA,
    data: cardList,
  };
}
export function yourCardDataList() {
  return {
    type: YOUR_CARD_DATA,
    data: cardList,
  };
}

export function blockedCardDataList() {
  return {
    type: BLOCKED_CARDS,
    data: cardList,
  };
}
