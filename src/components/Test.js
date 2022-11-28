// import React from "react";
// import axios from "axios";

// export default class PersonAdd extends React.Component {
//   state = {
//     title: "",
//   };

//   handleChange = (event) => {
//     this.setState({ title: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const Title = {
//       tilte: this.state.name,
//     };

//     axios
//       .post(`https://www.omdbapi.com/?s=Top%20Gun&apikey=70496c24`, {
//         Title,
//       })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

import { useState } from "react";
import CardDetail from "./CardDetail";

// const searchMovies1 = (searchValue) => {
//     const URL = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
//     return fetch(URL)
//       .then((response) => response.json())
//       .then((data) => data.Search)
//       .catch((error) => {
//         console.error("Error", error);
//         throw error;
//       });
//   };
// };

const useSearchMovies = () => {
  const API_KEY = "70496c24";

  const searchMovies = (searchValue) => {
    const URL = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => data.Search)
      .catch((error) => {
        console.error("Error", error);
        throw error;
      });
  };

  return { searchMovies };
};

const Sandbox = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const { searchMovies } = useSearchMovies();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleInput = async () => {
    console.log("Value of input", search);
    try {
      const movies = await searchMovies(search);
      setMovies(movies);
    } catch (error) {
      // handle error/set any error state/etc...
    }
  };

  return (
    <div>
      <h1>TEST</h1>
      <div>
        <input type="text" value={search} onChange={onChangeHandler} />
        <button onClick={handleInput}>search</button>
      </div>

      <>
        {movies.map(({ id, imdbID, Title }) => (
          <div key={id}>
            {/* <img src={Poster} alt="nice" /> */}
            {imdbID}, {Title}
          </div>
        ))}
      </>
      <CardDetail Title={movies.Title} />
    </div>
  );
};

export default Sandbox;
