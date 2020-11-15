import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userLogo from '../../user.png'
import Axios from 'axios';
import { URL_API } from '../../config/config';

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

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: 'auto',
      marginTop:'10px'
    },
  }));


function FormCustomerNewRequest() {
    const classes = useStyles();
    
    const [customers, setCustomers] = useState([])
    const [value, setValue] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [customValue, setCustomValue] = useState('')

    const [codeCustomer, setCodeCustomer] = useState('')
    const [identidad, setIdentidad] = useState('')
    const [rtn, setRtn] = useState('')
    const [fec_nac, setFec_nac] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [profesion, setProfesion] = useState('')
    const [city, setCity] = useState('')
    const [location, setLocation] = useState('')
 
  useEffect (() => {  
      obtenerClientes()
  }, [])

  const obtenerClientes = async()=>{

      const resp_customers = await Axios.get(URL_API +'/customers')
      setCustomers(resp_customers.data.customers)
  }

  const handleCustomSelect = (event,newValue)=>{
   
        setValue(newValue);
        setCustomValue(newValue._id);
        setCodeCustomer(newValue.codeCustomer)
        setIdentidad(newValue.identidad)
        setRtn(newValue.rtn)
        setFec_nac(newValue.fec_nac)
        setPhone1(newValue.phone1)
        setPhone2(newValue.phone2)
        setEmail1(newValue.email1)
        setEmail2(newValue.email2)
        setProfesion(newValue.profesion)
        setCity(newValue.city)
        setLocation(newValue.location)
   
    console.log(newValue)

  }

    return (
        
        <div className="container">

            <div className="row">

                <div className="col-sm-4 col-md-6">
                    <label htmlfor="free-solo-2-demo" className="block">Nombre de Cliente</label>
                <div >

                <Autocomplete
                    options={customers}
                    value={value}
                    getOptionLabel={(option) => option.name + option.lastname}
                    renderOption={(option) => (
                    <>
                        {option.name} {option.lastname}
                    </>
                    )}
                    onChange={(event, newValue) => {
                        if(newValue!==null){
                            handleCustomSelect(event,newValue)
                            }}
                        }
                        
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    
                    }}
                    renderInput={(params) => (
                        <TextField
                        style={{marginTop:"0px"}}
                        {...params}
                        label="Buscar Cliente"
                        margin="normal"
                        variant="outlined"
                        />                            
                    )}
                />
                  
                </div>
            </div>

                <div className="col-sm-4 col-md-6">
                    <label htmlfor="codeCustomer" className="block">Código de Cliente</label>
                <div >
                    <input value={codeCustomer} disabled name="codeCustomer" type="text" id="codeCustomer" className="required form-control" />
                </div>
            </div>

            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group" >
                        <Avatar alt="Remy Sharp" className={classes.large} src={userLogo} />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-location-arrow"></i></span>
                    <textarea value={location} disabled  name="location" id="location" class="form-control" rows="5" placeholder="Dirección del cliente"></textarea>  
                    </div>
                </div>

            </div>
            
            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Id</span>
                        <input value={identidad} disabled  name="identidad" id="identidad" type="text" className="form-control" placeholder="Número de Identidad" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">RTN</span>
                            <input value={rtn} disabled  name="rtn" id="rtn" type="text" className="form-control" placeholder="Número de RTN"/>
                        </div>
                </div>
            
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span>
                        <input value={phone1} disabled  name="phone1" id="phone1" type="text" className="form-control" placeholder="Número de Teléfono 1" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span>
                        <input value={phone2} disabled  name="phone2" id="phone2" type="text" className="form-control" placeholder="Número de Teléfono 2"/>
                    </div>
                </div>
                
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">@</span>
                        <input value={email1} disabled  name="email1" id="email1" type="email" className="form-control" placeholder="Correo eletrónico 1" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">@</span>
                        <input value={email2} disabled  name="email2" id="email2" type="email" className="form-control" placeholder="Correo electrónico 2"/>
                    </div>
                </div>
                
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-location-pin"></i></span>
                        <input value={city} disabled  name="city" id="city" type="text" className="form-control" placeholder="Localidad del Cliente" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-calendar mr-1"></i> Nacimiento</span>
                        <input value={fec_nac} disabled  name="fec_nac" id="fec_nac" type="text" className="form-control" placeholder="Fecha de Nacimiento"/>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default FormCustomerNewRequest
