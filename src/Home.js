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

  logout() {
    this.props.navigator.popPage();
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
                <ListItem onClick={this.logout.bind(this)}>Logout</ListItem>
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