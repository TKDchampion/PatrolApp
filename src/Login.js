import React from 'react';
import {
  Button,
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  Splitter,
  SplitterSide,
  SplitterContent,
  List,
  ListItem,
  Input
} from 'react-onsenui';

import Home from './Home';
import Data from './Data';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      username: '',
      password: ''
    }
  }

  openMenu() {
    this.setState({
      isOpen: true
    });
  }

  closeMenu() {
    this.setState({
      isOpen: false
    });
  }

  logout() {
    this.props.navigator.pushPage({component:Login});
  }

  Home() {
    this.props.navigator.pushPage({ component: Home });
  }
  
  Data(){
    this.props.navigator.pushPage({component:Data});
  }

  handleUsernameChange(e) {
    const newState = Object.assign({}, this.state, { username: e.target.value })
    this.setState(newState);
  }

  handlePasswordChange(e) {
    const newState = Object.assign({}, this.state, { password: e.target.value });
    this.setState(newState);
  }

  handleClick() {
    console.log('click login button', this.props)
    this.props.navigator.pushPage({ component: Home });
  }

  renderToolbar() {
    return (

      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.openMenu.bind(this)}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className="center">Login</div>
      </Toolbar>

    );
  }
  render() {
    return (
      <Page>
        <Splitter>
          <SplitterSide
            side="left"
            width={200}
            collapse
            onClose={this.closeMenu.bind(this)}
            onOpen={this.openMenu.bind(this)}
            isOpen={this.state.isOpen}>
            <Page>
              <List>
                <List>Menu</List>
                <ListItem Button>Login</ListItem>
                <ListItem onClick={this.Home.bind(this)}>Home</ListItem>
                <ListItem onClick={this.Data.bind(this)}>Data</ListItem>
                <ListItem onClick={this.logout.bind(this)}>Logout</ListItem>
              </List>
            </Page>
          </SplitterSide>
          <SplitterContent>
            <Page renderToolbar={this.renderToolbar.bind(this)}>
              <section style={{ textAlign: 'center' }}>
                <p>
                  <Input
                    value={this.state.username}
                    onChange={this.handleUsernameChange.bind(this)}
                    modifier='underbar'
                    float
                    placeholder='Username' />
                </p>
                <p>
                  <Input
                    value={this.state.password}
                    onChange={this.handlePasswordChange.bind(this)}
                    modifier='underbar'
                    type='password'
                    float
                    placeholder='Password' />
                </p>
                <p>
                  <Button onClick={this.handleClick.bind(this)}>Sign in</Button>
                </p>
              </section>
            </Page>
          </SplitterContent>
        </Splitter>
      </Page>
    );
  }
}