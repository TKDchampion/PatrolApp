import React from 'react';

import { Toolbar, Page, Button, Input, Splitter, SplitterSide, SplitterContent } from 'react-onsenui';

export default class Login extends React.Component {

  constructor(){
    super();
    this.state = {
      leftOpen: false
    };
    this.openLeft = this.openLeft.bind(this);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  openLeft (){
    this.setState({
      leftOpen: true
    });
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          isOpen={this.state.leftOpen}
          collapse={true}
          side="left"
          width={200}
          isSwipeable={false}>
          <Page> Page Left </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <Button onClick={this.openLeft} > Click Me </Button>
            <p>
              <label className="qqq">username:</label>
              <Input type="text" modifier='underbar' />
            </p>
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}


