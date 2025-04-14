import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())  
      .then((data) => {
        setDogImage(data.message);  
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);  
      });
  }, []); 

  return (
    <div>
      <h1>Random Dog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

