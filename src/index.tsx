import { createRoot } from 'react-dom/client';
import React from 'react';

function App(){
    return <div>Hello World</div>
};

const el = document.createElement("div");
document.body.appendChild(el);

const root = createRoot(el);

root.render(<App />);