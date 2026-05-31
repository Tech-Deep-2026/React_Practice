import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element
const heading = (
    <h1 className='heading' tabIndex="5">
        Namaste React
    </h1>
);

//React Component - A function that returns jsx code or React Element is called React Component.
const HeadingComponent = () => (
    <div id='container'>
        <h1 className='heading'>
            Namaste React Functional Component
        </h1>
    </div>
);
console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

