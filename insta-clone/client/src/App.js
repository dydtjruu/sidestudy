import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginContainer, PostingContainer } from "./containers";
import{ StoreProvider } from "./context";

function App() {
    return (
        <StoreProvider>
            <Router>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/main" component={PostingContainer} />
            </Router>
        </StoreProvider>
    );
    }

export default App;
