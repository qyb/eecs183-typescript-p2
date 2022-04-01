import {
    rps,
    getChoice
} from './rps';

import {
    startTests
} from './test';

(function() {
    console.log('-------------------------------');
    console.log('EECS 183 Project 2 Menu Options');
    console.log('-------------------------------');
    console.log('1) Execute testing functions in test.cpp');
    console.log('2) Execute rps() function to play game');

    const choice = getChoice();

    if (choice === 1) {
        startTests();
    } else if (choice === 2) {
        rps();
    }
})();
