import React from "react";
import { useState, createContext, useContext } from "react";

const CountContext = createContext();

function CountProvider ( property ) {

    const value = useState( 0 );

    return <CountContext.Provider value={ value } { ... property }/>;

}

function Counter () {

    const [ count, setCount ] = useContext( CountContext );

    return <button onClick={ _ => setCount( count + 1 ) }>{ count }</button>;

}

function App () {

    return (
        <CountProvider>
            <Counter/>
        </CountProvider>
    );

}

export default App;
