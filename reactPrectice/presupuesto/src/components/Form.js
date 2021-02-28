import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error from './Error';


const Form = ({ saveExpend, saveCreatedExpend }) => {
    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError] = useState(false);
    const message = 'Error al ingresar el gasto';

    const addExpenditure = (e) => {
        e.preventDefault();
        if (quantity < 1 || Number.isNaN(quantity) || name.trim() === '') {
            saveError(true);
        }
        saveError(false);

        const expend = {
            name,
            quantity,
            id: shortid.generate(),
        };
        saveExpend(expend);
        saveCreatedExpend(true);
        saveName('');
        saveQuantity(0);
    };
    return (
        <form
            onSubmit={addExpenditure}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error
                ? <Error message={message} />
                : null}
            <div className="campo">
                <label>Nombre de Gastos</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={(e) => saveName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad de Gastos</label>
                <input
                    type="Number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={quantity}
                    onChange={(e) => saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
};

Form.propTypes = {
    saveExpend: PropTypes.func.isRequired,
    saveCreatedExpend: PropTypes.func.isRequired,
};

export default Form;
