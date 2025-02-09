import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}> 
        <Feather size={30} name='search'/>
        <TextInput style={styles.inputStyle} 
            placeholder="Search"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    }, 
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    }
});
export default SearchBar;