/**
 * created by Ajor on 21-10-2018
*/
//=============================================================================

import React, { Component } from 'react';
import EntryForm from './EntryForm';
import Vertical from './Vertical';
import Horizontal from './Horizontal';
import { connect } from 'react-redux'; 

class Main extends Component {

  componentWillReceiveProps(nextProps){
    console.log(this.props.horizontal)
    console.log(this.props.vertical)
  }
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

  const mapStoreToProps = (store) => {
    return {
      horizontal: store.horizontal,
      vertical: store.vertical
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
  
    }
  }
  
  export default connect(mapStoreToProps, mapDispatchToProps) (Main);