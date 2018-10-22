export default (state = {
    NG_LC_HR:0,
    NG_LC_HR_EXT: 0,
    CP_LC_HR:0,
    CP_LC_HR_EXT:0,
    // // box 1
    NG_LC_HR_SCREWS:0,
    NG_LC_HR_EXT_SCREWS:0,
    CP_LC_HR_SCREWS:0,
    CP_LC_HR_SCREWS_EXT:0,
    // //box 2
    NG_LC_HR_SF:0,
    NG_LC_HR_SF_EXT:0,
    CP_LC_HR_SF:0,
    CP_LC_HR_SF_EXT:0,
    // // box 3
    NG_LC_HR_SF_MT:0,
    NG_LC_HR_SF_MT_EXT:0,
    CP_LC_HR_SF_MT:0,
    CP_LC_HR_SF_MT_EXT:0,
}, action) => {
  switch(action.type){
    case "COMPUTE_HORIZONTAL_SUCCESS":
      let response = action.payload;
      console.log('horizontal');
      console.log(response.data.GoldBondCalculation.horizontal);
      return {
          // // horizontal
          NG_LC_HR:response.data.GoldBondCalculation.horizontal.national_gypsum.labor_cost_per_square_foot,
          NG_LC_HR_EXT:response.data.GoldBondCalculation.horizontal.national_gypsum.extended_labor_cost,
          CP_LC_HR:response.data.GoldBondCalculation.horizontal.competitor.labor_cost_per_square_foot,
          CP_LC_HR_EXT:response.data.GoldBondCalculation.horizontal.competitor.extended_labor_cost,
          // // box 1
          NG_LC_HR_SCREWS:response.data.GoldBondCalculation.horizontal.national_gypsum.average_total_screws,
          NG_LC_HR_EXT_SCREWS:response.data.GoldBondCalculation.horizontal.national_gypsum.extended_screw_cost,
          CP_LC_HR_SCREWS:response.data.GoldBondCalculation.horizontal.competitor.average_total_screws,
          CP_LC_HR_SCREWS_EXT:response.data.GoldBondCalculation.horizontal.competitor.extended_screw_cost,
          // //box 2
          NG_LC_HR_SF:response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_labor_cost_per_square_foot,
          NG_LC_HR_SF_EXT:response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_extended_labor_cost,
          CP_LC_HR_SF:response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_labor_cost_per_square_foot,
          CP_LC_HR_SF_EXT:response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_extended_labor_cost,
          // // box 3
          NG_LC_HR_SF_MT:response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_material_cost_per_square_foot,
          NG_LC_HR_SF_MT_EXT:response.data.GoldBondCalculation.horizontal.national_gypsum.spot_fastener_extended_material_cost,
          CP_LC_HR_SF_MT:response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_material_cost_per_square_foot,
          CP_LC_HR_SF_MT_EXT:response.data.GoldBondCalculation.horizontal.competitor.spot_fastener_extended_material_cost,
      }
    default:
      return state
    }
};