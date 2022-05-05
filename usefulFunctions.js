// Para agregar ceros a la izquierda de ser necesario.
function left_zeros(digits, number) {
    let pattern = new RegExp('\\d{' + digits + '}');
    number = number.toString();
    return number.match(pattern) ? number : '0'.repeat(digits - number.length) + number;
}

function replace_xpath_for_querySelector_search_string(xpath) {
    let pattern = new RegExp(/\/|\[\d\]\//, 'g');
    return xpath.replaceAll(pattern, ' > ').slice(3);
}

function strings_have_in_common(...strings) {
    let arg_count = strings.length;
    let common_upto = [];
    if (arg_count >= 2) {
        for (let i = 0; i < arg_count - 1; ++i) {
            for (let c = 0; c < strings[i].length; ++c) {
                if (strings[i][c] !== strings[i + 1][c]) {
                    common_upto.push(c);
                    break;
                }
            }   
        }
        common_upto = Math.min(...common_upto);
        return {common_upto: common_upto, in_common: strings[0].slice(0, common_upto)};
    }
    else {
        return strings;
    }
}

// Mejorar lo del counter!!!
let counter = 1;
function permutations(array, size, n) {
    if (size == 1) {
        console.log(counter++, array);
        return;
    }

    for (let i = 0; i < size; ++i) {
        permutations(array, size - 1, n);
        if (size % 2 == 1) {
            let aux = array[0];
            array[0] = array[size - 1];
            array[size - 1] = aux;
        }
        else {
            let aux = array[i];
            array[i] = array[size - 1];
            array[size - 1] = aux;
        }
    }
}

// Doesn't work with circular structures.
function hasPropertySomewhere(object, key) {
    let originalObject = object;
    let matches = {};
    let path = [];
    let recursive = (object, key, p=['null']) => {
        if (object.hasOwnProperty(key)) {
            matches[p.join('')] = object;
        }
        if (typeof(object) === 'object') {
            for (let k in object) {
                try { 
                    k in object;
                    path.push('.' + k);
                    recursive(object[k], key, path);
                }
                catch {
                    continue;
                }
            }
        }
        path.pop();
        return;   
    }
    recursive(object, key);
    return matches;
}

// From MDN
const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
// Usage: JSON.stringify(objectWithCircularReference, getCircularReplacer());


function retardMessage(message) {
    //let message = 'ni mae jkldakj !" jeks "#jf"# jasio ej!! e.';
    let pattern = /([a-zà-ü])(?:([^a-zà-ü]*[a-zà-ü][^a-zà-ü]*)|.*)/g;
    let retardMsg = '';
    for (let match of message.toLowerCase().matchAll(pattern)) {
        //console.log(match, match.length);
        if (match[2] !== undefined) {
            retardMsg += match[1].toUpperCase() + match[2];
        }
        else {
            retardMsg += match[0].toUpperCase();
        }
    }

    return retardMsg;
}
