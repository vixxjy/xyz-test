/**
 * created by Ajor on 21-10-2018
*/
//=============================================================================

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EntryForm from './EntryForm';
import Vertical from './Vertical';
import Horizontal from './Horizontal';
import { connect } from 'react-redux'; 

class Main extends Component {

    render() {
      return (
        <main className="p-5 uk-padding-remove-horizontal">
            <EntryForm/>
            <Vertical data = {this.props.vertical}/>
            <Horizontal data = {this.props.horizontal}/>
        </main>
      );
    }
}

Main.prototypes = {
  horizontal: PropTypes.array.isRequired,
  vertical: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    horizontal: state.horizontal,
    vertical: state.vertical
  }
}
  
export default connect(mapStateToProps, null)(Main);