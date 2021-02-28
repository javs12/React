import React from 'react';
import PropTypes from 'prop-types';

const Expend = ({ expend }) => {
    const { name, quantity } = expend;
    return (
        <li className="gastos">
            <p>
                {name}
                <span className="gasto">${quantity}</span>
            </p>
        </li>
    );
};

Expend.propTypes = {
    expend: PropTypes.object.isRequired
};

export default Expend;
