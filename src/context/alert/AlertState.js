import { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import axios from "axios";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
