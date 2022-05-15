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
    ev.preventDefault(); // because of onSubmit, not needed when other event like onClick or onEnter
    //(onKeydown with key = enter or whatever)
    
    //setTodos((arr) => [...arr, countref.current]); VERSION ASYNCHRONE => inversion "sometimes"
    countref.current += 1; // this here work
    setTodos([...todos, countref.current]); // was happening after next line the second time
    // countref.current += 1; this here doesn't always work
  };

  // ueh snippet for useEffect : CTRL + SHIFT + P command palette THEN snippet
  useEffect(() => {
    
    //countref.current += 1;

    // triggered unconditionnally so every time a render occur
    console.log("rendering");
    console.log(todos);
    console.log(countref.current);
  });
```
**explication**

every setState has two version : with a new state OR function, callback

`SOLUTION`

~~either use the new state version which is in sync
or the callback version with useEffect as an after "inside effect" on the ref.
It is better though when previous state involve or long operation to use async with callback~~

Wrong! No need for useEffect, just invert setTodos & countref += 1
Then setTodos happen after always, just adjust initial value for countref to -1 to count from 0 for example

In fact, both form of setState:

(NewState, or (c, props) => { c+props.increment } kind of callback) are async

So, its kind of a closure that is called later, make sure all dependencies are above the call to setState.

Said otherwise, **`call setState last`**


```javascript
const createTodo = (ev) => {
    ev.preventDefault();

    countref.current += 1; //this here does work
    setTodos((arr) => [...arr, countref.current]) || setTodos([...todos, countref.current]);
    // useEffect not needed   
  };

 ```
 
## 
 
![](State%20update%20may%20be%20asynchronous.png)

![](State%20updates%20are%20merged.png)

##

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**


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
