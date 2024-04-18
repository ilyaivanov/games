import { createRoot } from "react-dom/client";
import React from "react";

import "./index.scss";

function App() {
    return <div className="foo">Hello World</div>;
}

const el = document.createElement("div");
document.body.appendChild(el);

const root = createRoot(el);

root.render(<App />);
