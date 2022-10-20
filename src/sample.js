function highlightRange(range) {
    console.log(range)
    var newNode = document.createElement("span");
    newNode.setAttribute(
       "style",
       "background-color: yellow; display: inline; color:black ; border: solid #0000FF",
    );

    newNode.setAttribute("id","32")
    
    range.surroundContents(newNode);
   }

  let handleMouseUp=()=> {
    if(window.getSelection().toString()===""){
        return;
    }
    console.log(`Selected text: ${window.getSelection().toString()}`);
    console.log(window.getSelection());
    var userSelection = window.getSelection();
    for(var i = 0; i < userSelection.rangeCount; i++) {
        highlightRange(userSelection.getRangeAt(i));
    };
  }


  Edit ajj and save to reload.Create React App doesnt handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you dont need to know anything about them.
  When youre ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.

  {text.split("").map((a,i)=>{
    if(map.has(i)){
      console.log(i)
      let t=text.slice(i,map.get(i));
      i=i+map.get(i);
      return <><span>{t}</span></>
    }else{
      return a;
    }
  })}