import React from 'react'
import PlayerCard from './PlayerCard'
import player from './player.js'
// import "../App.css"

const PlayerList = () => {
    console.log(player)
  return (
    <div className='container'>
    <div className='grid'>
      {player.map((item) => (
        <PlayerCard
           key={item.name}
           name={item.name}
           age={item.age}
           nationality={item.nationality}
           movie={item.movie}
           dob={item.dob}
           imgUrl={item.imgUrl}
         />
      )
      )}
    </div>
    </div>
    

  )
}

export default PlayerList;