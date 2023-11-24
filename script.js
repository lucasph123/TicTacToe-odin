function startGame()
{
    const game = gameMap();
    const cpu = cpuPlay();
    const player = playerPlay();

   // do{
    game.gameMap[game.gameMap.indexOf(player.choice())] = 'X';
    console.log(game.gameMap);
    game.gameMap[game.gameMap.indexOf(cpu.choice())] = 'O';
    console.log(game.gameMap);
    console.log(player.playerPlayed);
    //}while(winCondition() != false)

    
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

startGame();

    