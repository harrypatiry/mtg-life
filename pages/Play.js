import React from 'react'
import Counter from '../components/Counter'

export default function Play({ route, navigation }) {
    const players = route.params.value
    const fields = [];
    for(let i = 1; i <= players; i++){
        fields.push(<Counter id={i} key={i}/>)
    }

  return (
    <>
        <div>{players} players</div>
        <div>{fields}</div>
    </>
  )
}
