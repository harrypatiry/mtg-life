import React, { useState } from 'react'
import { Button, StyleSheet, Text } from 'react-native'

export default function Player({ navigation }) {
    //start at 20 for standard/modern 
    const [lives, setLives] = useState(20)
    const [players, setPlayers] = useState(2)
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px' }}>
        <Text>Players: </Text>
        <select onChange={(e) => {setPlayers(e.target.value)}}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
        </select>
        <Text>Starting lives: </Text>
        <input type="number" onChange={(e) => setLives(e.target.value)} value={lives}></input>
      </div>
        <Button
            color='black'
            title="Play"
            onPress={() =>    
            navigation.navigate('Play', { name: 'Play', playerValue: players, livesValue: lives})
            }
        />
    </div>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });