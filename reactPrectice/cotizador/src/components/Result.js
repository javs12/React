import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Result = ({ cotizacion }) => {

    return ( 
       (cotizacion === 0 ? <p> llena el formulario </p> 
        : <p>El total es: ${ cotizacion } </p>
        ) 
     );
}
 
export default Result;