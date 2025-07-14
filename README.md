# REACT BASIC

## Information
Author: Thuan Tran Van.     
Date Created: July 14 2025.

## 1. Intruction and Environment
### Topics
1. Components
2. JSX
3. State
4. Forms
5. Events
6. Displaying Data
7. JSON Server
8. Hooks
9. Fetch
10. Router
11. Reducers
12. And More!

### Install
1. Create a repo of the React
```bash
npx create-react-app my-repo
```
2. Move into folder
```bash
cd my-repo
```
3. Run project with yarn or npm
```bash
yarn start or npm start
```
4. Result
![result1](public/result1.png)
![result](public/result.png)

## 2. Project Structure
### Public
1. index.html
Functioning as the principal HTML file of your React application, index.html acts as the entry point for your web application. It contains the foundational HTML structure that is initially displayed in the browser. Typically residing inside public/index.html, this file holds the basic HTML layout, including a element tagged with an id attribute, commonly labeled as ‘root’, where the React application integrates.

2. manifest.json
In a React application, particularly one created with tools like Create React App (CRA), a "manifest" typically refers to the Web App Manifest file, usually named **manifest.json**.     
This JSON file provides metadata about your web application, primarily for Progressive Web App (PWA) features. It allows the browser to present your web application to the user in a way that feels more like a native application.

3. Contains some images for the project
      
![public](public/public.png)


### src
1. index.css
The index.js file acts as the initial point of entry for your React application coded in JavaScript. Within src/index.js, you typically encounter the code responsible for rendering the root component of your application onto the DOM. It imports necessary modules and components, utilizing ReactDOM.render() to render the primary component, often denoted as App, into the root element specified in index.html.

2. App.js
In React, **App.js** typically serves as the root component of your application. It acts as the main container that holds and renders other components, forming the overall structure and layout of your user interface.

3. package.json
The **package.json** file in a React project, like any Node.js project, serves as a manifest file that contains metadata about the project and manages its dependencies and scripts. It is a fundamental part of working with Node Package Manager (npm) or Yarn.

4. gitignore
The **.gitignore** file is a plain text file used in Git repositories to specify intentionally untracked files that Git should ignore. In the context of a React project, it serves to prevent unnecessary or sensitive files from being committed to the version control system.

5. node_modules
In the context of a React project, "Node modules" primarily refers to the **node_modules** directory and the packages it contains. This directory is fundamental to how React projects, and indeed most modern JavaScript projects, manage their dependencies.

6. Webpack and Babel
Webpack in React is a static module bundler that takes all the individual JavaScript files (including React components) and other assets like CSS, images, and fonts, and bundles them into a single file or a few optimized files for deployment.      
Babel is a JavaScript compiler, or more accurately, a transpiler, that plays a crucial role in React development. Its primary function is to transform modern JavaScript code, including JSX (JavaScript XML) syntax used in React, into an older, more widely supported version of JavaScript (typically ES5).   
      
![src](public/src.png)  