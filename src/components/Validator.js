export const ShortTextInput_Validation = (value) => {
    if(value.length <= 100 && value.length > 0) 
        return true;
    return false;
}