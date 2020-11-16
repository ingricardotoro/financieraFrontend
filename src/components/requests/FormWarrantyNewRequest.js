import React from 'react'

function FormWarrantyNewRequest() {

    const handleInputChange = ()=>{

    }
    return (
        <div className="container">

            <div class="row">

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Tipo de Garantia</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-list"></i></span>
                        <select  name="city" id="city" class="form-control col-md-12"> 
                            <option value="opt1">Selecione Tipo de Garantia</option>
                            <option value="1">Articulo Electrónico</option>
                            <option value="2">Articulo Domestico</option>
                            <option value="3">Vehículo Liviano</option>
                            <option value="4">Vehículo Pesado</option>
                            <option value="5">Motocicleta</option>
                            <option value="6">Casa/Apartameto</option>
                            <option value="7">Terreno</option>
                            <option value="8">Joyas</option>
                            <option value="9">Otro</option>
                            
                        </select>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Modelo</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit mr-1"></i></span>
                        <input onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Modelo de la Garantia"/>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                <label htmlFor="">Marca</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit mr-1"></i></span>
                        <input onChange={handleInputChange}  name="email1" id="email1" type="text" className="form-control" placeholder="Marca de la Garantia"/>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Serie</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit mr-1"></i></span>
                            <input onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Serie de la Garantia"/>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Color</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit mr-1"></i></span>
                        <input onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Color de la Garantia"/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Año</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit mr-1"></i></span>
                        <input onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Año de la Garantia"/>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Precio de Compra</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">LPS</span>
                            <input onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Precio de Compra"/>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Precio den Mercado</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">LPS</span>
                        <input onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Precio en Mercado"/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="">Observaciones</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit mr-1"></i></span>
                        <input onChange={handleInputChange}  name="modelo" id="modelo" type="text" className="form-control" placeholder="Observaciones"/>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FormWarrantyNewRequest
