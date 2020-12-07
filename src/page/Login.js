import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

const Login=({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin = ()=>{

        dispatch({
            type:types.login,
            payload:{
                name:"Marvin Toro"
            }
        })

        //history.replace('/clientes')
        history.push('/clientes')
    }
    return (
        
        <div>
            {/* Menu header end */}
            <section className="login header p-fixed d-flex text-center bg-primary common-img-bg">
                {/* Container-fluid starts */}
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    {/* Authentication card start */}
                    <div className="login-card card-block auth-body m-auto">
                        <form className="md-float-material">
                        <div className="text-center">
                            <img src="assets/images/logo.png" alt="logo.png" />
                        </div>
                        <div className="auth-box">
                            <div className="row m-b-20">
                            <div className="col-md-12">
                                <h3 className="text-left txt-primary">Ingresar</h3>
                            </div>
                            </div>
                            <hr />
                            <div className="input-group">
                            <input type="email" className="form-control" placeholder="Usuario" />
                            <span className="md-line" />
                            </div>
                            <div className="input-group">
                            <input type="password" className="form-control" placeholder="Contraseña" />
                            <span className="md-line" />
                            </div>
                           
                            <div className="row m-t-30">
                            <div className="col-md-12">
                                <button onClick={()=>handleLogin()} type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Ingresar</button>
                            </div>
                            </div>
                            <hr />
                            <div className="row">
                            <div className="col-md-10">
                                <p className="text-inverse text-left m-b-0">Bienvenido al Sistema de Prestamos</p>
                                <p className="text-inverse text-left"><b>Credisas-Honduras</b></p>
                            </div>
                            <div className="col-md-2">
                                <img src="assets/images/auth/Logo-small-bottom.png" alt="small-logo.png" />
                            </div>
                            </div>
                        </div>
                        </form>
                        {/* end of form */}
                    </div>
                    {/* Authentication card end */}
                    </div>
                    {/* end of col-sm-12 */}
                </div>
                {/* end of row */}
                </div>
                {/* end of container-fluid */}
            </section>
            <div className="footer bg-inverse">
                <p className="text-center">Copyright © 2020 CREDISAS , All rights reserved.</p>
            </div>
        </div>

    )
}

export default Login
