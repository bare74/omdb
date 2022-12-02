# Getting Started with OMDB API

This project was build widt Typescript React

## Setup

npx create-react-app omdb_api --template typescript

- npm install react-bootstrap bootstrap
- npm i dotenv

Change:

- script: "start": "env-cmd -f .env react-scripts start",

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Search by query`

- http://www.omdbapi.com/?s=ghost //results 1-10
- http://www.omdbapi.com/?s=ghost&page=2 // results 11-20

Returns the first 10 results based on the query value provided as s
Pagination can be added via &page=n, where n is 1-100
Movie Object Structure

- {
  "Title": "Mission: Impossible - Ghost Protocol",
  "Year": "2011",
  "imdbID": "tt1229238",
  "Type": "movie",
  "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
  }

- View movie details by imdbID
- http://www.omdbapi.com/?i=tt1229238
- Using the imdbID provided by the search results will let you fetch the details of a particular movie.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Source reference`

- omdb-react : https://github.com/jogeshpi03
- Pagination : https://github.com/dominicarrojado
- Login - https://codesandbox.io/s/x4h6w?file=/src/App.tsx

### `License`

ISC © {{{ 2022 }}} {{{ Bjørn Are Nielsen }}}
