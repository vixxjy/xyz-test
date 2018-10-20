import React, { Component } from 'react';


class GridBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>1</div><div>2</div>
        </div>
        <div className="row">
          <div>3</div><div>4</div>
        </div>
      </div>
    );
  }
}

export default GridBox;
