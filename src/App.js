import './App.css'
import {useContext} from "react";
import {StoreContext} from "./components/store";

function App() {

    const [state, dispatch] = useContext(StoreContext)

    console.log(state)

    return (
        <div style={{padding: 20}}>
            <h1>HEllo bae</h1>
        </div>
    );
}

export default App;