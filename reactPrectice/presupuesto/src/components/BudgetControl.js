import React from 'react';
import Proptypes from 'prop-types';
import { budgetReview } from '../helpers';

const ControlBudget = ({ budget, remaining }) => (
    <>
        <div className="alert alert-primary">
            presupuesto: ${budget}
        </div>
        <div className={budgetReview(budget, remaining)}>
            Restante: ${remaining}
        </div>
    </>
);

ControlBudget.propTypes = {
    budget: Proptypes.number.isRequired,
    remaining: Proptypes.number.isRequired,
};

export default ControlBudget;
