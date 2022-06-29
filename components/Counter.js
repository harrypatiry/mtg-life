import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text } from 'react-native'

export default function Counter() {
    //start at 40 for commander 
    const [count, setCount] = useState(40)
  return (
    <div>
        <p style={{ textAlign: 'center' }}>{count}</p>
        <div style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Button style={styles.button} color="black" title="+" onPress={() => setCount(count + 1)}/>
            <Button style={styles.button} color="black" title="-" onPress={() => setCount(count - 1)}/>
        </div>
    </div>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        // paddingLeft: '25%',
        // paddingRight: '25%',
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });
