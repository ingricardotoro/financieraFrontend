import React from 'react'

function FilesListcustomer() {
    return (

        <div>
            
            <div className="row card-block " style={{ backgroundColor:"aliceblue"}}>
                <form style={{width:"100%"}}>
                    <div className="form-group row">

                        <div className="col-sm-12 col-md-12">
                            <label >Subir Nuevo Archivo</label>
                            <input type="file" className="form-control" />
                        </div>
                                            
                        <div className="col-sm-12 col-md-4">
                            <label >Nombre</label>
                            <input type="text" className="form-control" placeholder="Nombre del Archivo"/>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <label >Descripción</label>
                            <input type="text" className="form-control" placeholder="Descripción del Archivo"/>
                        </div>

                        <div className="col-sm-12 col-md-2 p-1">
                            <label htmlFor="">.</label>
                            <button className="btn btn-success col-sm-12 col-md-12">
                                Subir Archivo
                            </button>
                        </div>
                    </div>
                </form>
            </div>

             <div className="row card-block"> 
                <div className="col-md-12">
                    <ul className="list-view">
                        <li>
                            <div className="card user-card">
                            <div className="card-block">
                                <div className="media">
                                <a className="media-left" href="#">
                                    <img width="30%" src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="Logo Pdf"/>
                                </a>
                                <div className="media-body">
                                    <div className="col-xs-12">
                                    <h6 className="d-inline-block">Tarjeta de identidad</h6>
                                   
                                    </div>
                                    <div className="f-13 text-muted m-b-15">identificación</div>

                                    <div className="f-13 text-muted m-b-15"></div>
                                    <p>fotografia de la tarjeta de identa del cliente</p>
                                    <div className="m-t-15">
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>

                        <li>
                            <div className="card user-card">
                            <div className="card-block">
                                <div className="media">
                                <a className="media-left" href="#">
                                <img width="30%" src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="Logo Pdf"/>

                                </a>
                                <div className="media-body">
                                    <div className="col-xs-12">
                                    <h6 className="d-inline-block">Crokis</h6>
                                   
                                    </div>
                                    <div className="f-13 text-muted m-b-15">Crockis de la Casa</div>
                                    <p>Fotografia de un mapa hecho a mano de la direccion exacta del cliente</p>
                                    <div className="m-t-15">
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default FilesListcustomer
