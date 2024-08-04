import React, { useEffect, useState } from 'react'

function useDogImages() {

    const [dogs, setDogs] = useState([]);

    console.log('dogs', dogs)
    useEffect(() => {

        async function fetchDogs(){

            const res = await fetch(
                "https://dog.ceo/api/breed/labrador/images/random/6"
            );
            const {message} = await res.json();
            setDogs(message)
        }

        fetchDogs();
    }, [])


  return dogs;
}

export default useDogImages