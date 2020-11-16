import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { Link } from 'react-router-dom';
import FormCustomerNewRequest from '../../components/requests/FormCustomerNewRequest';
import FormLoanNewRequest from '../../components/requests/FormLoanNewRequest';
import FormReferencesNewRequest from '../../components/requests/FormReferencesNewRequest';
import FormWarrantyNewRequest from '../../components/requests/FormWarrantyNewRequest';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  stepperCustomer: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },

}));

function getSteps() {
  return ['Cliente', 'Préstamos', 'Referencias', 'Garantias'];
}

function getStepContent(step) {
  
  switch (step) {
    case 0:
      return <FormCustomerNewRequest />;
    case 1:
      return <FormLoanNewRequest />
    case 2:
      return <FormReferencesNewRequest />
    case 3:
        return <FormWarrantyNewRequest />
    default:
      return 'Etapa Desconocida';
  }
}


export default function NewRequestPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    //return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
    alert("1")
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
<div className="pcoded-content">
  <div className="pcoded-inner-content">
    <div className="main-body">
        <div className="page-wrapper">
        {/* Page-header start */}
        <div className="page-header mt-5">
            <div className="page-header-title">
                <h4>Creación de Nuevas Solicitudes</h4>
                <span>*Es necesario llenar todos los datos que sean obligarorios.</span>
            </div>
            <div className="page-header-breadcrumb">
                <ul className="breadcrumb-title">
                    <li className="breadcrumb-item">
                    <Link to="/solicitudes">
                        <i className="icofont icofont-edit" />
                    </Link>
                    </li>
                    <li className="breadcrumb-item">
                    <Link to="/solicitudes">
                            Ver Solicitudes
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
  
    <div className="page-body">
    <div className="row">
        <div className="col-sm-12">
        {/* Form wizard with validation card start */}
        <div className="card">
            <div className="card-block">
                 <div className={classes.root} >
                    <Stepper activeStep={activeStep} className={classes.stepperCustomer} >
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Opcional</Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                            Has finalizado.
                            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                            Volver
                            </Button>
                        </div>
                        ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Anterior
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSkip}
                                className={classes.button}
                                >
                                Saltar
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Crear Solicitud' : 'Siguiente'}
                            </Button>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
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
