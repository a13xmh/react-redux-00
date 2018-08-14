import React, { Component } from "react";
import TrendingContainer from "./components/containers/TrendingContainer";
import { Provider } from "react-redux";
import store from "./store";

class AppMain extends Component {
  render() {
    return (
      /*
      //npm install --save react-redux
      //All container components need access to the Redux store so they can subscribe to it
      //Provider, make the store available to all container components in the application (utilizando Context)
      //Context is designed to share data that can be considered “global” 
      //https://reactjs.org/docs/context.html
      */
      <Provider store={store}>
        <TrendingContainer />
      </Provider>
    );
  }
}

export default AppMain;
