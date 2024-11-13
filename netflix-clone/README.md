# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









# Netflix Clone Project Documentation

## Step 1: Setup

1. **Create Repository**: 
   - Create a new repository on GitHub and clone it to your local machine.
2. **Create React Application**: 
   - Run the following command to set up the React app:
     ```bash
     npm create vite@latest
     ```
3. **Clean Up**:
   - Remove unnecessary files from the generated project.
4. **Initial Commit**:
   - Create a `<div>` element inside `App.js`, then make an initial commit to test if the app is running.
   - Push the first commit to GitHub.

---

## Project Structure Overview

The Netflix website consists of four main parts:
1. Header
2. Footer
3. Banner
4. Main Section (Rows)

---

## Step 2: Organize Project Structure

### Create Folders Inside `src`
1. **Pages Folder**:
   - Create `Home.jsx` inside `Pages` folder (used to wrap all components).
2. **Components Folder**:
   - Create the following files inside the `Components` folder:
     - `Header/Header.jsx`
     - `Footer/Footer.jsx`

---

## Step 3: Header Section

### Header Component
1. **Create `Header.jsx`**:
   - Implement the header as a functional component.
   - Use `header.css` for styling.

2. **Header Structure**:
   - The header has two parts:
     - **Left Part**: 
       - Contains a `<ul>` with 8 `<li>` elements.
       - Download the Netflix logo and save it in the `assets` folder.
     - **Right Part**:
       - Contains a `<ul>` with 4 `<li>` elements.
       - Use Material UI icons by installing dependencies.

### Install Material Icons
- Run the following command:
  ```bash
  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

Import the following icons in Header.jsx:
SearchIcon
NotificationsNoneIcon
AccountBoxIcon
ArrowDropDownIcon
Fonts
Import fonts from Google Fonts:

css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Lexend:wght@400;500;600;700;800;900&display=swap');
Add these fonts to the CSS root variables:

css
:root {
  --font-base: 'Lexend', sans-serif;
  --font-second-base: 'Lexend', sans-serif;
  --bg-color: #111111;
  --primary-color: #ffffff;
  --secondary-color: #e50914;
}
Commit and Push
Run the following commands:
bash
git add .
git commit -m "Add header and footer components"
git push -u origin main
Step 4: Footer Section
Import Icons:

FacebookOutlinedIcon, InstagramIcon, and YouTubeIcon.
Footer Component:

Add icons, text, and links in the footer.
Style with footer.css.
Step 5: Banner Section
API Setup
TMDb API: Use The Movie Database (TMDb) API to retrieve movie data.

Generate API Key:

Visit https://www.themoviedb.org/settings/api to generate an API key.
Save API Key:

Store the API key in an .env file:
bash
VITE_API_KEY=your_api_key_here
Add .env to .gitignore to keep the key secure.
Axios and Requests
Install Axios:

bash
npm install axios
Create Utility Folder:

In the utils folder, add files for Axios setup and request configurations.
Define API Endpoints:

Define URLs for fetching various movie categories:
fetchTrending
fetchTopRatedMovies
fetchActionMovies, etc.
Step 6: Banner Component
Setup State and Fetch Data:

Create a Banner component.
Define a movie state and setMovie updater function.
Use axios and requests to fetch movie data.
Select Random Movie:

Use Math.random() and Math.floor() to select a random movie from the fetched array.
Example:
javascript
setMovie(
  request.data.results[
    Math.floor(Math.random() * request.data.results.length)
  ]
);
Truncate Description:

Define a truncate function to shorten long descriptions:
javascript
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
Step 7: Rows Section
Create Rows Component:

Create a reusable Rows.jsx component to display movie rows.
Use RowList.jsx to pass different values (title, fetchUrl, isLarge) to Rows.jsx.
Image Rendering:

Use conditional rendering based on isLargeRow:
javascript
src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
Handle Trailer Click:

Implement handleClick(movie) function to show movie trailer.
Handle Movie Trailers
Install Dependencies:

bash
npm install movie-trailer react-youtube
Define handleClick Function:

Use movieTrailer to get the YouTube URL for the movie and extract the video ID.
Final Step: Deployment
Install GitHub Pages:

bash
npm install gh-pages --save-dev
Configure package.json:

Add the following lines:
json
"homepage": "https://<your-username>.github.io/<your-repo-name>/",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
Deploy:

bash
npm run deploy
yaml
Copy code

---

This Markdown file (`README.md`) should now be saved in your project root, and it’s ready for GitHub. Markdown formatting makes it clean and easy to follow on GitHub or other platforms, as well as in VS Code.











