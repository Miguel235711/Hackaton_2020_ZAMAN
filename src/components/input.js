import React, { useState, Component} from "react";
import Autosuggest from 'react-autosuggest';

import { 
    ShortTextInput_Validation
} from './Validator';

export function MailInput(props) {
    const [validationMessage, setValidationMessage] = useState('');
    return (
        <div className="input-body">
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

export function DropdownEstaciones(props) {
    return (
        <div className="my-4">
            <select 
                className="btn-1 w-100"
                value={props.value}
                name={props.name} 
                onChange={(event) => props.onChange( event.target ) } 
            >
                <option value={props.name}>{props.label}</option>
                { (props.options) ? props.options.map((option, key) => (
                    <option key={key} value={option.NumeroEstacion}>{option.NumeroEstacion + ' en ' + option.Localidad}</option>
                )): ''}
            </select>
        </div>
    )
}

export function DropdownCamaras(props) {
    return (
        <div className="my-4">
            <select 
                className="btn-1 w-100"
                value={props.value}
                name={props.name} 
                onChange={(event) => props.onChange( event.target ) } 
            >
                <option value={props.name}>{props.label}</option>
                { (props.options) ? props.options.map((option, key) => (
                    <option key={key} value={key}>{option.Marca + ' ' + option.Modelo + ' en ' + option.GeoPunto.Latitud + option.GeoPunto.Longitud}</option>
                )): ''}
            </select>
        </div>
    )
}

export class AutosuggestInput extends Component {
    constructor(props) {
        super();
        this.state = {
            value: '',
            suggestions: []
        }
    }

    

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      if( this.props.items ) 
            return inputLength === 0 ? [] : this.props.items.filter(item =>
                item.toLowerCase().slice(0, inputLength) === inputValue
            );
        return []
    };
    
    getSuggestionValue = suggestion => suggestion;
    
    renderSuggestion = suggestion => (
        <span>{suggestion}</span>
    );

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        })
        this.props.onChange({name: this.props.name, value: newValue})
    }

    onSuggestionsFetchRequested  = ({value}) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        })
    }

    render() {
        const {suggestions} = this.state

        const inputProps = {
            placeholder: this.props.label,
            value: this.props.value,
            onChange: this.onChange
          };
        return(
            <div className="sb-input-body">
                <label>
                    {this.props.label}
                </label>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
            </div>
        )
    }
}