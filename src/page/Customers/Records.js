import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import DataCustomer from '../../components/customers/DataCustomer';
import FormCustomerNewRequest from '../../components/requests/FormCustomerNewRequest';
import FilesListcustomer from '../../components/customers/FilesListcustomer';
import LoanCustomer from '../../components/customers/LoanCustomer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
            
    <div class="pcoded-content">

    <div class="pcoded-inner-content">

        {/* Main-body start */}
        <div className="main-body">
            <div className="page-wrapper">
            {/* Page-header start */}
            <div className="page-header mt-5">
                <div className="page-header-title">
                <h4>Expediente de cliente</h4>
                <span>Módulo para gestionar los datos de cada cliente</span>
                </div>
                <div className="page-header-breadcrumb">
                <ul className="breadcrumb-title">
                    <li className="breadcrumb-item">
                    <a href="index.html">
                        <i className="icofont icofont-user" />
                    </a>
                    </li>
                    <li className="breadcrumb-item"><Link to="/clientes"> Volver a Clientes</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
            {/* Page-header end */}

            {/* Page-body start */}
            <div className="page-body">

                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Datos Personales" {...a11yProps(0)} />
                        <Tab label="Documentos" {...a11yProps(1)} />
                        <Tab label="Préstamos" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <DataCustomer />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FilesListcustomer />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                       <LoanCustomer />
                    </TabPanel>
                </div>

            </div>
            
        </div>
    </div>
    </div>
    </div>
             
  );
}
