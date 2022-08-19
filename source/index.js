import "/style/reset.css";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

/*  */
const dom = document.createElement( "div" );

dom.id = "react-root";
document.body.append( dom );

/*  */
const root = ReactDom.createRoot( dom );

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
