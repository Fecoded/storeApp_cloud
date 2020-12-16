import React from 'react'

const PageContent = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-7">
                <div className="card bg-secondary-gradient">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <h6 className="card-title mb-3">Welcome back Anna!</h6>
                                <p>Get familiar with dashboard, here are some ways to get started.</p>
                                <ul className="mb-3">
                                    <li>Check some stats for your website bellow</li>
                                    <li>Sync content to other devices</li>
                                </ul>
                                <a href="#!" className="btn bg-white">Learn More</a>
                            </div>
                            <div className="col-md-5">
                                <img src="assets/media/svg/undraw_onboarding_o8mv.svg" alt="..." className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title d-flex justify-content-between">
                            <h6 className="card-title">Total Sales By Org Unit</h6>
                            <div>
                                <div className="dropdown">
                                    <a href="#!!" data-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </a>
                                    <span className="dropdown-menu dropdown-menu-right">
                                        <a href="#!!" className="dropdown-item">Report</a>
                                        <a href="#!!" className="dropdown-item">Download</a>
                                        <a href="#!!" className="dropdown-item">Close</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h2 className="mb-3 font-weight-bold">$469,453</h2>
                        <div className="progress mb-3 h-10">
                            <div className="progress-bar w-25 bg-secondary-gradient" role="progressbar"></div>
                            <div className="progress-bar w-50 bg-info-gradient" role="progressbar"></div>
                            <div className="progress-bar w-25 bg-warning-gradient" role="progressbar"></div>
                            <div className="progress-bar w-25 bg-success-gradient" role="progressbar"></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="mb-0">
                                    <span className="fa fa-circle text-danger mr-1"></span>
                                    Hair Tran.
                                </p>
                                <h5 className="mt-2 mb-0">25%</h5>
                            </div>
                            <div className="col">
                                <p className="mb-0">
                                    <span className="fa fa-circle text-info mr-1"></span>
                                    Aesthetic
                                </p>
                                <h5 className="mt-2 mb-0">50%</h5>
                            </div>
                            <div className="col">
                                <p className="mb-0">
                                    <span className="fa fa-circle text-warning mr-1"></span>
                                    Dental
                                </p>
                                <h5 className="mt-2 mb-0">15%</h5>
                            </div>
                            <div className="col">
                                <p className="mb-0">
                                    <span className="fa fa-circle text-success mr-1"></span>
                                    Other
                                </p>
                                <h5 className="mt-2 mb-0">20%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">

            <div className="col-md-12">

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="card-title mb-3">Contacts</h6>
                                        <div className="d-flex d-sm-block d-lg-flex align-items-end">
                                            <h2 className="mb-0 mr-2 font-weight-bold">1.425</h2>
                                            <p className="small text-muted mb-0 line-height-20">
                                                <span className="text-success">+ 5%</span> than last week
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="avatar avatar-lg">
                                            <div className="avatar-title bg-success-bright text-success rounded-circle">
                                                <i className="fa fa-users"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="card-title mb-3">Calls</h6>
                                        <div className="d-flex d-sm-block d-lg-flex align-items-end">
                                            <h2 className="mb-0 mr-2 font-weight-bold">554</h2>
                                            <p className="small text-muted mb-0 line-height-20">
                                                <span className="text-danger">- 2%</span> than last week
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="avatar avatar-lg">
                                            <div className="avatar-title bg-warning-bright text-warning rounded-circle">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="card-title mb-3">Contact Sales</h6>
                                        <div className="d-flex d-sm-block d-lg-flex align-items-end">
                                            <h2 className="mb-0 mr-2 font-weight-bold">900</h2>
                                            <p className="small text-muted mb-0 line-height-20">
                                                <span className="text-success">+ 9%</span> than last week
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="avatar avatar-lg">
                                            <div className="avatar-title bg-info-bright text-info rounded-circle">
                                                <i className="fa fa-money"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title d-flex justify-content-between">
                                    <h6 className="card-title">Sales this Month</h6>
                                    <div>
                                        <a href="#!!" className="mr-3">
                                            <i className="fa fa-refresh"></i>
                                        </a>
                                        <div className="dropdown">
                                            <a href="#!!" data-toggle="dropdown" 
                                               aria-expanded="false">
                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            </a>
                                            <span className="dropdown-menu dropdown-menu-right">
                                                <a href="#!!" className="dropdown-item">Report</a>
                                                <a href="#!!" className="dropdown-item">Download</a>
                                                <a href="#!!" className="dropdown-item">Close</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div id="chart1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title d-flex justify-content-between">
                                    <h6 className="card-title">Contacts Statuses</h6>
                                    <div>
                                        <a href="#!!" className="mr-3">
                                            <i className="fa fa-refresh"></i>
                                        </a>
                                        <div className="dropdown">
                                            <a href="#!!" data-toggle="dropdown" 
                                               aria-expanded="false">
                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            </a>
                                            <span className="dropdown-menu dropdown-menu-right">
                                                <a href="#!!" className="dropdown-item">Report</a>
                                                <a href="#!!" className="dropdown-item">Download</a>
                                                <a href="#!!" className="dropdown-item">Close</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div id="contacts-statuses"></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-md-flex align-items-center justify-content">
                                    <div>
                                        <h5 className="mb-2">Sales Avarage</h5>
                                        <small className="text-success mb-1">
                                            <i className="fa fa-caret-up mr-1"></i> 10% Last week
                                        </small>
                                        <h1 className="mb-0 font-weight-bold">216</h1>
                                    </div>
                                    <div className="ml-5">
                                        <span className="bar-3">2,5,9,6,5,2,4,3,7,5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title d-md-flex align-items-start justify-content-between">
                                    <h6 className="card-title">Your Most Recent Earnings</h6>
                                    <div className="reportrange btn btn-outline-light btn-sm mt-3 mt-md-0">
                                        <i className="ti-calendar mr-2"></i>
                                        <span className="text"></span>
                                        <i className="ti-angle-down ml-2"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-striped mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th className="text-center">Sales Count</th>
                                                    <th className="text-center">Gross Earnings</th>
                                                    <th className="text-center">Tax Withheld</th>
                                                    <th className="text-center">Net Earnings</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>03/15/2018</td>
                                                    <td className="text-center">1,050</td>
                                                    <td className="text-success text-center">+ $32,580.00</td>
                                                    <td className="text-danger text-center">- $3,023.10</td>
                                                    <td className="text-right text-center">$28,670.90</td>
                                                    <td className="text-right">
                                                        <a href="#!!" data-toggle="tooltip" title="Detail">
                                                            <i className="fa fa-external-link"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03/14/2018</td>
                                                    <td className="text-center">780</td>
                                                    <td className="text-success text-center">+ $30,065.10</td>
                                                    <td className="text-danger text-center">- $2,780.00</td>
                                                    <td className="text-right text-center">$26,930.40</td>
                                                    <td className="text-right">
                                                        <a href="#!!" data-toggle="tooltip" title="Detail">
                                                            <i className="fa fa-external-link"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03/13/2018</td>
                                                    <td className="text-center">1.980</td>
                                                    <td className="text-success text-center">+ $30,065.10</td>
                                                    <td className="text-danger text-center">- $2,780.00</td>
                                                    <td className="text-right text-center">$26,930.40</td>
                                                    <td className="text-right">
                                                        <a href="#!!" data-toggle="tooltip" title="Detail">
                                                            <i className="fa fa-external-link"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03/12/2018</td>
                                                    <td className="text-center">300</td>
                                                    <td className="text-success text-center">+ $30,065.10</td>
                                                    <td className="text-danger text-center">- $2,780.00</td>
                                                    <td className="text-right text-center">$26,930.40</td>
                                                    <td className="text-right">
                                                        <a href="#!!" data-toggle="tooltip" title="Detail">
                                                            <i className="fa fa-external-link"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03/11/2018</td>
                                                    <td className="text-center">940</td>
                                                    <td className="text-success text-center">+ $30,065.10</td>
                                                    <td className="text-danger text-center">- $2,780.00</td>
                                                    <td className="text-right text-center">$26,930.40</td>
                                                    <td className="text-right">
                                                        <a href="#!!" data-toggle="tooltip" title="Detail">
                                                            <i className="fa fa-external-link"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <div className="card mb-0">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-block icon-block-floating mr-3 icon-block-lg icon-block-outline-success text-success">
                                                        <i className="fa fa-bar-chart"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-uppercase font-size-11">Gross Earnings</h6>
                                                        <h4 className="mb-0 font-weight-bold">$1.958,104</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card mb-0">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-block icon-block-floating mr-3 icon-block-lg icon-block-outline-danger  text-danger">
                                                        <i className="fa fa-hand-lizard-o"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-uppercase font-size-11">Tax Withheld</h6>
                                                        <h4 className="mb-0 font-weight-bold">$234,769</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card mb-0">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon-block icon-block-floating mr-3 icon-block-lg icon-block-outline-warning text-warning">
                                                        <i className="fa fa-dollar"></i>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-uppercase font-size-11">Net Earnings</h6>
                                                        <h4 className="mb-0 font-weight-bold">$1.608,469</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title d-flex justify-content-between">
                                    <span>Income Distribution</span>
                                    <span className="dropdown">
                                        <a className="btn btn-outline-light btn-sm dropdown-toggle" href="#!"
                                           data-toggle="dropdown">USA</a>
                                        <span className="dropdown-menu dropdown-menu-right">
                                            <a href="#!" className="dropdown-item">USA</a>
                                            <a href="#!" className="dropdown-item">Germany</a>
                                            <a href="#!" className="dropdown-item">France</a>
                                            <a href="#!" className="dropdown-item">Italy</a>
                                        </span>
                                    </span>
                                </h6>
                                <div id="vmap_usa_en" className="h-300"></div>
                                <div className="table-responsive mt-5">
                                    <table className="table table-borderless table-striped mb-0">
                                        <thead>
                                        <tr>
                                            <th className="wd-40">States</th>
                                            <th className="wd-25 text-center">Orders</th>
                                            <th className="wd-35 text-center">Earnings</th>
                                            <th className="wd-35"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>California</td>
                                            <td className="text-center">12,201</td>
                                            <td className="text-center text-success">$150,200.80</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Texas</td>
                                            <td className="text-center">11,950</td>
                                            <td className="text-center text-success">$138,910.20</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Wyoming</td>
                                            <td className="text-center">11,198</td>
                                            <td className="text-center text-danger">$132,050.00</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Florida</td>
                                            <td className="text-center">9,885</td>
                                            <td className="text-center text-success">$127,762.10</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>New York</td>
                                            <td className="text-center">21,198</td>
                                            <td className="text-center text-danger">$432,410.00</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Montana</td>
                                            <td className="text-center">2,885</td>
                                            <td className="text-center text-success">$7,100.00</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Arkansas</td>
                                            <td className="text-center">1,298</td>
                                            <td className="text-center text-success">$2,310.50</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Kansas</td>
                                            <td className="text-center">5,900</td>
                                            <td className="text-center text-danger">$97,500.00</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Colorado</td>
                                            <td className="text-center">15,900</td>
                                            <td className="text-center text-danger">$397,371.32</td>
                                            <td className="text-right">
                                                <a href="#!" data-toggle="tooltip" title="Detail">
                                                    <i className="fa fa-external-link"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h6 className="card-title">Daily Task List</h6>
                                    <div>
                                        <a href="#!" className="mr-3">
                                            <i className="fa fa-refresh"></i>
                                        </a>
                                        <div className="dropdown">
                                            <a href="#!" data-toggle="dropdown" 
                                               aria-expanded="false">
                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            </a>
                                            <span className="dropdown-menu dropdown-menu-right">
                                                <a href="#!" className="dropdown-item">Report</a>
                                                <a href="#!" className="dropdown-item">Download</a>
                                                <a href="#!" className="dropdown-item">Close</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-control custom-checkbox-success custom-checkbox todo-item">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label d-flex justify-content-between"
                                           htmlFor="customCheck1">Talk
                                        to new customers
                                        <span className="text-muted">13 May 2019</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox-success custom-checkbox-success custom-checkbox todo-item">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked/>
                                    <label className="custom-control-label d-flex justify-content-between"
                                           htmlFor="customCheck2">Older
                                        users will be deleted from
                                        the system
                                        <span className="text-muted">20 Apr 2019</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox-success custom-checkbox todo-item">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                    <label className="custom-control-label d-flex justify-content-between"
                                           htmlFor="customCheck3">Assignment
                                        will be
                                        completed
                                        <span className="text-muted">13 May 2019</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox-success custom-checkbox todo-item">
                                    <input type="checkbox" className="custom-control-input" id="customCheck4" defaultChecked/>
                                    <label className="custom-control-label d-flex justify-content-between"
                                           htmlFor="customCheck4">Customer
                                        notes
                                        <span className="text-muted">10 Jan 2018</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox-success custom-checkbox todo-item">
                                    <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                    <label className="custom-control-label d-flex justify-content-between"
                                           htmlFor="customCheck5">Clear
                                        old log records and backup
                                        will be taken
                                        <span className="text-muted">13 May 2019</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox custom-checkbox-success todo-item">
                                    <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                    <label className="custom-control-label d-flex justify-content-between"
                                           htmlFor="customCheck6">Talk
                                        to new customers
                                        <span className="text-muted">27 Feb 2019</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox-success custom-checkbox todo-item">
                                    <input type="checkbox" className="custom-control-input" id="customCheck7" defaultChecked/>
                                    <label className="custom-control-label d-flex justify-content-between"
                                           htmlFor="customCheck7">Older
                                        users will be deleted from
                                        the system
                                        <span className="text-muted">13 May 2019</span>
                                    </label>
                                </div>
                                <form className="mt-4">
                                    <div className="input-group">
                                        <input type="text" className="form-control"
                                               aria-label="Example text with button addon"
                                               placeholder="New task" aria-describedby="button-addon1"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button" id="button-addon1">Add
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Users Assigned to Me</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex align-items-center p-l-r-0">
                                        <div>
                                            <figure className="avatar avatar-state-success m-r-15">
                                                <img src="https://via.placeholder.com/128X128"
                                                     className="rounded-circle" alt="img"/>
                                            </figure>
                                        </div>
                                        <div>
                                            <h6 className="m-b-0">Valentine Maton</h6>
                                            <small className="text-muted">Engineer</small>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="badge badge-danger mr-2 d-sm-inline d-none">Denied</span>
                                            <div className="dropdown">
                                                <a href="#!" data-toggle="dropdown"
                                                   className="btn btn-outline-light btn-sm"
                                                    aria-expanded="false">
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#!" className="dropdown-item">View</a>
                                                    <a href="#!" className="dropdown-item">Send Message</a>
                                                    <a href="#!" className="dropdown-item">Assign</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center p-l-r-0">
                                        <div>
                                            <figure className="avatar avatar-state-success m-r-15">
                                                <img src="https://via.placeholder.com/128X128"
                                                     className="rounded-circle" alt="img"/>
                                            </figure>
                                        </div>
                                        <div>
                                            <h6 className="m-b-0">Holmes Cherryman</h6>
                                            <small className="text-muted">Human resources</small>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="badge badge-success mr-2 d-sm-inline d-none">Completed</span>
                                            <div className="dropdown">
                                                <a href="#!" data-toggle="dropdown"
                                                   className="btn btn-outline-light btn-sm"
                                                    aria-expanded="false">
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#!" className="dropdown-item">View</a>
                                                    <a href="#!" className="dropdown-item">Send Message</a>
                                                    <a href="#!" className="dropdown-item">Assign</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center p-l-r-0">
                                        <div>
                                            <figure className="avatar avatar-state-success m-r-15">
                                                <span className="avatar-title bg-secondary rounded-circle">MH</span>
                                            </figure>
                                        </div>
                                        <div>
                                            <h6 className="m-b-0">Malanie Hanvey</h6>
                                            <small className="text-muted">Real estate agent</small>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="badge badge-warning mr-2 d-sm-inline d-none">Pending</span>
                                            <div className="dropdown">
                                                <a href="#!" data-toggle="dropdown"
                                                   className="btn btn-outline-light btn-sm"
                                                    aria-expanded="false">
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#!" className="dropdown-item">View</a>
                                                    <a href="#!" className="dropdown-item">Send Message</a>
                                                    <a href="#!" className="dropdown-item">Assign</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center p-l-r-0">
                                        <div>
                                            <figure className="avatar avatar-state-success m-r-15">
                                                <img src="https://via.placeholder.com/128X128"
                                                     className="rounded-circle" alt="img"/>
                                            </figure>
                                        </div>
                                        <div>
                                            <h6 className="m-b-0">Kenneth Hune</h6>
                                            <small className="text-muted">Engineer</small>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="badge badge-danger mr-2 d-sm-inline d-none">Denied</span>
                                            <div className="dropdown">
                                                <a href="#!" data-toggle="dropdown"
                                                   className="btn btn-outline-light btn-sm"
                                                    aria-expanded="false">
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#!" className="dropdown-item">View</a>
                                                    <a href="#!" className="dropdown-item">Send Message</a>
                                                    <a href="#!" className="dropdown-item">Assign</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-3 text-center">
                                    <a href="#!">
                                        View All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  
)

export default PageContent