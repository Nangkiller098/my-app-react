import axios from "axios";
import React, { useEffect, useReducer } from "react";

const inistailstate = {
  loading: false,
  message: "",
  data: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        message: "",
        data: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        message: "Something went wrong",
        data: {},
      };
    default:
      return state;
  }
};
function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, inistailstate);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  });
  return (
    <>
      {state.loading ? "Loadings" : state.data.title}
      {state.message ? "Message" : "Something went wrong"}
    </>
  );
}

export default DataFetchingTwo;
