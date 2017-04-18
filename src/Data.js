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
import Home from './Home';

export default class Data extends React.Component {

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

  Home(){
    this.props.navigator.pushPage({component:Home});
  }

  renderToolbar() {
    return (

      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.openMenu.bind(this)}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className="center">Data</div>
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
                <ListItem onClick={this.Login.bind(this)}>Login</ListItem>
                <ListItem onClick={this.Home.bind(this)}>Home</ListItem>
                <ListItem Button>Data</ListItem>
                <ListItem onClick={this.Logout.bind(this)}>Logout</ListItem>
              </List>
            </Page>
          </SplitterSide>
          <SplitterContent>
            <Page renderToolbar={this.renderToolbar.bind(this)}>This is Home</Page>
          </SplitterContent>
        </Splitter>
      </Page>
    );
  }
}