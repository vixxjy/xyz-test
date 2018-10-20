import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {
state = {
  calculator_type: 'gold_bond',
  union: true,
  location: "",
  square_footage: ""
}

 handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
 }

 submit = () => {
  console.log(this.state);
    axios.post('https://technekes.mockable.io/ngc-calculator-api/calculations', this.state)
    .then(function (response) {
      console.log(response);
      const
        //vertical  
        NG_LC = response.data.GoldBondCalculation.vertical.national_gypsum.labor_cost_per_square_foot,
        NG_LC_EXT = response.data.GoldBondCalculation.vertical.national_gypsum.extended_labor_cost,
        CP_LC = response.data.GoldBondCalculation.vertical.competitor.labor_cost_per_square_foot,
        CP_LC_EXT = response.data.GoldBondCalculation.vertical.competitor.extended_labor_cost,
        // // box 1
        NG_LC_SCREWS = response.data.GoldBondCalculation.vertical.national_gypsum.average_total_screws,
        NG_LC_EXT_SCREWS = response.data.GoldBondCalculation.vertical.national_gypsum.extended_screw_cost,
        CP_LC_SCREWS = response.data.GoldBondCalculation.vertical.competitor.average_total_screws,
        CP_LC_EXT_SCREWS = response.data.GoldBondCalculation.vertical.competitor.extended_screw_cost,
        // // box 2
        NG_LC_SF = response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_labor_cost_per_square_foot,
        NG_LC_EXT_SF = response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_extended_labor_cost,
        CP_LC_SF = response.data.GoldBondCalculation.vertical.competitor.spot_fastener_labor_cost_per_square_foot,
        CP_LC_SF_EXT = response.data.GoldBondCalculation.vertical.competitor.spot_fastener_extended_labor_cost,
        // // box 3
        NG_LC_SF_MT = response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_material_cost_per_square_foot,
        NG_LC_EXT_SF_MT = response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_extended_material_cost,
        CP_LC_SF_MT = response.data.GoldBondCalculation.vertical.competitor.spot_fastener_material_cost_per_square_foot,
        CP_LC_EXT_SF_MT = response.data.GoldBondCalculation.vertical.competitor.spot_fastener_extended_material_cost, 
        // // box 4
        // // horizontal
        NG_LC_HR = response.data.GoldBondCalculation.horizontal.national_gypsum.labor_cost_per_square_foot,
        NG_LC_HR_EXT = response.data.GoldBondCalculation.horizontal.national_gypsum.extended_labor_cost,
        CP_LC_HR = response.data.GoldBondCalculation.horizontal.competitor.labor_cost_per_square_foot,
        CP_LC_HR_EXT = response.data.GoldBondCalculation.horizontal.competitor.extended_labor_cost,
        // // box 1
        NG_LC_HR_SCREWS = response.data.GoldBondCalculation.horizontal.national_gypsum.average_total_screws,
        NG_LC_HR_EXT_SCREWS = response.data.GoldBondCalculation.horizontal.national_gypsum.extended_screw_cost,
        CP_LC_HR_SCREWS = response.data.GoldBondCalculation.horizontal.competitor.average_total_screws,
        CP_LC_HR_SCREWS_EXT = response.data.GoldBondCalculation.horizontal.competitor.extended_screw_cost,
        // //box 2
        NG_LC_HR_SF = response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_labor_cost_per_square_foot,
        NG_LC_HR_SF_EXT = response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_extended_labor_cost,
        CP_LC_HR_SF = response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_labor_cost_per_square_foot,
        CP_LC_HR_SF_EXT = response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_extended_labor_cost,
        // // box 3
        NG_LC_HR_SF_MT = response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_material_cost_per_square_foot,
        NG_LC_HR_SF_MT_EXT = response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_extended_material_cost,
        CP_LC_HR_SF_MT = response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_material_cost_per_square_foot,
        CP_LC_HR_SF_MT_EXT = response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_extended_material_cost;

      // console.log(LC_NG);
    })
    .catch(function (error) {
      console.log(error);
    });
 }

  render() {
    return (
      <div className="App">
        <div className="toggleButton">
          <button className="union">Union</button>
          <button className="nonunion">Non-union</button>
        </div>
        <input type="text" name="location" placeholder="zip code" value={this.state.location} onChange={this.handleChange}/>
        <input type="text" name="square_footage" placeholder="square Footage" value={this.state.square_footage} onChange={this.handleChange}/>
        <button onClick = {this.submit}>Calculate</button>
      </div>
    );
  }
}

export default Header;