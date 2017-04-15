import React from 'react';
import ReactDOM from 'react-dom';
import {Splitter, SplitterSide, SplitterContent, Page, Button} from 'react-onsenui';
import Login from './Login'; 

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  show() {
    this.setState({
      isOpen: true
    });
  }

  hide() {
    this.setState({
      isOpen: false
    });
  }

  LoginPage() {


  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side='left'
          collapse={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          isSwipeable={true}>
          <Page>
            Menu content
            <br/>
            <Button onClick={this.LoginPage.bind(this)}>Login</Button>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page>
            <Button onClick={this.show.bind(this)}>Open</Button>
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}