import React, { useState,useEffect } from "react";

function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <h1>LOADING...</h1>;
    }

    return <Element {...props} data={data} />;
  };
}

export default withLoader;
