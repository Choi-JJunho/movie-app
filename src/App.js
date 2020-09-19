import React from 'react';

function Food({name}) {
    return <h1>I like {name}</h1>
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <Food name="kimchi"/>
            <Food name="ramen"/>
            <Food name="teakbbokki"/>
            <Food name="meatsoup"/>

        </div>
    );
}

export default App;
