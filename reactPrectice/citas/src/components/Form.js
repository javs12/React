import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const Form = ({ createAppointment }) => {
  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    symptom: ''
  });

  const [error, updateError] = useState(false)

  const updateState = e => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const submitAppointment = (e) => {
    e.preventDefault();
    if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || symptom.trim() === '' ){
      updateError(true)
      return;
    }
    updateError(false);
    appointment.id = uuid();
    createAppointment(appointment);
    updateAppointment({
      pet: '',
      owner: '',
      date: '',
      symptom: ''
    })

  }

  const { pet, owner, date, symptom } = appointment;

  return (
    <Fragment>
      <h2>Crear citas</h2>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p>
      : null }
      <form
        onSubmit={ submitAppointment }
      >
        <label>Nombre de mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre de mascota"
          onChange={ updateState }
          value={ pet }
        />
        <label>Nombre de dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre de masdueñocota"
          onChange={ updateState }
          value={ owner }
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={ updateState }
          value={ date }
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="symptom"
          onChange={ updateState }
          value={ symptom }
        ></textarea>
        <button 
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}

export default Form;
