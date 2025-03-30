import React from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./src/Components/Heading";
import { Body } from "./src/Components/Body";

const App  = () => {
    return (
        <div>
            <Heading/>
            <Body />
        </div>
        
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);
