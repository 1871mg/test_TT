import React from "react";
import { useDispatch } from "react-redux";
import { EVENT } from "../constants/constants";
import { addUserAction } from "../store/user_actions/reducers";

export const withLog = (Component) => {
  
  return (props) => {
    const dispatch = useDispatch();

    const onClick = (e) => {

      const eventName = e.target.dataset.event || EVENT.CLICK;

      console.log("action:", { eventName, eventValue: e.target.value });

      dispatch(
        addUserAction({
          id: new Date().getTime(),
          eventName,
          eventValue: e.target.value,
        })
      );
    };

    return (
      <div onClick={onClick}>
        <Component {...props} />
      </div>
    );
  };
};
