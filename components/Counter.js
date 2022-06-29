import React, { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function Counter() {
    const [count, setCount] = useState(20)
  return (
    <>
        <p>{count}</p>
        <Pressable style={styles.button} title="+" onPress={() => setCount(count + 1)}>
            <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable style={styles.button} title="-" onPress={() => setCount(count - 1)}>
        <Text style={styles.text}>-</Text>
        </Pressable>
    </>
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
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });
