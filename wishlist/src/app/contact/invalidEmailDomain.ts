//meka awilla custom validator ekk , meka aithi wenne lesson 6 topic 4 ta

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDomainValidator(hosts : string[]) :ValidatorFn {  //methna Validatorf kiynne 

    return (control : AbstractControl) : ValidationErrors | null =>{

        const value = control.value?.toLowerCase();
    
        if(!value){
            return null;
        }
    
        const matches = hosts.some(host => value.indexOf(`@${host}`) > -1)  //The .some method is an array method in JavaScript that checks if at least one element in the array passes the test implemented by the provided function. It returns a boolean value: true if the callback function returns a truthy value for at least one element in the array, and false otherwise. example ekat meke thiyna ekama blnna etht therenwa 
    
        return matches ? {invalidEmailDomain : true} : null
        
    }
}

