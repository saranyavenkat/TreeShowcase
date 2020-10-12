import React, { Component } from 'react';

class TreeComponent extends Component<{data:any}, { data: [] }> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  setShowImage = (index: any) => {
    const temp: any = this.state.data;
    const tree: any = temp[index];
    tree.showImage = !tree.showImage;
    console.log("show" + temp);
    this.setState({ data: temp });
  };

  render() {
    return (
        <div className="row">
          {this.state.data && this.state.data.map((tree: any, index: any) => (
            <div key={index} className="col-5 mt-3" style={{ textAlign: 'center', border: 'solid thin', margin: '5px' }}>
              <h3>{tree.name}</h3>
              <h5><i>{tree.species_name}</i></h5>
              {tree.showImage &&
                <img src={tree.image} alt="tree" width='400px' height='300px' />
              }
              <button className="btn btn-sm btn-primary mt-3 mb-2" onClick={() => this.setShowImage(index)} >{tree.showImage ? 'Hide Image' : 'Show Image'}</button>
            </div>
          ))}
        </div>
    );
  }
}

export default TreeComponent;
