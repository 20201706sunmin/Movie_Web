import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function UseEffectPractice() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() =>{ //call only once
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  }, [keyword]); //only run when keyword changes (watch the keyword)
  useEffect(() =>{
    console.log("I run when 'counter' changes.");
  }, [counter]); //watch the counter
  useEffect(() =>{
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]); //watch the keyword, counter
  
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
   />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default UseEffectPractice;
/*
import { useState, useEffect } from "react";

function Hello(){
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);
    return <h1>Hello</h1>;

    
    useEffect(function(){
        console.log("hi :)");
        return function(){
            console.log("bye :(");
        }
    }, []);
  }
    
    


        /* clean up function ==

        useEffect(() => {
        console.log("created :)");
        return () => console.log("destroyed :(");
        }, []);

        or

        funtion byFn() {
            console.log("bye :(");
        }
        function hiFn() {
            console.log("created :)");
            return byFn;
        }
        useEffect(hiFn, []);
        return <h1>Hello</h1>;
        */

      /*
      function App(){
          const [showing, setShowing] = useState(false);
          const onClick = () => setShowing((prev) => !prev);
          return (
              <div>
                  {showing ? <Hello /> : null}
                  <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
              </div>
          );
      }
      
      export default App;

*/
