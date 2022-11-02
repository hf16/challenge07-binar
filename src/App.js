import "./App.css";
import Routes from "./config/Routes/Routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/touch-loader/touchLoader";

import { GoogleOAuthProvider } from "@react-oauth/google";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <>
    <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Routes} />
          </Switch>
        </BrowserRouter>
      </GoogleOAuthProvider>
      </Provider>   

   
    </>
  );
}

export default App;
