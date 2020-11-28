import React, { useState} from "react";

import { 
    ShortTextInput_Validation
} from './Validator';

export function MailInput(props) {
    const [validationMessage, setValidationMessage] = useState('');
    return (
        <div className="sb-input-body">
            <label>
                { props.label }
            </label>
            <input 
                type="text"  
                name = {props.name}
                required
                placeholder= { props.label }
                value={props.value} 
                onKeyPress={ (props.onKeyPress) ? props.onKeyPress : null }
                onChange={ (event) => {
                    if(props.validate) {
                        const valid = ShortTextInput_Validation(event.target.value)
                        if (valid === true) {
                            setValidationMessage('')
                            props.onChange( event.target, true)
                        }
                        else {
                            setValidationMessage('Dirección de correo invalida')
                            props.onChange( event.target, false)
                        }
                    } else {
                        props.onChange( event.target, true)
                    }
                        
                }} />
            <div className="d-flex justify-content-end">
                <small className="form-text text-danger font-italic">{validationMessage}</small>
            </div>
        </div>
    );
}