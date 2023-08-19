import React, { useState } from 'react'

function Player() {
    const PLAYERS = [
        "Alice",
        "Bob",
        "Carol",
        "Daniel",
        "Elaine",
        "Finley",
        "Gary",
        "Hector",
      ];

    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(1);

    const randomizPlayers = () => {
        const shuffledPlayers = [...PLAYERS];
        shuffledPlayers.sort(() => 0.5 - Math.random());
        setTeam1(shuffledPlayers.slice(0, Math.floor(shuffledPlayers.length/2)));
        setTeam2(shuffledPlayers.slice(Math.floor(shuffledPlayers.length/2), shuffledPlayers.length))
        };
    const resetPlayers = () => {
        setSelectedTeam(1);
        setTeam1([]);
        setTeam2([]);
    };
    
    const selectPlayer = (player) =>{

        if(selectedTeam == 1){
            team2.includes(player) ? alert(`${player} already in team 2`) : 
                    !team1.includes(player) && setTeam1([player,...team1]);
        }else{
            team1.includes(player) ? alert(`${player} already in team 1`) : 
                    !team2.includes(player) && setTeam2([player,...team2]);
        }
    }


    
  return (
  
    <>
    
    <div>
         <button onClick={() => setSelectedTeam(selectedTeam == 1 ? 2 : 1)}>Selected Team {selectedTeam} </button>
         <button onClick={randomizPlayers}>Randomize Players</button>
         <button onClick={resetPlayers}>Reset </button>
        </div>
    <div style={{display:'flex' , justifyContent:'space-around'}}>
      <div>
        <h3>Players</h3>
        {PLAYERS.map((player, index) => <li key={index} onClick={() => selectPlayer(player)}>
                                                        
                                     {player} </li>)}
      </div>
      <div>
        <h3>Team 1</h3>
        {
            team1.map((player, index) => <li key={index}>{player}</li>)
        }
      </div>
      <div>
        <h3>Team 2</h3>
        {
            team2.map((player, index) => <li key={index}>{player}</li>)
        }
      </div>
    </div>  
    </>
       
  )
}

export default Player
