import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {stylesMain} from "../style";

const {searchView, searchInput, searchBtn, searchBtnText} = stylesMain;

export const SearchMovie = (props) => {
    const {getUserInput, clickToFind} = props;
    return(
        <View style={searchView}>
          <TextInput style={searchInput} placeholder="Enter name of the movie" 
            onChangeText={getUserInput}></TextInput>
          <TouchableOpacity style={searchBtn} onPress={() => clickToFind()}>
            <Text style={searchBtnText}>Find My Movie!</Text>
          </TouchableOpacity>
        </View>
    );
}
