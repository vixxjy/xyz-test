/**
 * created by Ajor on 21-10-2018
*/
//=============================================================================

export default (state = {
    NG_LC:0,
    NG_LC_EXT:0,
    CP_LC:0,
    CP_LC_EXT:0,
    NG_LC_SCREWS:0,
    NG_LC_EXT_SCREWS:0,
    CP_LC_SCREWS:0,
    CP_LC_EXT_SCREWS:0,
    NG_LC_SF:0,
    NG_LC_EXT_SF:0,
    CP_LC_SF:0,
    CP_LC_SF_EXT:0,
    NG_LC_SF_MT:0,
    NG_LC_EXT_SF_MT:0,
    CP_LC_SF_MT:0,
    CP_LC_EXT_SF_MT:0, 
}, action) => {
    switch (action.type) {
        case "COMPUTE_VERTICAL_SUCCESS":
          let response = action.payload;
     
          return {
              NG_LC:response.data.GoldBondCalculation.vertical.national_gypsum.labor_cost_per_square_foot,
              NG_LC_EXT:response.data.GoldBondCalculation.vertical.national_gypsum.extended_labor_cost,
              CP_LC:response.data.GoldBondCalculation.vertical.competitor.labor_cost_per_square_foot,
              CP_LC_EXT:response.data.GoldBondCalculation.vertical.competitor.extended_labor_cost,
              NG_LC_SCREWS:response.data.GoldBondCalculation.vertical.national_gypsum.average_total_screws,
              NG_LC_EXT_SCREWS:response.data.GoldBondCalculation.vertical.national_gypsum.extended_screw_cost,
              CP_LC_SCREWS:response.data.GoldBondCalculation.vertical.competitor.average_total_screws,
              CP_LC_EXT_SCREWS:response.data.GoldBondCalculation.vertical.competitor.extended_screw_cost,
              NG_LC_SF:response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_labor_cost_per_square_foot,
              NG_LC_EXT_SF:response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_extended_labor_cost,
              CP_LC_SF:response.data.GoldBondCalculation.vertical.competitor.spot_fastener_labor_cost_per_square_foot,
              CP_LC_SF_EXT:response.data.GoldBondCalculation.vertical.competitor.spot_fastener_extended_labor_cost,
              NG_LC_SF_MT:response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_material_cost_per_square_foot,
              NG_LC_EXT_SF_MT:response.data.GoldBondCalculation.vertical.national_gypsum.spot_fastener_extended_material_cost,
              CP_LC_SF_MT:response.data.GoldBondCalculation.vertical.competitor.spot_fastener_material_cost_per_square_foot,
              CP_LC_EXT_SF_MT:response.data.GoldBondCalculation.vertical.competitor.spot_fastener_extended_material_cost, 
          };
      default:
        return state
    }
};