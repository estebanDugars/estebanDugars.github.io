# Première React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problèmes rencontrés et leurs solutions

Version asynchrone de setState peut être problèmatique (racing condition : statements inversion)

**Todo app** on `page maison`

### `code problèmatique : racing condition avec setState`

```javascript
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const countref = useRef(0);
  const input = useRef();

  const createTodo = (ev) => {
    ev.preventDefault();
    //setTodos((arr) => [...arr, countref.current]); VERSION ASYNCHRONE => inversion "sometimes"
    countref.current += 1; // this here work
    setTodos([...todos, countref.current]); // was happening after next line the second time
    // countref.current += 1; this here doesn't always work
  };

  // ueh snippet for useEffect : CTRL + SHIFT + P command palette THEN snippet
  useEffect(() => {
    
    //countref.current += 1;

    console.log("rendering");
    console.log(todos);
    console.log(countref.current);
  });
```
**explication**

every setState has two version : with a new state OR function, callback

`SOLUTION`

either use the new state version which is in sync
or the callback version with useEffect as an after "inside effect" on the ref.
It is better though when previous state involve or long operation to use async with callback

```javascript
const createTodo = (ev) => {
    ev.preventDefault();

    /* setTodos(todos.push({ id: count.current + 1, txt: input.current.value })); */
    /* setTodos((arr) => [...arr, { id: count.current + 1, txt: input.current.value }]); */
    setTodos((arr) => [...arr, countref.current]);
    //setTodos([...todos, countref.current]);
    //countref.current += 1; //this here doesn't work
  };

  // ueh snippet for useEffect : CTRL + SHIFT + P command palette THEN snippet
  useEffect(() => {
  
    countref.current += 1;

    console.log("rendering");
    console.log(todos);
    console.log(countref.current);
  });
```


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

This section has moved here:

### Analyzing the Bundle Size

This section has moved here:

### Making a Progressive Web App

This section has moved here: 

### Advanced Configuration

This section has moved here: 

### Deployment

This section has moved here:

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
