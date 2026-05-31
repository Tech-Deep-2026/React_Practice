import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const Title = () =>(
    <h1 className='heading' tabIndex="5">
        Namaste React 
    </h1>
);
// Composing 2 cmponents into one another is nothing but component composition.
// React Component - A function that returns jsx code or React Element is called React Component.
const HeadingComponent = () => (
    <div id='container'> 
        {Title()}
        <Title />
        <Title></Title>   
        <h1 className='heading'>
            Namaste React Functional Component
        </h1>
    </div>
);
console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<   HeadingComponent />);

