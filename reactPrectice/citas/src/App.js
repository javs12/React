import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment'

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointmentList'));
  if(!initialAppointments) {
    initialAppointments = [];
  }
  const [appointmentList, saveAppointment] = useState([]);

  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointmentList'));
    if(initialAppointments) {
      localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
    } else {
      localStorage.setItem('appointmentList', JSON.stringify([]));
    }
  }, [appointmentList])

  const createAppointment = (appointment) => {
    saveAppointment([
      ...appointmentList,
      appointment
    ])
  };

  const  deleteAppointment = (id) => {
    const appointments = appointmentList.filter((appointment) => appointment.id !== id);
    saveAppointment(appointments)
  }

  return (
    <Fragment>
      <h1>Administrador de citas medicas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createAppointment = { createAppointment }
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            { appointmentList.map((appointment) => (
              <Appointment
                key = { appointment.id }
                appointment = { appointment }
                deleteAppointment = { deleteAppointment }
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
