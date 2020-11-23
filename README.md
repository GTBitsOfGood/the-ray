# The Ray Visualization
The Ray has a plethora of data from several years of sustainability research and activities, but does not have a good way to display it. The Ray needs an intuitive, interactive visualization of data across time and category, to aid in soliciting interest from grants, corporations, and the public at large. This webapp intends to fufill that goal through a form of data driven journalism.

## Getting Started
In order to contribute, clone the repository and run `npm install`. 

## Technologies Used
This website is built off of [React](reactjs.org). We also [Nivo](https://nivo.rocks/) for our data visualizations. [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) are used for code formatting, and are enforced with [Husky](https://typicode.github.io/husky/#/) which runs the linters and forces correct code style on commits.

## Project Structure
The public folder holds the base index.html file that our React code is applied. The application exists in `src/` which is split into `components/`, `pages/`, `static/`, and two js files index.js and App.js. Index.js is the root of the application and is simply a wrapper for App.js. App.js contains the code for switching between the PV4EV track and Wheelright track, and imports all the pages. The `pages/` directory contains the the React Components that represent all the different pages for the Wheelright and PV4EV tracks. The `static/` folder contains all the css files and images used for the different pages. Finally the `components/` folder has all the components used to navigate the pages and add animations to them.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />

### `npm run deploy`

Builds the application and deploys it at https://gtbitsofgood.github.io/the-ray/

### Developers

Judah Krug - jkrug7@gatech.edu (Developer)<br />
Colin Tam - ctam31@gatech.edu (Developer)<br />
Rachel Voirin - rvoirin3@gatech.edu (Developer)<br />
Michael Ryan - mryan47@gatech.edu (Developer)<br />
Charlie Luo - cvxluo@gatech.edu (Developer)<br />
Ameya Vitankar - avitankar3@gatech.edu (Developer)<br />