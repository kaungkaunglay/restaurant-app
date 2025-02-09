import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return (
        <View>
        <SearchBar onTermSubmit={() => console.log('term was submitted')} term={term} onTermChange={newTerm => setTerm(newTerm)} />
        <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
export default SearchScreen;