import React, { useEffect, useState } from "react";
import User from "./User";

function Use() {
  const [first, setData] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setData("True");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{first ? <User /> : <h1>Loading...</h1>}</div>;
}

export default Use;

