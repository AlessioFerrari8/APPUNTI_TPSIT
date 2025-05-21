# REACT

<small>Data: 21/05/2025</small>  <small>Autore: **Ferro_32**</small>

✅ Topics Covered
- How to create a project with Vite
- Scaffholding 
- Node.js 
- JSON 
- How React works conceptually
- Explain the role and functionality of each file created with npm create vite@latest
- AppendChild and createElement
- Virtual DOM

## ⚡Vite
- Vite is a modern **build tool** and development server that allows you to create web applications in a simple, fast, and modular way.
- It is a modern alternative to tools like Create React App (CRA), Webpack, or Parcel.
- It uses native ES Modules (ESM) in the browser and requires minimal configuration to get started.

## 🚀 Why use Vite?
- Instant startup: No initial bundling needed.
- Blazing fast Hot Module Replacement (**HMR**): Only reloads updated modules without a full page refresh.
- Optimized production build using Rollup under the hood.
- First-class support for modern frameworks such as React, Vue, Svelte, Preact, Lit, etc.
- Extensible with plugins, including Rollup plugins.
- Faster and leaner compared to older tools like Create React App.

##

## JSON
- JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
- It is language-independent and widely used for data exchange between a server and a web application.
- JSON is often used in APIs to send and receive data.
- It does not support comments
- JSONC (JSON with Comments) is a variant of JSON that allows comments, but it is not a standard format and may not be supported by all parsers.

### JSON Syntax
- JSON data is represented as key-value pairs enclosed in curly braces `{}`.
- Keys must be strings enclosed in double quotes `""`.
- Values can be strings, numbers, booleans, arrays, objects, or null.
- Arrays are ordered lists of values enclosed in square brackets `[]`.
- We have always to end with a comma `,`
- JSON supports the following data types:
  - String: `"Hello, World!"`
  - Number: `42`
  - Boolean: `true` or `false`
  - Array: `[1, 2, 3]`
  - Object: `{"key": "value"}`
  - Null: `null`

### JSON Parts
- The fist part contains information about the project, such as the name, version, and description.
- devDependencies: These are packages that are only needed during development and testing, such as testing libraries or build tools (eslint).

### Types are made of devDependencies
- This means that when we use typescript, we need to convert the code to javascript.
- This is done by using the command `tsc` (TypeScript Compiler) to compile TypeScript code into JavaScript code.
- Usually it's transpiled automatically when we run the project.

### Libraries
- There are two libraries
    - React: A JavaScript library for building user interfaces.
    - ReactDOM: A library that provides DOM-specific methods for React.

### npm run dev vs npm run build
- `npm run dev`: This command starts the development server and allows you to see your changes in real-time.
- `npm run build`: This command creates an optimized production build of your application, which can be deployed to a web server.

## How React works conceptually
- React is a JavaScript library for building user interfaces by breaking the UI into reusable components. Conceptually, it works like this:
- You define components, which are pieces of UI logic and structure.
- Each component returns JSX (a syntax extension that looks like HTML) describing what the UI should look like.
- React uses a virtual DOM (a lightweight copy of the real DOM) to efficiently update the UI by comparing changes and applying only the necessary updates.
- When the state or props of a component change, React re-renders that component and updates the DOM accordingly, keeping the UI in sync with your data.

## Explain the role and functionality of each file created with npm create vite@latest
- `index.html`  
  The main HTML file that loads your app. It contains the root div where React injects the UI.
- `src/main.jsx`  
  The entry point for React. This file renders the React app by attaching the root component (App.jsx) to the DOM.
- `src/App.jsx`  
  The main React component that serves as the root of your component tree. You build your app's UI starting here.
- `src/assets/`  
  Folder for static files like images, fonts, or styles you want to include in your project.
- `package.json`  
  Manages project dependencies, scripts, and configuration for your Node.js environment.
- `vite.config.js (or .ts)`  
  Configuration file for Vite, specifying how the build process should work.

## AppendChild and createElement
- `appendChild` is a method used to add a new child element to a parent element in the DOM.
- `createElement` is a method used to create a new HTML element in JavaScript.
- `createTextNode` is a method used to create a new text node in JavaScript.

## Virtual DOM
- The Virtual DOM is a lightweight representation of the actual DOM.
- React uses the Virtual DOM to optimize updates to the real DOM.
- When a component's state or props change, React creates a new Virtual DOM tree and compares it to the previous one.
- This process is called "reconciliation."
