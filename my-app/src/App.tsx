import React from 'react';
import { SharedComponent } from './my-lib/SharedComponent';

function App() {
    return (
        <>
            <h1>React application</h1>
            <div>Bellow shared component:</div>
            <SharedComponent />
        </>
    );
}

export default App;
