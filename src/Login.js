import React from 'react';
import { Toolbar, Page, Button, Input } from 'react-onsenui';
import Home from './Home';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
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

  render() {
    return (
      <Page>
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
    );
  }
}


