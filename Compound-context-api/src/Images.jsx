import React from "react";
import FlyOutMenu from "./FlyOutMenu";


const sources = [
  "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1709884732294-90379fee354c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
];

function Image({ source }) {
  return (
    <div className="image-item">
      <img src={source} alt="image" />
      <FlyOutMenu />
    </div>
  );
}

export default function ImageList() {
  return sources.map((source, i) => <Image key={i} source={source} />);
}
