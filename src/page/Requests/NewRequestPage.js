import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import userLogo from '../../avatar.png'
import axios from 'axios';
import { URL_API } from '../../config/config';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: "0 auto"
    },
  }));

function NewRequestPage() {

    
    const [customers, setCustomers] = useState([])
    useEffect(() => {
       
        obtenerClientes()

    }, [])

    const obtenerClientes = async()=>{
      
        const resp_customers = await axios.get(URL_API +'/customers')
        setCustomers(resp_customers.data.customers)
       // console.log("Customer="+JSON.stringify(customers))
        //alert("Listo")
    }

    const classes = useStyles();
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
      ];

    return (
        
    <div className="pcoded-content">
        <div className="pcoded-inner-content">
            {/* Main-body start */}
            <div className="main-body">
            <div className="page-wrapper">
                {/* Page header start */}
                <div className="page-header">
                <div className="page-header-title">
                  {/*   <h4>Registro de Nueva solicitud</h4>
                    <span>Es necesario llenar todos los datos que son obligatorios</span> */}
                </div>
                <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                    <li className="breadcrumb-item">
                        <a href="index.html">
                        <i className="icofont icofont-home" />
                        </a>
                    </li>
                     <li className="breadcrumb-item"><a href="#!">Form Wizard</a> 
                    </li>
                    </ul>
                </div>
                </div>
                {/* Page header end */}
                {/* Page body start */}
                <div className="page-body">
                <div className="row">
                    <div className="col-sm-12">
                    {/* Form wizard with validation card start */}
                    <div className="card">
                        <div className="card-header">
                        <h5>Nueva Solicitud de Prestamo</h5>
                        <span>Es necesario ingresar todos los datos obligatorios</span>
                        <div className="card-header-right">
                            <i className="icofont icofont-rounded-down" />
                            <i className="icofont icofont-refresh" />
                            <i className="icofont icofont-close-circled" />
                        </div>
                        </div>
                        <div className="card-block">
                        <div className="row">
                            <div className="col-md-12">
                            <div id="wizard">
                                <section>

                                {/* <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={customers.map((option) => option.title)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Buscar Cliente"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{ ...params.InputProps, type: 'search' }}
                                    />
                                    )}
                                /> */}

                                <form className="wizard-form" id="example-advanced-form" >
                                    <h3> Clientes </h3>
                                    <fieldset>
                                        
                                    <div className="form-group row">

                                    <div className="col-sm-4 col-md-6">
                                            {/* <label htmlfor="codeCustomer" className="block">Nombre de Cliente</label> */}
                                          
                                            <Autocomplete
                                                id="free-solo-demo"
                                                
                                                label="Buscar Cliente"
                                                options={top100Films.map((option) => option.title)}
                                                renderInput={(params) => (
                                                    <TextField {...params}  margin="normal" variant="outlined" />
                                                )}
                                            />

                                            
                                           
                                        </div>

                                       
                                        <div className="col-sm-4 col-md-6">
                                                <label htmlfor="codeCustomer" className="block">Código de Cliente</label>
                                            <div className="input-group">
                                                <input disabled name="codeCustomer" type="text" id="codeCustomer" className="required form-control" />
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row">

                                    <div className="col-sm-12 col-md-6">
                                        <div className="input-group">
                                            <Avatar alt="Remy Sharp" className={classes.large} src={userLogo} />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="input-group">
                                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-location-arrow"></i></span>
                                        <textarea disabled  name="location" id="location" class="form-control" rows="5" placeholder="Dirección del cliente"></textarea>  
                                        </div>
                                    </div>

                                    </div>


                                    <div className="row">

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">Id</span>
                                                <input disabled  name="name" id="name" type="text" className="form-control" placeholder="Número de Identidad" />
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">RTN</span>
                                                <input disabled  name="lastname" id="lastname" type="text" className="form-control" placeholder="Número de RTN"/>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row">

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span>
                                                <input disabled  name="phone1" id="phone1" type="text" className="form-control" placeholder="Número de Teléfono 1" />
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span>
                                                <input disabled  name="phone2" id="phone2" type="text" className="form-control" placeholder="Número de Teléfono 2"/>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row">

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">@</span>
                                                <input disabled  name="email1" id="email1" type="email" className="form-control" placeholder="Correo eletrónico 1" />
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">@</span>
                                                <input disabled  name="email2" id="email2" type="email" className="form-control" placeholder="Correo electrónico 2"/>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row">

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-location-pin"></i></span>
                                                <input disabled  name="city" id="city" type="text" className="form-control" placeholder="Localidad del Cliente" />
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-calendar mr-1"></i> Nacimiento</span>
                                                <input disabled  name="fec_nac" id="fec_nac" type="text" className="form-control" placeholder="Fecha de Nacimiento"/>
                                            </div>
                                        </div>
                                        
                                    </div>


                                    </fieldset>


                                    {/**SEGUNDA ETAPA************************************************************** */}
                                    {/**SEGUNDA ETAPA************************************************************** */}
                                    {/**SEGUNDA ETAPA************************************************************** */}


                                    <h3> Prestamos </h3>
                                    <fieldset>
                                   
                                    <div className="row">

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-money"></i></span>
                                                <select className="form-control required">
                                                    <option>Tipo de Préstamo</option>
                                                    <option>Fiduciario</option>
                                                    <option>Prendario</option>
                                                    <option>Solidario</option>
                                                    <option>Hipotecario</option>
                                                    <option>Mixto</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">%</span>
                                                <select className="form-control required">
                                                    <option>Tipo de Interes</option>
                                                    <option>Interes Simple</option>
                                                    <option>Interes Compuesto</option>
                                                    <option>Sobre Saldo</option>
                                                    <option>Cuota Nivelada</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">%</span>
                                                <input autoComplete="nope" name="email1" id="email1" type="text" className="form-control" placeholder="Tasa de Interes" />
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row">

                                        
                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">LPS</span>
                                                <input autoComplete="nope" name="email2" id="email2" type="text" className="form-control" placeholder="Monto Solicitado"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                            <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-hour-glass"></i></span>
                                            <select  name="frequency" id="frequency"  class="form-control col-md-12"> 
                                                <option value="opt1">Frecuencia de Pago</option>
                                                <option value="Semanal">Semanal</option>
                                                <option value="Quincenal">Quincenal</option>
                                                <option value="Mensual">Mensual</option>
                                            </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">LPS</span>
                                                <input autoComplete="nope" name="email2" id="email2" type="text" className="form-control" placeholder="Total de Interes"/>
                                            </div>
                                        </div>
                                        
                                    </div>


                                    <div className="row">
                                        
                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-listing-number"></i></span>
                                                <input autoComplete="nope" name="email2" id="email2" type="text" className="form-control" placeholder="Número de Cutoas"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                                <span className="input-group-addon" id="basic-addon1">LPS</span>
                                                <input autoComplete="nope" name="email2" id="email2" type="text" className="form-control" placeholder="Valor de la Cuota"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                            <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-calendar mr-1"></i></span>
                                            <input name="startDate" id="startDate" class="form-control" type="date"/>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        
                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                            <span className="input-group-addon" id="basic-addon1">LPS.</span>
                                            <input className="form-control" name="closingCost" id="closingCost" type="text" placeholder="Costo de Cierre 4%" />
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                            <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-bank-alt"></i> </span> 
                                            <select  name="sucursal" id="sucursal" class="form-control col-md-12"> 
                                                <option value="opt1">Seleccione Sucursal</option>
                                                <option value="Central">Olanchito</option>  
                                                <option value="Valle Alto">La Ceiba</option>
                                            </select> 
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4">
                                            <div className="input-group">
                                            <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-calendar mr-1"></i></span>
                                            <input name="startDate" id="startDate" class="form-control" type="date"/>
                                            </div>
                                        </div>

                                    </div>


                                   
                                    </fieldset>
                                    <h3> Referencia y Aval </h3>
                                    <fieldset>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="University-1" className="block">University</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="University-1" name="University" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Country-1" className="block">Country</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Country-1" name="Country" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Degreelevel-1" className="block">Degree level #</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Degreelevel-1" name="Degree level" type="text" className="form-control required phone" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="datejoin-1" className="block">Date Join</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="datejoin-1" name="Date Of Birth" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    </fieldset>
                                    <h3> Garantias </h3>
                                    <fieldset>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Company-1" className="block">Company:</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Company-1" name="Company:" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="CountryW-1" className="block">Country</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="CountryW-1" name="Country" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-4 col-lg-2">
                                        <label htmlFor="Position-1" className="block">Position</label>
                                        </div>
                                        <div className="col-sm-8 col-lg-10">
                                        <input id="Position-1" name="Position" type="text" className="form-control required" />
                                        </div>
                                    </div>
                                    </fieldset>
                                </form>


                      {/* Select2 start */}
                       

                       <div className="card-block">

                            <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={ top100Films.map((option) => option.title)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Buscar Cliente"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{ ...params.InputProps, type: 'search' }}
                                    />
                                    )}
                                />
                       
                        </div>
                        {/* Select2 end */}
 
                                </section>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Form wizard with validation card end */}
                    </div>  
                </div>
                </div>
                {/* Page body end */}
            </div>
            </div>
            {/* Main-body end */}
            <div id="styleSelector">
            </div>
        </div>
        </div>

    )
}

export default NewRequestPage
