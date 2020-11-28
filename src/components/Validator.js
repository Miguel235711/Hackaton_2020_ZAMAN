export const MailInput_Validation = (value) => {
    
    if(ShortTextInput_Validation(value) && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)) 
        return true;
    return false;
}