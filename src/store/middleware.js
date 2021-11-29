import { EVENT } from "../constants/constants";
import { ADD_USER_ACTION } from "./user_actions/reducers";

export const userEventMiddleware = () => (next) => (action) => {
  if (
    action.type === ADD_USER_ACTION &&
    action.event.eventName === EVENT.SELECT && 
    action.event.eventValue.flags !== ''
  ) {
    return;
  }

  return next(action);
};
