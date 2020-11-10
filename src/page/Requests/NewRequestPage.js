import React from 'react'

function NewRequestPage() {
    return (
        
    <div className="pcoded-content">
        <div className="pcoded-inner-content">
            {/* Main-body start */}
            <div className="main-body">
            <div className="page-wrapper">
                {/* Page header start */}
                <div className="page-header">
                <div className="page-header-title">
                  {/*   <h4>Registro de Nueva solicitud</h4>
                    <span>Es necesario llenar todos los datos que son obligatorios</span> */}
                </div>
                <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                    <li className="breadcrumb-item">
                        <a href="index.html">
                        <i className="icofont icofont-home" />
                        </a>
                    </li>
                     <li className="breadcrumb-item"><a href="#!">Form Wizard</a> 
                    </li>
                    </ul>
                </div>
                </div>
                {/* Page header end */}
                {/* Page body start */}
                <div className="page-body">
                <div className="row">
                    <div className="col-sm-12">
                    {/* Form wizard with validation card start */}
                    <div className="card">
                        <div className="card-header">
                        <h5>Nueva Solicitud</h5>
                        <span>Es necesario ingresar todos los datos obligatorios</span>
                        <div className="card-header-right">
                            <i className="icofont icofont-rounded-down" />
                            <i className="icofont icofont-refresh" />
                            <i className="icofont icofont-close-circled" />
                        </div>
                        </div>
                        <div className="card-block">
                        <div className="row">
                            <div className="col-md-12">
                            <div id="wizard">
                                <section>
                                <form className="wizard-form" id="example-advanced-form" action="#">
                                    <h3> Clientes </h3>
                                    <fieldset>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="userName-1" className="block">User name *</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="userName-1" name="userName" type="text" className="required form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="email-1" className="block">Email *</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="email-1" name="email" type="email" className="required form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label className="block">Password *</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="password-2" name="password" type="password" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label className="block">Confirm Password *</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="confirm-2" name="confirm" type="password" className="form-control required" />
                                        </div>
                                    </div>
                                    </fieldset>
                                    <h3> Prestamos </h3>
                                    <fieldset>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="name-1" className="block">First name *</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="name-1" name="name" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="surname-1" className="block">Last name *</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="surname-1" name="surname" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="phone-1" className="block">Phone #</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="phone-1" name="phone" type="number" className="form-control required phone" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="date-1" className="block">Date Of Birth</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="date-1" name="Date Of Birth" type="text" className="form-control required date-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">Select Country</div>
                                        <div className="col-sm-8 col-lg-10">
                                        <select className="form-control required">
                                            <option>Select State</option>
                                            <option>Gujarat</option>
                                            <option>Kerala</option>
                                            <option>Manipur</option>
                                            <option>Tripura</option>
                                            <option>Sikkim</option>
                                        </select>
                                        </div>
                                    </div>
                                    </fieldset>
                                    <h3> Referencia y Aval </h3>
                                    <fieldset>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="University-1" className="block">University</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="University-1" name="University" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Country-1" className="block">Country</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Country-1" name="Country" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Degreelevel-1" className="block">Degree level #</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Degreelevel-1" name="Degree level" type="text" className="form-control required phone" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="datejoin-1" className="block">Date Join</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="datejoin-1" name="Date Of Birth" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    </fieldset>
                                    <h3> Garantias </h3>
                                    <fieldset>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Company-1" className="block">Company:</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Company-1" name="Company:" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="CountryW-1" className="block">Country</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="CountryW-1" name="Country" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Position-1" className="block">Position</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Position-1" name="Position" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    </fieldset>
                                </form>
                                </section>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Form wizard with validation card end */}
                    </div>  
                </div>
                </div>
                {/* Page body end */}
            </div>
            </div>
            {/* Main-body end */}
            <div id="styleSelector">
            </div>
        </div>
        </div>

    )
}

export default NewRequestPage
