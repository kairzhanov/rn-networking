import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Search (props) {
    const [movie, setMovie] = useState(null)
    const [searchText, setSearchText] = useState("")
    
    function getMoviesFromApiAsync() {
        return fetch('http://www.omdbapi.com/?apikey=3ade7729&t=' + searchText)
          .then(response => response.json())
          .then(responseJson => {
              setMovie(movie => movie = responseJson);
              console.log(movie)
          })
          .catch(error => {
            console.error(error);
        });
    }

    function SearchMovieByName() {
        getMoviesFromApiAsync();
    }

    
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, marginBottom: 10}}>Put the movie name below:</Text>
            <TextInput style={{fontSize: 20}} placeholder="Search movie" onChangeText={searchText => setSearchText(searchText)} value={searchText}/>
            <Button style={{marginTop: 20}} title="Search" onPress={() => SearchMovieByName()} />
            {(movie != null) ? 
            <View>
                <Text style={styles.movie}>Title: {movie.Title}</Text>
                <Text style={styles.movie}>Released: {movie.Released}</Text>
                <Text style={styles.movie}>Actors: {movie.Actors}</Text>
                {movie.Ratings.length > 0 ? <Text style={styles.movie2}>Ratings:</Text> : <Text></Text>}
                {movie.Ratings.map(rate => <Text style={styles.rating} key={rate.Source}>{rate.Source}: {rate.Value}</Text>)}


            </View>
                
                
                : <Text></Text>}
            <Button title="Go back"
             onPress={() => props.navigation.navigate('Home')} />
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
    movie: {
        fontSize: 15
    },
    movie2: {
        fontSize: 15,
        marginTop: 20
    },
    rating: {
        fontSize: 13
    }
})
