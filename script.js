function startGame()
{
    const game = gameMap();
    const cpu = cpuPlay();
    const player = playerPlay();

    do{

    game.gameMap[game.gameMap.indexOf(player.choice(cpu.cpuPlayed))] = 'X';
    console.log('Player ' + player.playerPlayed);
    game.gameMap[game.gameMap.indexOf(cpu.choice(player.playerPlayed))] = 'O';
    console.log('CPU ' + cpu.cpuPlayed);
    console.log(game.gameMap[0],game.gameMap[1],game.gameMap[2]);
    console.log(game.gameMap[3],game.gameMap[4],game.gameMap[5]);
    console.log(game.gameMap[6],game.gameMap[7],game.gameMap[8]);
    console.log('-------');

    }while(winCondition(player.playerPlayed,cpu.cpuPlayed) == false)

    
}

function verifyChoice(choice,array,secArray)
{
    var validity;
    if(array.includes(choice) || secArray.includes(choice))
        {
            console.log('Ja existe');
            return validity = false;
        }
        else{
            array.push(choice);
            return validity = true;
        }


}



function winCondition(player, cpu)
{
    if(multiplesInArray(player,[1,2,3])  || multiplesInArray(player,[4,5,6])||
        multiplesInArray(player,[7,8,9]) || multiplesInArray(player,[1,4,7]) ||
        multiplesInArray(player,[2,5,8]) || multiplesInArray(player,[3,6,9]) ||
        multiplesInArray(player,[1,5,9]) || multiplesInArray(player,[3,5,7]) )
        {
            console.log('You Won');
            return true;
    }else if (multiplesInArray(cpu,[1,2,3])  || multiplesInArray(cpu,[4,5,6])||
            multiplesInArray(cpu,[7,8,9]) || multiplesInArray(cpu,[1,4,7]) ||
            multiplesInArray(cpu,[2,5,8]) || multiplesInArray(cpu,[3,6,9]) ||
            multiplesInArray(cpu,[1,5,9]) || multiplesInArray(cpu,[3,5,7]) )
        {
            console.log('CPU Won');
            return true;
        }
        else
        {
            return false;
        }
       
    /*
    Win Conditions
    [X X X]    [X * *]    [* * X]   [* X *]   [* * *]   [* * *]   [X * *]  [* * X]  [1 2 3]     
    [* * *]    [X * *]    [* * X]   [* X *]   [X X X]   [* * *]   [* X *]  [* X *]  [4 5 6] 
    [* * *]    [X * *]    [* * X]   [* X *]   [* * *]   [X X X]   [* * X]  [X * *]  [7 8 9] 
    
    */
}


function gameMap()
{
    const gameMap = [
        1,2,3,
        4,5,6,
        7,8,9
    ]; 
    
    return {gameMap}
}


function cpuPlay()
{
    const cpuPlayed = [];
    const choice = function choice(playerChoice)
    {
        do{
            var cpuChoice = Math.floor(Math.random()*9+1)
            console.log(cpuChoice);
            var valid = verifyChoice(cpuChoice,cpuPlayed,playerChoice)  
        }while(valid == false)
        return cpuChoice;
    }
    
    return {cpuPlayed,choice};
}
function playerPlay()
{

    let playerPlayed = [];
    const choice = function choice(cpuArray)
    {
        do{
            var playerChoice =  parseInt(prompt('Jogo'));
            var valid = verifyChoice(playerChoice,playerPlayed,cpuArray);
        }while(valid == false)
        
        return playerChoice;
    }

    return {playerPlayed,choice};

}
function multiplesInArray(array,values)
{
    return values.every(value => {
        return array.includes(value);
     })

}

startGame();
