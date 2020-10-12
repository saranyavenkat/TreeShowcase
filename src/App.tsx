import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TreeComponent from './Components/TreeComponent';

class App extends Component<{}, { data: [] }> {
  async getTestData() {
    let response: any = await axios.get('https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json');
    return response.data.trees;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    this.getTestData().then((result: any) => {
      if (result) {
        result.map((tree: any) => {
          tree.showImage = false;
          return result;
        });
        this.setState({ data: result });
      } else {
        this.setState({ data: [] });
      }
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Tree Showcase</h1>
        {this.state && this.state.data.length > 1 &&
          <TreeComponent data={this.state.data} />
        }
      </div>
    );
  }
}

export default App;
