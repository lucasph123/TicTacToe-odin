const btn = document.querySelectorAll('.btn');
const winLose = document.querySelector('.win-lose');








function btnUse(player,cpu,game)
{
    const games = startGame();
    const btnReset = document.querySelector('.reset');


    btnReset.addEventListener('click',() => games.resetGame());

    for(i=0;i < btn.length; i++)
    {
        
        btn[i].addEventListener('click',(e)=> { 
            games.gaming(e.target.value)
        });

    }
}

btnUse();




function startGame()
{
    const game = gameMap();
    const cpu = cpuPlay();
    const player = playerPlay();

    const gaming = function gaming(val)
    {
      
        game.gameMap[game.gameMap.indexOf(player.choice(cpu.cpuPlayed,val))] = 'X';
        if(winCondition(player.playerPlayed,cpu.cpuPlayed) == true)
        {
            return;
        }

        game.gameMap[game.gameMap.indexOf(cpu.choice(player.playerPlayed))] = 'O';
        if(winCondition(player.playerPlayed,cpu.cpuPlayed) == true)
        {
            return;
        }
  
        
    }

    const resetGame = function resetGame()
    {
        player.playerPlayed.length = 0;
        cpu.cpuPlayed.length = 0;
        game.gameMap = [
            1,2,3,
            4,5,6,
            7,8,9
        ]; 
        for (const key in btn) {
            
            btn[key].textContent = '';
            btn[key].disabled = false;
            
        }

        winLose.textContent = '';

        console.log(player.playerPlayed);
        console.log(cpu.cpuPlayed);
        console.log(game.gameMap);
        
;

    }

        return{gaming,resetGame};

    
}


function verifyChoice(choice,array,secArray,mark)
{

  
    if(array.includes(choice) || secArray.includes(choice))
        {

            console.log('O Número' + choice +'Ja existe');
            console.log(array);
            return  false;
        }
        else{

            btn[choice-1].textContent = mark;
            btn[choice-1].disabled = true;
            array.push(choice);
            return  true;
        }
}


function winCondition(player, cpu)
{
    if(multiplesInArray(player,[1,2,3])  || multiplesInArray(player,[4,5,6])||
        multiplesInArray(player,[7,8,9]) || multiplesInArray(player,[1,4,7]) ||
        multiplesInArray(player,[2,5,8]) || multiplesInArray(player,[3,6,9]) ||
        multiplesInArray(player,[1,5,9]) || multiplesInArray(player,[3,5,7]) )
        {
            for (const key in btn) {
                btn[key].disabled = true;
            }
            winLose.textContent = 'You Won, Congratulations';
            winLose.removeAttribute('hidden');
            return true;
    }else if (multiplesInArray(cpu,[1,2,3])  || multiplesInArray(cpu,[4,5,6])||
            multiplesInArray(cpu,[7,8,9]) || multiplesInArray(cpu,[1,4,7]) ||
            multiplesInArray(cpu,[2,5,8]) || multiplesInArray(cpu,[3,6,9]) ||
            multiplesInArray(cpu,[1,5,9]) || multiplesInArray(cpu,[3,5,7]) )
    {
            for (const key in btn) {
                btn[key].disabled = true;
            }
            winLose.textContent = 'You Lose, Try Next Time';
            winLose.removeAttribute('hidden');
            return true;
    }else if (player.length == 5)
    {

        winLose.textContent = 'It is a TIE, TRY AGAIN';
        winLose.removeAttribute('hidden');
        return true
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
    const cpuMark = 'O';
    const cpuPlayed = [];
    const choice = function choice(playerChoice)
    {
        do{
            var cpuChoice = Math.floor(Math.random()*9+1)
            var valid = verifyChoice(cpuChoice,cpuPlayed,playerChoice,cpuMark)  
        }while(valid == false)
        return cpuChoice;
    }
    
    return {cpuPlayed,choice};
}
function playerPlay()
{
    const playerMark = 'X';
    const playerPlayed = [];
    const choice = function choice(cpuArray,playerChoice)
    {
        let pChoice = parseFloat(playerChoice);
        verifyChoice(pChoice,playerPlayed,cpuArray,playerMark);
        return pChoice;
    }

    return {playerPlayed,choice};

}
function multiplesInArray(array,values)
{
    return values.every(val => {
        return array.includes(val);
     })

}


