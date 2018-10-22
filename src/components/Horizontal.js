import React, { Component } from 'react';

class Horizontal extends Component {
    state = {  }
    render() {
        const {
            NG_LC_HR,
            NG_LC_HR_EXT,
            CP_LC_HR,
            CP_LC_HR_EXT,
            NG_LC_HR_SCREWS,
            NG_LC_HR_EXT_SCREWS,
            CP_LC_HR_SCREWS,
            CP_LC_HR_SCREWS_EXT,
            NG_LC_HR_SF,
            NG_LC_HR_SF_EXT,
            CP_LC_HR_SF,
            CP_LC_HR_SF_EXT,
            NG_LC_HR_SF_MT,
            NG_LC_HR_SF_MT_EXT,
            CP_LC_HR_SF_MT,
            CP_LC_HR_SF_MT_EXT,
        } = this.props.data;
        return (
            <div className="uk-container uk-margin-medium-top uk-padding-remove-horizontal card-yellow">
            <div className="title-box grey flex align-items-center">
                <h4>
                    Comparison #1: GridMarX (12/12) vs Leading Competitor (8/12)
                </h4>
            </div>
            <div className="overal flex align-items-center">
                <h4>
                    Overall Material and Labor Savings Vertical
                </h4>
                <div className="flex align-items-center w-100 flex">
                    <div className="col text-center">
                        <p>Cost Savings</p>
                        <h2 className="font-weight-bold uk-margin-remove">$66.74</h2>
                    </div>
                    <div className="col text-center">
                        <p>% Savings</p>
                        <h2 className="font-weight-bold  uk-margin-remove">13.20%</h2>
                    </div>
                </div>
            </div>
            <div className="cards-container p-5 flex">
                <div className="col-md-6">
                    <div className="uk-card wid table-card uk-card-default">
                        <div className="table-head flex align-items-center">
                            <h3 className="uk-text-bold">Labor</h3>
                        </div>
                        <div className="uk-card-body">
                            <div className="table">
                                <div className="flex left uk-margin-small-bottom uk-text-center">
                                    <p className="pi uk-text-large">Competitor</p>
                                    <p className="pi uk-text-large">NGC Gridmax</p>
                                </div>
                                <div className="tb-cont">
                                    <div className="uk-grid uk-margin-small-bottom flex text-center">
                                        <p className=" uk-text-large col-md-6">Labor Cost/SF</p>
                                        <p className=" uk-text-large col-md-6">Ext. Labor Cost</p>
                                    </div>
                                    <table className=" w-100" border="1">
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${NG_LC_HR}</td>
                                            <td className="col-md-6">${NG_LC_HR_EXT}</td>
                                        </tr>
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${CP_LC_HR}</td>
                                            <td className="col-md-6">${CP_LC_HR_EXT}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-footer">
                            <div className="flex w-100" uk-grid>
                                <p className="dark w-100">Overall Labor Savings (% / cost)</p>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">14.38%</h2>
                                </div>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">$57.22</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="uk-card wid table-card uk-card-default">
                        <div className="table-head flex align-items-center">
                            <h3 className="uk-text-bold">Screws</h3>
                        </div>
                        <div className="uk-card-body">
                            <div className="table">
                                <div className="flex left uk-margin-small-bottom uk-text-center">
                                    <p className="pi uk-text-large">Competitor</p>
                                    <p className="pi uk-text-large">NGC Gridmax</p>
                                </div>
                                <div className="tb-cont">
                                    <div className="uk-grid uk-margin-small-bottom flex text-center">
                                        <p className=" uk-text-large col-md-6">Labor Cost/SF</p>
                                        <p className=" uk-text-large col-md-6">Ext. Labor Cost</p>
                                    </div>
                                    <table className=" w-100" border="1">
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${NG_LC_HR_SCREWS}</td>
                                            <td className="col-md-6">${NG_LC_HR_EXT_SCREWS}</td>
                                        </tr>
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${CP_LC_HR_SCREWS}</td>
                                            <td className="col-md-6">${CP_LC_HR_SCREWS_EXT}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-footer">
                            <div className="flex w-100" uk-grid>
                                <p className="dark w-100">Overall Labor Savings (% / cost)</p>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">14.38%</h2>
                                </div>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">$57.22</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="uk-card wid table-card uk-card-default">
                        <div className="table-head flex align-items-center">
                            <h3 className="uk-text-bold">Sport Fasteners Labor</h3>
                        </div>
                        <div className="uk-card-body">
                            <div className="table">
                                <div className="flex left uk-margin-small-bottom uk-text-center">
                                    <p className="pi uk-text-large">Competitor</p>
                                    <p className="pi uk-text-large">NGC Gridmax</p>
                                </div>
                                <div className="tb-cont">
                                    <div className="uk-grid uk-margin-small-bottom flex text-center">
                                        <p className=" uk-text-large col-md-6">Labor Cost/SF</p>
                                        <p className=" uk-text-large col-md-6">Ext. Labor Cost</p>
                                    </div>
                                    <table className=" w-100" border="1">
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${NG_LC_HR_SF}</td>
                                            <td className="col-md-6">${NG_LC_HR_SF_EXT}</td>
                                        </tr>
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${CP_LC_HR_SF}</td>
                                            <td className="col-md-6">${CP_LC_HR_SF_EXT}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-footer">
                            <div className="flex w-100" uk-grid>
                                <p className="dark w-100">Overall Labor Savings (% / cost)</p>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">14.38%</h2>
                                </div>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">$57.22</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="uk-card wid table-card uk-card-default">
                        <div className="table-head flex align-items-center">
                            <h3 className="uk-text-bold">Sports Fasteners Material</h3>
                        </div>
                        <div className="uk-card-body">
                            <div className="table">
                                <div className="flex left uk-margin-small-bottom uk-text-center">
                                     <p className="pi uk-text-large">Competitor</p>
                                    <p className="pi uk-text-large">NGC Gridmax</p>
                                </div>
                                <div className="tb-cont">
                                    <div className="uk-grid uk-margin-small-bottom flex text-center">
                                        <p className=" uk-text-large col-md-6">Labor Cost/SF</p>
                                        <p className=" uk-text-large col-md-6">Ext. Labor Cost</p>
                                    </div>
                                    <table className=" w-100" border="1">
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${NG_LC_HR_SF_MT}</td>
                                            <td className="col-md-6">${NG_LC_HR_SF_MT_EXT}</td>
                                        </tr>
                                        <tr className="flex uk-grid-collapse w-100">
                                            <td className="col-md-6">${CP_LC_HR_SF_MT}</td>
                                            <td className="col-md-6">${CP_LC_HR_SF_MT_EXT}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-footer">
                            <div className="flex w-100" uk-grid>
                                <p className="dark w-100">Overall Labor Savings (% / cost)</p>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">14.38%</h2>
                                </div>
                                <div className="text-center mt-3 col-md-6">
                                    <h2 className="uk-text-bold uk-margin-remove">$57.22</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Horizontal;