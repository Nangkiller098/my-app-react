import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [datas, SetDatas] = useState({});
  const [id, setId] = useState(0);
  const [fetchId, setFetchId] = useState(1);

  const handlefetchData = () => {
    setFetchId(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
      .then((res) => {
        SetDatas(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [fetchId]);
  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handlefetchData}>Fetch Data</button>
      <h1>{datas.title}</h1>
      {/* <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>UserId</th>
        </tr>
        {datas.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
            <td>{data.userId}</td>
          </tr>
        ))}
      </table> */}
    </>
  );
};

export default FetchData;
