import React, { useState } from 'react'
import { Button, StyleSheet, Text } from 'react-native'

function Player({ navigation }) {
    const [players, setPlayers] = useState(2)
  return (
    <div>
        <Text>Players: </Text>
        <select onChange={(e) => {setPlayers(e.target.value)}}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
        </select>
        <Button
                title="Play"
                onPress={() =>    
                navigation.navigate('Play', { name: 'Play', value: players})
                }
            />
    </div>
  )
}

export default Player 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });