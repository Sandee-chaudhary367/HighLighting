import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [text,setText]=useState("Edit ajj and save to reload.Create React App doesnt handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you dont need to know anything about them.When youre ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.")
  let [map,setmap]=useState(new Map());
  let [mtext,setmText]=useState(<>Edit ajj and save to reload.Create React App doesnt handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you dont need to know anything about them.When youre ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about <>Create</> React App from its README and the User Guide.</>)
  let [inr,setinr]=useState(1);
  function highlightRange(range) {
    console.log(range)
    var newNode = document.createElement("span");
    newNode.setAttribute(
       "style",
       "background-color: yellow; display: inline; color:black ; border: solid #0000FF",
    );

    
    console.log(inr)
    newNode.setAttribute("id",inr)
    let a=[...map];
    a.push([inr,window.getSelection().toString()])
    let mm=new Map(a)
    setmap(mm);
    setinr(inr++);
    console.log(inr)
    console.log(map)
    
    range.surroundContents(newNode);
   }

  let handleMouseUp=()=> {
    if(window.getSelection().toString()===""){
        return;
    }
    console.log(`Selected text: ${window.getSelection().toString()}`);
    console.log(window.getSelection());let a=[...map];
    var userSelection = window.getSelection();
    for(var i = 0; i < userSelection.rangeCount; i++) {
        highlightRange(userSelection.getRangeAt(i));
    };
  }

  return (
    <div  className="App" >
      <header className="App-header">
        <div onMouseUp={handleMouseUp}>
        {text}
        </div>
      </header>
    </div>
  );
}

export default App;
