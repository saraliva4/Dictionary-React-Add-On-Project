import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary() {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setImages(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);

    const apiKey = "02f8a7tad0e0efa9c2364cdececoab3a";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${apiKey}`;
    const imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    axios.get(imagesApiUrl).then(handleImageResponse);
  }

  function handleChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2 className="text-center">
        <em>What word do you want to search for?</em>
      </h2>
      <form className="text-center mt-4 mb-4" onSubmit={search}>
        <input
          id="searchInput"
          type="search"
          className="p-1 shadow rounded-2"
          placeholder="Search for a word..."
          onChange={handleChange}
        />
      </form>
      <Results results={results} />
      <Images images={images} />
    </div>
  );
}
