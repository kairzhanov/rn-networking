import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Welcome to Movies App!</Text>
            <Text style={{fontSize: 20}}>Here you can find any movie</Text>
            <Text style={{fontSize: 15}}>Go to Search page using drawer or click below</Text>
            <Button title="Go to Search"
             onPress={() => props.navigation.navigate('Search')} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
