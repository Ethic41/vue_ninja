/**
 * -=-<[ Bismillahirrahmanirrahim ]>-=-
 * Date    : 2023-01-09 14:17:12
 * Author  : Dahir Muhammad Dahir (dahirmuhammad3@gmail.com)
 */


// let
function getPonyFullName(pony) {
    if (pony.isChampion) {
        let name = 'Champion ' + pony.name;
        return name;
    }

    return pony.name;
}

// constants
const poniesInRace = 6;

const PONY = {};

PONY.color = 'blue';

const PONIES = [];
PONIES.push({color: 'blue'});


PONIES = [];

// shorthand in object creation

function createPony() {
    const name = 'Rainbow Dash';
    const color = 'blue';
    return { name, color, run(){ console.log('Run!')} };
}


// destructuring

const httpOptions = {timeout: 2000, isCache: true, cache: { age: 2 }};
const {timeout: httpTimeout, isCache: httpCache } = httpOptions;
const {timeout, isCache} = httpOptions; // much cleaner


const {
    cache: { age }
} = httpOptions;


const timeouts = [1000, 2000, 3000];
const [shortTimeout, mediumTimeout] = timeouts;
