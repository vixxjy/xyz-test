/**
 * created by Ajor on 21-10-2018
*/
//=============================================================================


import axios from 'axios';
import {COMPUTE_VERTICAL_SUCCESS, COMPUTE_HORIZONTAL_SUCCESS} from "../constants/index";

export const compute = (data) => {
    return (dispatch) => {
      console.log(data);
        axios.post('https://technekes.mockable.io/ngc-calculator-api/calculations', data)
        .then(function (response) {
            console.log(response);
            dispatch({type: COMPUTE_VERTICAL_SUCCESS, payload: response});
            dispatch({type: COMPUTE_HORIZONTAL_SUCCESS, payload: response});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}  