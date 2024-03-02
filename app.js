import React from "react";
import ReactDOM from "react-dom";


//React element 
// let jsx = <h1 id="heading">hi saksham<h1>;
// let jsdd =<h1 id="handling" >Hi saksham</h1>

    

// const root = ReactDOM.createRoot(document.getElementById("root"));

const Comp = ()=>(<h1 id ="hello" className="fun" > Hello Saksham</h1>);

const Comp2 = ()=>(
    <div id="parent">
    <Comp />
    <div id="let"> how are you </div>
    </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Comp2 />);