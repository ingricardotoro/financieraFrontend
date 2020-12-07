
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'


const PublicRoute = ({isAuthenticated, componente:Component,...rest}) => {
    return (
        <Route {...rest} 
            component = {(props)=> (
                (!isAuthenticated) // en caso de NO estar autenticado
                ? (<Component {...props} />) //props es el mismo rest
                :(<Redirect to="/clientes" />)
            )}
        >
        </Route>
    )
}

PublicRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}

export default PublicRoute
