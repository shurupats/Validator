class Validator{
    isEmail(email){
        let result = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (result != null){
            return true;
        }
        else{
            return false;
        }
    }

    isDomain(domain){
        let result = domain.match(/[A-Za-z]+[\.]+[A-Za-z]+$/);
        if (result != null){
            return true;
        }
        else{
            return false;
        }   
    }

    isDate(date){
        let convertedDate = Date.parse(date);
        if (convertedDate != NaN){
            return true;
        }
        else{
            return false;
        }
    }

    isPhone(phone){
        let result = phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        if (result != null){
            return true;
        }
        else{
            return false;
        }
    }
}

class ValidatorStatic{
    static isEmail(email){
        let result = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (result != null){
            return true;
        }
        else{
            return false;
        }
    }

    static isDomain(domain){
        let result = domain.match(/[A-Za-z]+[\.]+[A-Za-z]+$/);
        if (result != null){
            return true;
        }
        else{
            return false;
        }   
    }

    static isDate(date){
        let convertedDate = Date.parse(date);
        if (convertedDate != NaN){
            return true;
        }
        else{
            return false;
        }
    }

    static isPhone(phone){
        let result = phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        if (result != null){
            return true;
        }
        else{
            return false;
        }
    }
}


function check(){
    //стандартная вызывается вот так
    var validator = new Validator();
    console.log(validator.isEmail('alisa@mail.ru'));
    console.log(validator.isDomain('itgirlschool.ru'));
    console.log(validator.isDate('12.05.2021'));
    console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
    
    //а статическая так
    console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
    console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
    console.log(ValidatorStatic.isDate('12.05.2021'));
    console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны
}

document.querySelector(".button").addEventListener("click", check);