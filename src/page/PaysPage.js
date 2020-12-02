import React from 'react'

export const PaysPage = () => {
    return (
        <div className="pcoded-content">
        <div className="pcoded-inner-content">
            <div className="main-body">
                <div className="page-wrapper">
                    <div className="page-header mt-5">
                        <div className="page-header-title">
                            <h4>Módulo de Registro de Pagos</h4>
                        </div>
                        <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <a href="index.html">
                            <i className="icofont icofont-user" />
                        </a>
                        </li>
                        <li className="breadcrumb-item">Volver a Préstamos
                        </li>
                        
                    </ul>
                    </div>
                           
                    </div>
                        <div className="page-body">
                            {/* Basic table card start */}
                            <div className="card">
                            <div className="card-header vertical">

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                        <div className="widget-profile-card-1">
                                        <div className="bg-layer" />
                                        <img className="img-fluid" src="assets/images/slider/slider8.jpg" alt="card-style-1" />
                                        <button className="btn btn-default btn-outline-default btn-icon b-lft"><i className="icofont icofont-ui-user" /></button>
                                        <button className="btn btn-default btn-outline-default btn-icon b-rgt"><i className="icofont icofont-ui-message" /></button>
                                        <div className="middle-user">
                                            <img className="img-fluid" src="assets/images/widget/user1.png" alt="Profile-user" />
                                        </div>
                                        </div>
                                        <div className="card-block text-center">
                                        <h5>Marvin Ricardo Toro</h5>
                                        <p className="text-muted">Tocoa, Colón</p>
                                        <p className="text-muted">0801198816155</p>
                                        <p className="text-muted">33638260 - 99989596</p>
                                        {/* <button className="btn btn-primary btn-round m-t-10 m-b-20">Contact</button> */}
                                        </div>
                                        <div className="card-footer">
                                        <div className="row text-center">
                                            <div className="col-6 b-r-default">
                                            <h4 className="text-primary">101</h4>
                                            <span className="text-muted text-uppercase">Código</span>
                                            </div>
                                            <div className="col-6">
                                            <h4 className="text-primary">AA</h4>
                                            <span className="text-muted text-uppercase">Categoría</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                    <div className="card-block table-border-style">
                                        <div className="table-responsive">
                                        <table className="table table-hover">
                                            
                                            <tbody>
                                                <tr>
                                                    <th>Préstamo</th>
                                                    <td>Fiduciario</td>
                                                </tr>
                                                <tr>
                                                    <th>Capital</th>
                                                    <td>LPS 30,000.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Tasa Anual</th>
                                                    <td>12%</td>
                                                </tr>
                                                <tr>
                                                    <th>Frecuenia</th>
                                                    <td>Mensualidad</td>
                                                </tr>
                                                <tr>
                                                    <th>Númeor de Coutas</th>
                                                    <td>12 cuotas</td>
                                                </tr>
                                                <tr>
                                                    <th>Valor de Cuota</th>
                                                    <td>LPS 2,900.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Total de Interes</th>
                                                    <td>LPS 3,600.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Costo de Cierre</th>
                                                    <td>LPS 1,200.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Monto Total</th>
                                                    <td>LPS 34,800.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                    <div className="card-block table-border-style">
                                    <h4 style={{textAlign:"center"}}>56% Pagado</h4>
                                    <div className="faq-progress">
                                        <div className="progress">
                                            {/* <span class="faq-text2"></span> */}
                                            <div className="faq-bar2" style={{width: '55%'}} />
                                        </div>
                                    </div>
                                        <div className="table-responsive">
                                        <table className="table table-hover">
                                            
                                            <tbody>
                                                <tr>
                                                    <th>Total Pagado</th>
                                                    <td><strong><p className="text-success"> LPS 16,450.00</p></strong></td>
                                                </tr>
                                                <tr>
                                                    <th>Capital Abonado</th>
                                                    <td>LPS 14,500.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Intereses Abonados</th>
                                                    <td>LPS 1,500.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Mora Abonada</th>
                                                    <td>LPS 450.00</td>
                                                </tr>
                                                <tr>
                                                    <th>Pago Atrasado</th>
                                                    <td><strong><p className="text-danger">LPS 2,900.00</p></strong></td>
                                                </tr>
                                                <tr>
                                                    <th>Otros Pagos</th>
                                                    <td>LPS 00.00</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>

                                        <button style={{width:"100%"}} className="btn btn-success">Registrar Pago</button>

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
    </div>
    )
}


export default PaysPage