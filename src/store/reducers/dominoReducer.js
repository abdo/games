import { initialBalatas } from "./helpers/initialBalatas";
import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  allBalatas: initialBalatas, //array of objects
  groundBalatas: [], //array of objects
  player1Balatas: [], //array of objects
  player2Balatas: [], //array of objects
  player1Identity: "person", //person,computer
  player2Identity: "computer" //person,computer,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_RANDOM_FIRST_GROUND_BALATA:
      return {
        ...state,
        allBalatas: action.allBalatas,
        groundBalatas: action.groundBalatas
      };

    case actionTypes.SET_RANDOM_INITIAL_BALATAS_FOR_PLAYERS:
      // console.log("player1Balatas", action.player1Balatas);
      // console.log("player2Balatas", action.player2Balatas);
      return {
        ...state,
        allBalatas: action.allBalatas,
        player1Balatas: action.player1Balatas,
        player2Balatas: action.player2Balatas
      };

    case actionTypes.ON_BALATA_CHOSEN:
      return {
        ...state,
        allBalatas: action.allBalatas,
        groundBalatas: action.groundBalatas,
        player1Balatas: action.player1Balatas,
        player2Balatas: action.player2Balatas
      };

    default:
      return state;
  }
};
