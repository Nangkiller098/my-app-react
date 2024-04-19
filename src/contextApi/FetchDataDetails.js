import React from "react";

const FetchDataDetails = (data) => {
  return (
    <>
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    </>
  );
};

export default FetchDataDetails;
