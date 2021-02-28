import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {
    const errorMessage = 'El Presupuesto es incorrecto';
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError] = useState(false);

    const defineBudget = (e) => {
        saveQuantity(parseInt(e.target.value, 10));
    };
    const addBudget = (e) => {
        e.preventDefault();
        if (quantity < 1 || Number.isNaN(quantity)) {
            saveError(true);
            return;
        }
        saveError(false);
        saveBudget(quantity);
        saveRemaining(quantity);
        updateQuestion(false);
    };

    return (
        <>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error message={errorMessage} /> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="DEfinir presupuesto"
                />
            </form>
        </>
    );
};

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired,
};

export default Question;
