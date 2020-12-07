
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'


const PrivateRoute = ({isAuthenticated, componente:Component,...rest}) => {
    //el rest almacena todas las propiedades del Route , como el location, ver en console
    return (
        <Route {...rest} 
            component = {(props)=> (
                (isAuthenticated) 
                ? (<Component {...props} />) //props es el mismo rest
                :(<Redirect to="login" />)
            )}
        >
        </Route>
    )
}

PrivateRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}

export default PrivateRoute
