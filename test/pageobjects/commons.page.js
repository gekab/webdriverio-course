
const Page = require('./page');

class ModulPage extends Page {

    createEmail = () => {
        let arr = 'abcdiefghjklmnopqrstuvwxyz'
        let str = ''
        while (str.length <11){
            str += arr[Math.floor(Math.random() * 26)]
        }
        str = str.slice(-10)
        return str + '\@gmail.com'
    }

    createPassword = () => {
        let arr = 'abcdiefghjklmnopqrstuvwxyz1234567890'
        let str = ''
        while (str.length <16){
            str += arr[Math.floor(Math.random() * 36)]
        }
        str = str.slice(-15)
        return str
    }

    createLogin = () => {
        let arr = 'abcdiefghjklmnopqrstuvwxyz'
        let str = ''
        while (str.length <16){
            str += arr[Math.floor(Math.random() * 26)]
        }
        str = str.slice(-10)
        return str
    }

    // find substring in string, return bool result
    checkSubString = (substr, str) => {
        for(let i = 0; i < str.length - substr.length+1; i++){
            let word = str.slice(i, substr.length + i);
            if (word === substr){
                return true
            }
        }
         return false
    }
}
module.exports = new ModulPage();