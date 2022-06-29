import React from 'react'
import { StyleSheet } from 'react-native';
import Counter from '../components/Counter'

export default function Play({ route, navigation }) {
    const players = route.params.value
    const fields = [];
    for(let i = 1; i <= players; i++){
        fields.push(<Counter id={i} key={i}/>)
    }

  return (
    <div>
        <div>{players} players</div>
        <div>{fields}</div>
    </div>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    }
  });
