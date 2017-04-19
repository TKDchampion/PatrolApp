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
  ListItem
} from 'react-onsenui';
import Login from './Login';
import Data from './Data';

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  openMenu() {
    this.setState({
      isOpen: true
    });
  }

  closeMenu(){
    this.setState({
      isOpen: false
    });
  }

  Logout() {
    this.props.navigator.pushPage({component: Login});
  }

  Login(){
    //console.log('click login button', this.props)
    this.props.navigator.pushPage({ component: Login });
  }

  Data(){
    this.props.navigator.pushPage({component:Data});
  }

  renderToolbar() {
    return (

      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.openMenu.bind(this)}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className="center">Home</div>
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
                <List className="menu">Menu</List>
                <ListItem onClick={this.Login.bind(this)}>Login</ListItem>
                <ListItem Button>Home</ListItem>
                <ListItem onClick={this.Data.bind(this)}>Data</ListItem>
                <ListItem onClick={this.Logout.bind(this)}>Logout</ListItem>
              </List>
            </Page>
          </SplitterSide>
          <SplitterContent>
            <Page renderToolbar={this.renderToolbar.bind(this)}>
              <h1>Wecome to use...<br/>PatrolApp!</h1>
              <p>Please click button on start</p>
              <section style={{margin: '16px',textAlign: 'center'}}>
                <button style={{margin: '6px'}} modifier='large'>start</button>
              </section>
            </Page>
          </SplitterContent>
        </Splitter>
      </Page>
    );
  }
}