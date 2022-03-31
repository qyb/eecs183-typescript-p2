import {
    getName,
    getMenuChoice,
    isMoveGood,
    getMove,
    isRoundWinner,
    announceRoundWinner,
    doRound,
    announceWinner,
    doGame
} from './rps';

export {startTests};

//************************************************************************
// Testing function declarations. Function definition is below main.
//************************************************************************
/*
function test_isMoveGood(): void;
declare function test_isRoundWinner(): void;
declare function test_announceRoundWinner(): void;
declare function test_announceWinner(): void;
*/

function startTests(): void {
    console.log('\nExecuting your test cases');
    test_isMoveGood();
}

//************************************************************************
// Put all your test function implementations below here.
// We have stubbed all required functions for you
// to recieve full points when submitting test.cpp
// NOTE: We will only grade your tests for the following functions
//       * isMoveGood
//       * isRoundWinner
//       * announceRoundWinner()
//       * announceWinner()
//************************************************************************

function test_isMoveGood() {
    console.log('Now testing function isMoveGood()');
    console.log(`'r': Expected: true, Actual: ${isMoveGood('r')}`);
    console.log(`'q': Expected: false, Actual: ${isMoveGood('q')}`);

    // TODO: implement more test cases here

    return;
}

function test_isRoundWinner() {
    // TODO: implement

    return;
}

function test_announceRoundWinner() {
	// TODO: implement

    return;
}

function test_announceWinner() {
	// TODO: implement

    return;
}
