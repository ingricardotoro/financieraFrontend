import React from 'react'

function FormWarrantyNewRequest({DataRequest, setDataRequest}) {

    const handleInputChange = ({ target }) => {
        setDataRequest({
            ...DataRequest,
            [target.name]: target.value
        })
    }

    return (
        <div className="container">

            <div className="row">

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Descripción de Garantia</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit mr-1"></i></span>
                        <input type="text" onChange={handleInputChange} value={DataRequest.typeWarranty}  name="typeWarranty" id="typeWarranty" className="form-control col-md-12"/>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Marca</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit mr-1"></i></span>
                        <input value={DataRequest.marca} onChange={handleInputChange}  name="marca" id="marca" type="text" className="form-control" placeholder="Marca de la Garantia"/>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Modelo</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit mr-1"></i></span>
                        <input value={DataRequest.modelo} onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Modelo de la Garantia"/>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Serie</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit mr-1"></i></span>
                            <input value={DataRequest.serie} onChange={handleInputChange}  name="serie" id="serie" type="text" className="form-control" placeholder="Serie de la Garantia"/>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Color</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit mr-1"></i></span>
                        <input value={DataRequest.color} onChange={handleInputChange}  name="color" id="color" type="text" className="form-control" placeholder="Color de la Garantia"/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Año</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit mr-1"></i></span>
                        <input value={DataRequest.anioDeGarantia} onChange={handleInputChange}  name="anioDeGarantia" id="anioDeGarantia" type="text" className="form-control" placeholder="Año de la Garantia"/>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Precio de Compra</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">LPS</span>
                            <input value={DataRequest.precioCompra} onChange={handleInputChange}  name="precioCompra" id="precioCompra" type="text" className="form-control" placeholder="Precio de Compra"/>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Precio den Mercado</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">LPS</span>
                        <input value={DataRequest.precioMercado} onChange={handleInputChange}  name="precioMercado" id="precioMercado" type="text" className="form-control" placeholder="Precio en Mercado"/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Observaciones</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit mr-1"></i></span>
                        <input value={DataRequest.obsDeGarantia} onChange={handleInputChange}  name="obsDeGarantia" id="obsDeGarantia" type="text" className="form-control" placeholder="Observaciones"/>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FormWarrantyNewRequest
