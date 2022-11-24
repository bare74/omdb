# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Inspirert av : https://github.com/jogeshpi03 - omdb-react
Pagination : https://github.com/dominicarrojado - pagination
Login - https://codesandbox.io/s/x4h6w?file=/src/App.tsx

OMDb-Search-Exam
Search the OMDb API

Task Details
Consume the OMDb API to fetch the top 10 results matching your search query (JSON).
Create an interface with at least one input field to be used to search for movies by title.
Present the results in real time and update the interface as the user types his search query.
Once the results are displayed allow the user to click on any particular movie to view its details.
On the movie details view display the plot and other information including the poster image.
Make your code and UI as clean as possible, be creative.
You have five business days from the moment you received the email linking to this repository to complete your task.
Requirements
You can fork this repo or make your own.
Please use ES6, Typescript or ES5. No CoffeeScript.
You must create a SPA.
You can use any version of Angular, React or Vue (alternatively any framework you are most comfortable with).
You can include a package.json or other build tools and processors (Webpack, Babel, SASS tools, etc.).
You can use any CSS framework or make your own styles.
Please provide any install or runtime instructions in the readme.md.
OMDb API Examples
Please note that the OMDb API does not require any form of authentication. See the OMDb API documentation for all supported parameters.

Search by query
http://www.omdbapi.com/?s=ghost //results 1-10
http://www.omdbapi.com/?s=ghost&page=2 // results 11-20
Returns the first 10 results based on the query value provided as s
Pagination can be added via &page=n, where n is 1-100
Movie Object Structure
{
"Title": "Mission: Impossible - Ghost Protocol",
"Year": "2011",
"imdbID": "tt1229238",
"Type": "movie",
"Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
}
View movie details by imdbID
http://www.omdbapi.com/?i=tt1229238
Using the imdbID provided by the search results will let you fetch the details of a particular movie.
Technology
Vue.js
Vue-resource
Bootstrap
Http-server
Glyphicons
Instructions
$ git clone the project

# install the project's dependencies

$ npm install

# run the script to open the web page or open index.html

$ npm start
Author
Mehdi Chekori
Homepage: https://github.com/mehdichekori
Email: mehdichekori@gmail.com
License
MIT
