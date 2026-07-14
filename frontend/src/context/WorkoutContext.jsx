import { createContext, useReducer, useState } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

function WorkoutContextProvider({ children }) {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });

  //dispatch({ type: "SET_WORKOUTS", payload: [{}, {}] });
  return (
    <WorkoutsContext.Provider value={{state, dispatch}}>{children}</WorkoutsContext.Provider>
  );
}

export default WorkoutContextProvider;
