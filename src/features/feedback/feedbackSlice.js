import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";


const initialState = {
  feedbackArray: []
 
};
export const postFeedback = createAsyncThunk(
  "feedback/postFeedback",
  async(feedback, { dispatch }) => {
    const response = await fetch(baseUrl + "feedback", {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    dispatch(addFeedback(data));
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      console.log("addFeedback action.payload:", action.payload);
      console.log("addFeedback state.feedbackArray:", state.feedbackArray);
      const newFeedback = {
        id: state.feedbackArray.length + 1,
        ...action.payload,
      };
      state.feedbackArray.push(newFeedback);
    },
  }
})

export  const feedbackReducer = feedbackSlice.reducers;
export  const addFeedback = feedbackSlice.action;

