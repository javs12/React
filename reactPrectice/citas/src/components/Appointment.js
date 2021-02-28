import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, deleteAppointment }) => {
    const { id, pet, owner, date, symptom } = appointment;
    return (
        <div className="cita">
            <p>Mascota: <span>{ pet }</span></p>
            <p>Dueño: <span>{ owner }</span></p>
            <p>Fecha: <span>{ date }</span></p>
            <p>Sintomas: <span>{ symptom }</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => deleteAppointment(id) }
            >
                Eliminar cita
            </button>
        </div>
    );
} 

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;