import Content from "./components/Content";
import './App.css'
import {useContext} from "react";
import {ThemeContext} from "./components/ThemeContext";

function App() {
    const context = useContext(ThemeContext)

    return (
        <div style={{padding: 20}}>
            <button onClick={context.toggleTheme}>Toggle</button>
            <Content/>
        </div>
    );
}

export default App;