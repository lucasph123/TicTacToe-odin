function startGame()
{
    const game = gameMap();
    const cpu = cpuPlay();
    const player = playerPlay();

    do{
    // game.gameMap[game.gameMap.indexOf(player.choice())] = 'X';
    // console.log(player.playerPlayed);
    game.gameMap[game.gameMap.indexOf(cpu.choice())] = 'O';
    console.log(cpu.cpuPlayed);
    console.log(game.gameMap);

    }while(winCondition(player.playerPlayed,cpu.cpuPlayed) == false)

    
}
function winCondition(player, cpu)
{
    if(multiplesInArray(player,[1,2,3])  || multiplesInArray(player,[4,5,6])||
        multiplesInArray(player,[7,8,9]) || multiplesInArray(player,[1,4,7]) ||
        multiplesInArray(player,[2,5,8]) || multiplesInArray(player,[3,6,9]) ||
        multiplesInArray(player,[1,5,9]) || multiplesInArray(player,[3,5,7]) )
        {
            console.log('ture');
            return true;
    }else if (multiplesInArray(cpu,[1,2,3])  || multiplesInArray(cpu,[4,5,6])||
            multiplesInArray(cpu,[7,8,9]) || multiplesInArray(cpu,[1,4,7]) ||
            multiplesInArray(cpu,[2,5,8]) || multiplesInArray(cpu,[3,6,9]) ||
            multiplesInArray(cpu,[1,5,9]) || multiplesInArray(cpu,[3,5,7]) )
        {
            console.log('ture cpu');
        }
        else
        {
            console.log('falsee');
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
    const choice = function choice()
    {
        let cpuChoice = Math.floor(Math.random()*10+1)
        cpuPlayed.push(cpuChoice);
        return cpuChoice;
    }
    
    return {cpuPlayed,choice};
}
function playerPlay()
{

    let playerPlayed = [];
    const choice = function choice()
    {
        let playerChoice =  parseInt(prompt('Jogo'));
        playerPlayed.push(playerChoice);
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
