// create.js

import { useState } from "react";

function Create() {
  const [title, setTitle] = useState(''); //useState is used to store data returned from an API and manage the state of the application
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => { //Logging the user implemented data into the console
    e.preventDefault(); // preventDefault prevents this function being called multiple times
    const movie = {title,year,poster};
    console.log(movie);
  }
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}> {/* When button is clicked, handleSubmit function is called*/}
        {/* Movie Title handler*/}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} //onChange recognizes when the button is clicked and invoked the function to log the data
          />
        </div>
        {/* Movie Year handler*/}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>
        {/* Movie Poster handler*/}
        <div className="form-group">
          <label>Add Movie Poster url: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;