import { AbstractControl } from '@angular/forms';

export const maiorQue10 = (control: AbstractControl): any => {
    const invalid = { 'maiorQue10': true };
    const value = control.value;

    if (!value) {
        return null;
    }

    if (value.length <= 10) {
        return {
            maiorQue10: {
                actualLength: value.legth,
                length: true,
            }
        };
    }

    return null;
};
