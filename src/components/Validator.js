export const ShortTextInput_Validation = (value) => {
    if(value.length <= 100 && value.length > 0) 
        return true;
    return false;
}

export const PasswordInput_Validation = (value) => {
    if( /^([a-zA-Z0-9!@#$%^&*])*$/.test(value)) {
        if(value.length > 5 && value.length <=255)
            return 0;
        return 1;
    }
    return 2;
}

export const NumberInput_Validation = (value) => {
    if( /^([0-9])*$/.test(value)) {
        if(value.length > 0 && value.length <=10)
            return 0;
        return 1;
    }
    return 2;
}

export const MinTextInput_Validation = (value) => {
    if(value.length <= 45 && value.length > 0) 
        return true;
    return false;
}

export const LongTextInput_Validation = (value) => {
    if(value.length <= 1000 && value.length > 0) 
        return true;
    return false;
}

export const MaxTextInput_Validation = (value) => {
    if(value.length <= 65000 && value.length > 0) 
        return true;
    return false;
}

export const TextInput_Validation = (value) => {
    if(value.length <= 255 && value.length > 0) 
        return true;
    return false;
}