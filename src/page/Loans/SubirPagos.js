import React from 'react';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import axios from 'axios';

import { useState } from 'react';
import { URL_API } from '../../config/config';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SubirPagos() {
  const [uploadPagos, setUploadPagos] = useState({ cols: '', rows: '' });

  //funcion para la carga de excel de nuevos clientes
  const handleUploadCustomers = async (e) => {
    e.preventDefault();

    await axios
      .post(URL_API + '/payments/uploadfile', uploadPagos)
      .then((data) => {
        //console.log("Datos Guardados." + JSON.stringify(data))
        if (data.data.ok === true) {
          toast.success('Los datos se han Ingreso Exitosamente');
          setUploadPagos({
            cols: '',
            rows: '',
          });
          //console.log('LISTO!!!');
          //setReload(!reload)
          //document.getElementById("closeModal").click();
        } else {
          return toast.error('Error Ingresando los datos');

          //alert('Error al Subir PAGOS');
        }
      });
  };

  //funcion para subir excel de clientes
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setUploadPagos({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body">
          <div className="page-wrapper">
            {/* Page-header start */}
            <div className="page-header mt-5">
              <div className="page-header-title">
                <h4>Cargar Pagos Via Excel</h4>
                <span>Módulo para Ingresar nuevos pagos via Excel</span>
              </div>
              <div className="page-header-breadcrumb">
                <ul className="breadcrumb-title">
                  <li className="breadcrumb-item">
                    <i className="icofont icofont-user" />
                  </li>
                  <li className="breadcrumb-item"> Subir Pagos</li>
                </ul>
              </div>
            </div>
            {/* Page-header end */}

            {/* Page-body start */}
            <div className="page-body">
              <div className="card">
                <div className="card-header">
                  <div className="card-block table-border-style">
                    <div className="table-responsive">
                      <form
                        onSubmit={handleUploadCustomers}
                        style={{ width: '95%' }}
                      >
                        <div className="row">
                          <div className="col-sm-12 col-md-9">
                            <input
                              className="form-control"
                              type="file"
                              onChange={fileHandler}
                              style={{ padding: '10px' }}
                            />
                          </div>

                          <div className="col-sm-12 col-md-3">
                            <button
                              type="submit"
                              onClick={handleUploadCustomers}
                              className="btn btn-success"
                            >
                              Subir Archivo
                            </button>
                          </div>
                          {uploadPagos.rows === '' ? null : (
                            <OutTable
                              className="table table-responsive"
                              data={uploadPagos.rows}
                              columns={uploadPagos.cols}
                              tableClassName="table table-responsive"
                              tableHeaderRowClass="heading"
                            />
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubirPagos;
