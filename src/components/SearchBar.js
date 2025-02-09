import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}> 
        <Feather style={styles.iconStyle} size={30} name='search'/>
        <TextInput 
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.inputStyle} 
        placeholder="Search"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#E0E0E0', // a little more gray
        marginTop: 15, 
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    }, 
    iconStyle: {
        fontSize: 35, 
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        borderColor: 'black',
        fontSize: 18,
        flex: 1
    }
});
export default SearchBar;