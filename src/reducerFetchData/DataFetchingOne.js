import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataFetchingOne() {
  const [loadings, setLoadings] = useState(false);
  const [message, setMessage] = useState("");
  const [posts, setPost] = useState({});

  useEffect(() => {
    setLoadings(true);
    axios("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoadings(false);
        setPost(res.data);
        setMessage("");
      })
      .catch((err) => {
        setLoadings(false);
        setMessage(err.message);
        console.log(message);
      });
  }, [message]);
  return (
    <div>
      {loadings ? "Loadings" : posts.title}
      {message ? "Message" : "Something went wrong"}
    </div>
  );
}
