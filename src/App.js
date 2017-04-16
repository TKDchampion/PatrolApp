import React from 'react';
import ReactDOM from 'react-dom';
import { Splitter, SplitterSide, SplitterContent, Page, Button, Navigator } from 'react-onsenui';
import Home from './Home';
import Login from './Login';

export default class App extends React.Component {

  renderPage(route, navigator) {
    console.log('in render page')
    const props = route.props || {};
    props.navigator = navigator;
    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator initialRoute={{ component: Login }} renderPage={this.renderPage.bind(this)} />
    );
  }
}
