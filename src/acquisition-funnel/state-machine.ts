import { Machine } from "xstate";
import {
  SELECT_ACTIVITY,
  SUBMIT_ATTENDEE,
  ADD_ATTENDEE,
  ADD_INFO,
  SUBMIT_ADDITIONNAL_INFORMATION,
} from "./types";

export const stateMachine = Machine({
  id: "funnel-state-machine",
  initial: "activity",
  states: {
    activity: {
      on: {
        [SELECT_ACTIVITY]: "register_attendee",
      },
    },
    register_attendee: {
      on: {
        [ADD_ATTENDEE]: "register_attendee",
        [ADD_INFO]: "additional_information",
        [SUBMIT_ATTENDEE]: "payment",
      },
    },
    additional_information: {
      on: {
        [SUBMIT_ADDITIONNAL_INFORMATION]: "payment",
      },
    },
    payment: {
      type: "final",
    },
  },
});

export default stateMachine;
