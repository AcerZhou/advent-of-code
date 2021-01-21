import { readInput } from './input';

const llstOfRequiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

export const partOne = (input) => {
    let numberOfInValidPassport: number = 0;

    input.forEach(entry => {
        for (let i = 0; i < llstOfRequiredFields.length; i++) {
            const requiredField = llstOfRequiredFields[i];

            if (!entry[requiredField]) {
                numberOfInValidPassport++;
                break;
            }
        };
    });

    return input.length - numberOfInValidPassport;
};

export const partTwo = (input) => {
    let numberOfInValidPassport: number = 0;

    input.forEach(entry => {
        for (let i = 0; i < llstOfRequiredFields.length; i++) {
            const requiredField = llstOfRequiredFields[i];
            if (!entry[requiredField]) {
                numberOfInValidPassport++;
                break;
            } else {
                if (requiredField === 'byr' && !IsByrValid(entry[requiredField])) {
                    numberOfInValidPassport++;
                    break;
                }

                if (requiredField === 'iyr' && !IsIyrValid(entry[requiredField])) {

                    numberOfInValidPassport++;
                    break;
                }

                if (requiredField === 'eyr' && !IsEyrValid(entry[requiredField])) {

                    numberOfInValidPassport++;
                    break;
                }


                if (requiredField === 'hgt' && !IsHgtValid(entry[requiredField])) {

                    numberOfInValidPassport++;
                    break;
                }

                if (requiredField === 'hcl' && !IsHclValid(entry[requiredField])) {

                    numberOfInValidPassport++;
                    break;
                }

                if (requiredField === 'ecl' && !IsEclValid(entry[requiredField])) {

                    numberOfInValidPassport++;
                    break;
                }

                if (requiredField === 'pid' && !IsPidValid(entry[requiredField])) {

                    numberOfInValidPassport++;
                    break;
                }
            }
        };
    });

    return input.length - numberOfInValidPassport;
};

const IsByrValid = (byr) => {
    return byr <= 2002 && byr >= 1920;
}


const IsIyrValid = (iyr) => {
    return iyr <= 2020 && iyr >= 2010;
}


const IsEyrValid = (eyr) => {
    return eyr <= 2030 && eyr >= 2020;
}


const IsHgtValid = (hgt) => {
    if (hgt.indexOf('cm') !== -1 && hgt.slice(0, -2) <= 193 && hgt.slice(0, -2) >= 150) {
        return true;
    };

    if (hgt.indexOf('in') !== -1 && hgt.slice(0, -2) <= 76 && hgt.slice(0, -2) >= 59) {
        return true;
    }

    return false;
}

const IsHclValid = (hcl) => {
    const colorCheck = /^[a-f0-9]+$/;
    if (hcl.length === 7 && hcl[0] === '#' && colorCheck.test(hcl.slice(1))) {
        return true;
    }
    return false;
}


const IsEclValid = (ecl) => {
    const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

    return eyeColors.indexOf(ecl) !== -1;
}

const IsPidValid = (pid) => {
    const colorCheck = /^[0-9]+$/;
    if (pid.length === 9 && colorCheck.test(pid)) {
        return true;
    }
    return false;
}





readInput('./day4Input').then(input => {
    console.log('Part One result is: ');
    console.log(partOne(input));
});


readInput('./day4Input').then(input => {
    console.log('Part Two result is: ');
    console.log(partTwo(input));
});