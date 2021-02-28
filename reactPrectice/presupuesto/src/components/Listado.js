import React from 'react';
import PropTypes from 'prop-types';
import Expend from './Expend';

const Liztado = ({ expends }) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {expends.map((expend) => (
            <Expend
                key={expend.id}
                expend={expend}
            />
        ))}
    </div>
);

Liztado.propTypes = {
    expends: PropTypes.array.isRequired
};

export default Liztado;
