import React, { Component } from 'react';
import { compute } from '../actions';
import { connect } from 'react-redux';

class EntryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calculator_type: 'gold_bond',
            union: true,
            location: "",
            square_footage: "",
            checkedUnion: true,
            checkedNonUnion: false
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleRadioChange = (event) => {
        console.log(event.target)
        if(event.target.id == "one"){
            this.setState({
                union: true,
                checkedUnion: true,
                checkedNonUnion: false
            })
        }
        if(event.target.id == "two"){
            this.setState({
                union: false,
                checkedUnion: false,
                checkedNonUnion: true
            })
        }
        // this.setState({
        //     [event.target.name]: event.target.value
        // });
    }
    
    submit = (e) => {
        console.log(this.state);
        let dataToSend = {
            calculator_type: this.state.calculator_type,
            union: this.state.union,
            location: this.state.location,
            square_footage: this.state.square_footage,
        }
        // this.props.computez(this.state);
        this.props.computez(dataToSend);
    }

    render() {
        return (
            <div className="uk-container uk-padding-remove-horizontal row">
            <div
                    className="uk-card align-items-center w-100 uk-card-default uk-card-body uk-padding-small flex flex-between uk-width-1-1@m">
                <div className="pt-20">
                    <p>
                        Labor type:
                    </p>
                    <div className='switcher'>
                        <div className='switcher-item'>
                            <input id='one' name='switcher'  type='radio' value={this.state.location} checked={this.state.checkedUnion}  onClick={this.handleRadioChange} />
                            <label for='one'>Union</label>
                        </div>
                        <div className='switcher-item'>
                            <input id='two' name='switcher' type='radio' value={this.state.location} checked={this.state.checkedNonUnion} onClick={this.handleRadioChange}/>
                            <label for='two'>Non - Union</label>
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <p>
                        Zip Code(first 3 digits):
                    </p>
                    <div className='uk-form-controls'>
                        <input className="uk-input" type="text" name="location" maxLength="3" placeholder="zip code" value={this.state.location} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="pt-20">
                    <p>
                        Square Footage:
                    </p>
                    <div className='uk-form-controls'>
                        <input className="uk-input" type="text" name="square_footage" placeholder="square Footage" value={this.state.square_footage} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="w-20 uk-text-center pl-50 pt-20">
                    <div>
                        <button onClick = {this.submit} className="btn btn-block uk-button-primary uk-button-rounded">Calculate</button>
                    </div>
                    <p>
                        Square Footage:
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      computez: (data) => dispatch(compute(data)),
    }
    
  }
  
  const mapStoreToProps = (store) => {
    return {
      
    }
  }

export default connect(mapStoreToProps, mapDispatchToProps) (EntryForm);