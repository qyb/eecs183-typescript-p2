const MAX_ROUNDS = 3;

export {
    //************************************************************************
    // The following five functions have already been implemented for you.
    // You should use them when writing the other functions, but do not edit
    // their implementations.
    //************************************************************************

    printInitialHeader,
    printMenu,
    printErrorMessage,
    printCloser,
    getChoice,

    //************************************************************************
    // You must implement all of the following functions. Add your
    // implementations below rps() as indicated.
    //************************************************************************

    getName,
    getMenuChoice,
    isMoveGood,
    getMove,
    isRoundWinner,
    announceRoundWinner,
    doRound,
    announceWinner,
    doGame,

    rps
};

function rps(): void {
    // TODO: implement

    return;
}

//************************************************************************
// Implement the functions below this line.
//************************************************************************

/**
 * Requires: playerNumber is either 1 or 2
 * Modifies: cout, cin
 * Effects:  Prompts the user to enter their name. Names entered may
 *           have spaces within them.
 *               Example: "Kermit the frog"
 *
 *           If an empty name is given, this is invalid input, so print
 *           error message 1, and return a default name.
 *           For player 1, the default name is: Rocky
 *           For player 2, the default name is: Creed
 *           Otherwise, return name entered by user.
 *
 * Prompt:   Player [playerNumber], enter your name:
 */
function getName(playerNumber: number): string {
    // TODO: implement

    // NOTE: return "" to avoid compile error
    //       remove it after implementing
    return "";
}


/**
 * Requires: nothing
 * Modifies: cout, cin
 * Effects:  Prints the menu, and reads the input from the user.
 *           Checks to make sure the input is within range for the menu.
 *           If it is not, prints "Invalid menu choice". Continues to print
 *           the menu and read in input until a valid choice is entered,
 *           then returns the user's choice of menu options. You can assume
 *           a user will enter an integer, and nothing else, as their choice.
 *
 * Prompt:   Invalid menu choice
 */
function getMenuChoice(): number {
    // TODO: implement

    // NOTE: return 0 to avoid compile error
    //       remove it after implementing
    return 0;
}


/**
 * Requires: nothing
 * Modifies: nothing
 * Effects:  Returns true if and only if move represents a valid move character:
 *           one of 'R', 'r', 'P', 'p', 'S', 's'. Returns false otherwise.
 */
function isMoveGood(move: string): boolean {
    // TODO: implement

    // NOTE: return false to avoid compile error
    //       remove it after implementing
    return false;
}


/**
 * Requires: playerName is the name of the player being prompted for their
 *           move.
 * Modifies: cout, cin
 * Effects:  Prompts the player for their move and returns it.
 *           This function should accept the first non-whitespace character as
 *           the move. If an illegal character is entered for their move, print
 *           error message 2 and return rock as a default. You can assume a user
 *           will enter a single character, and nothing else, as their move.
 *
 * Prompt:   [playerName], enter your move:
 */
function getMove(playerName: string): string {
    // TODO: implement

    // NOTE: return 'r' to avoid compile error
    //       remove it after implementing
    return 'r';
}


/**
 * Requires: move is the move of the player being checked for a win.
 *           opponentMove is the move of the opponent.
 *           both move and opponentMove are valid moves.
 * Modifies: nothing
 * Effects:  Returns true if and only if the player who made move won
 *           according to the rules to rock-paper-scissors. Returns false
 *           otherwise.
 */
function isRoundWinner(move: string, opponentMove: string): boolean {
    // TODO: implement

    // NOTE: return false to avoid compile error
    //       remove it after implementing
    return false;
}


/**
 * Requires: winnerName is the name of the player who won the round.
 * Modifies: cout
 * Effects:  If winnerName is the empty string, i.e., "",
 *           prints a message indicating the round is a draw.
 *           Otherwise, prints a congratulatory message to the winner.
 * Prompt:   This round is a draw!
 *           ------------- OR -------------
 *           [winner_name] wins the round!
 */
function announceRoundWinner(winnerName: string): void {
    // TODO: implement

    return;
}


/**
 * Requires: p1Name and p2Name are the names of the respective players
 * Modifies: nothing
 * Effects:  Simulates a complete round of rock-paper-scissors, which
 *           consists of three steps:
 *             1. Get player1 move
 *             2. Get player2 move
 *             3. Return 0 if the round was a draw; 1 if player 1 won;
 *                2 if player 2 won.
 */
function doRound(p1Name: string, p2Name: string): number {
    // TODO: implement

    // NOTE: return 0 to avoid compile error
    //       remove it after implementing
    return 0;
}


/**
 * Requires: winnerName is the name of the player who won the game.
 * Modifies: cout
 * Effects:  If winnerName is the empty string, i.e., "",
 *           prints that the game was a draw.
 *           Otherwise, prints a congratulatory message to the winner.
 * Prompt:   No winner!
 *           ------------- OR -------------
 *           Congratulations [winnerName]!
 *           You won EECS 183 Rock-Paper-Scissors!
 */
function announceWinner(winnerName: string): void {
    // TODO: implement

    return;
}


/**
 * Requires: p1Name and p2Name are the names of the respective players,
 *           gameType can be 1 for regular rock-paper-scissors
 *           or 2 for rock-paper-scissors-lizard-spock
 * Modifies: cout
 *
 * Base Project:
 * Effects:  If gameType is 2, prints "Under Construction" to indicate that the
 *           s'more has not been implemented. Returns empty string.
 *           Otherwise, plays exactly three rounds of rock-paper-scissors while
 *           keeping track of the number of round wins for each player.
 *           When a round results in a draw, neither player is the winner,
 *           so neither player is awarded a point.
 *           After each round is played, the round winner (or draw) is
 *           announced.
 *           Returns the name of the game winner, or "" in event of a draw.
 * Prompt:   Under Construction
 *
 * S'more Version:
 * Effects:  Has same functionality as base project, but also handles a
 *           gameType of 2. When game_type is 2, plays exactly three rounds of
 *           rock-paper-scissors-lizard-spock. Keeps track of round wins for
 *           each player and announces round winners in the same fashion as
 *           described above.
 */
 function doGame(p1Name: string, p2Name: string, gameType: number): string {
    // TODO: implement

    // NOTE: return "" to avoid compile error
    //       remove it after implementing
    return "";
}


//***********************************************************************
// DO NOT modify the four functions below.
//***********************************************************************

/**
 * Requires: nothing
 * Modifies: cout
 * Effects:  Prints a pretty header to introduce the user to the game.
 */
function printInitialHeader(): void {
    console.log('----------------------------------------');
    console.log('               EECS 183                 ');
    console.log('          Rock-Paper-Scissors           ');
    console.log('----------------------------------------\n');

    return;
}

/**
 * Requires: nothing
 * Modifies: cout
 * Effects:  Prints the menu.
 * Prompts:  "1) Play rock, paper, scissors"
 *           "2) Play rock, paper, scissors, lizard, spock"
 *           "3) Quit"
 */
function printMenu(): void {
    console.log('\n');
    console.log('Menu Options');
    console.log('------------');
    console.log('1) Play rock, paper, scissors');
    console.log('2) Play rock, paper, scissors, lizard, spock');
    console.log('3) Quit\n');

    // cout << "Choice --> ";

    return;
}

/**
 * Requires: errorNumber be either 1 or 2
 * Modifies: cout
 * Effects:  If errorNumber is 1, prints an error message indicating
 *           an illegal name was entered.
 *           If errorNumber is 2, prints an error message indicating
 *           an illegal move was entered.
 */
function printErrorMessage(errorNumber: number): void {
    if (errorNumber == 1) {
        console.log('\nERROR: Illegal name given, using default\n');
    } else if (errorNumber == 2) {
        console.log('\nERROR: Illegal move given, using default');
    } else {
        console.log('This should never print!');
    }

    return;
}

/**
 * Requires: nothing
 * Modifies: cout
 * Effects:  Prints out the final greeting for the program.
 */
function printCloser(): void {
    console.log('\n----------------------------------------');
    console.log('           Thanks for playing            ');
    console.log('          Rock-Paper-Scissors!           ');
    console.log('----------------------------------------\n');

    return;
}


/**
 * 额外新增的助手函数
 */
import PromptSync from 'prompt-sync';
const prompt = PromptSync({
    sigint: true
});

function getChoice(): number {
    const choiceInput = prompt('Choice --> ');
    return parseInt(choiceInput);
}
