import React from "react";
import {View, Text} from "react-native";
import {stylesMain} from "../style";

const {header, headerText, logoView, logoText, headerTextSpan} = stylesMain;

export const Header = () => {
    return(
        <View style={header}>
            <View style={logoView}>
                <Text style={logoText}> MovieHunter </Text>
            </View>
            <Text style={headerText}>
                Find Your <Text style={headerTextSpan}>Movie!</Text>
            </Text>
            <Text style={headerText}>
                Enjoy Your <Text style={headerTextSpan}>Experience!</Text>
            </Text>
        </View>
    );
}
