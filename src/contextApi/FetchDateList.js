import React, { useContext } from "react";
import { DateContext } from "../App";
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
          </tr>
        ))}
      </table>
    </>
  );
};

export default FetchDateList;
