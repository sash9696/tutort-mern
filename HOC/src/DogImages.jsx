import React from "react";
import useDogImages from "./useDogImages";
import withLoader from "./withLoader";

function DogImages() {
  //array of sources

  const dogs = useDogImages();
  //we have separated out application logic from the view

  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}

export default withLoader(
    DogImages,
    "https://dog.ceo/api/breed/labrador/images/random/6"
);
