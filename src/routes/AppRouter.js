import React, { useContext } from 'react';

import {BrowserRouter as Router, Switch} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from "../page/Login";

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import StackRoutes from './StackRoutes';


export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    
    return (
        <Router>
            <>        
                {user.logged ? <Navbar /> : null }
                {user.logged ? <Sidebar /> : null }    

                <Switch>
                    <PublicRoute isAuthenticated={user.logged} exact path="/login" component={Login} />
                    <PrivateRoute isAuthenticated={user.logged} path="/" component={StackRoutes} /> 
                </Switch>
            </>
        </Router>
    )
}
