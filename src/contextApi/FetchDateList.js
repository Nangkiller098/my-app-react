import React, { useContext } from "react";
import { DateContext } from "../App";
import FetchDataDetails from "./FetchDataDetails";
const FetchDateList = () => {
  const user = useContext(DateContext);

  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {user.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
            <td></td>
          </tr>
        ))}
      </table>
      {/* <FetchDataDetails data={user.id} /> */}
    </>
  );
};

export default FetchDateList;
