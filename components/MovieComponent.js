import React from "react";
import {Image} from "react-native";
import {stylesMain} from "../style";

const {movieImage} = stylesMain;

export const getRidOfHTML = (text) => {
  let str = "";
  if (text != "" && text != null) {
    str = text;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "<" && str[i + 1] === "p" && str[i + 2] === ">") {
        str = str.substring(0, i) + str.substring(i + 3, str.length);
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "<" && str[i + 1] === "b" && str[i + 2] === ">") {
        str = str.substring(0, i) + str.substring(i + 3, str.length);
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "<" && str[i + 1] === "/" && str[i + 2] === "b" && str[i + 3] === ">") {
        str = str.substring(0, i) + str.substring(i + 4, str.length);
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "<" && str[i + 1] === "/" && str[i + 2] === "p" && str[i + 3] === ">") {
        str = str.substring(0, i) + str.substring(i + 4, str.length);
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "<" && str[i + 1] === "i" && str[i + 2] === ">") {
        str = str.substring(0, i) + str.substring(i + 3, str.length);
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "<" && str[i + 1] === "/" && str[i + 2] === "i" && str[i + 3] === ">") {
        str = str.substring(0, i) + str.substring(i + 4, str.length);
      }
    }
  }
  else if (text == "" || text == null) {
    str = "UNAVAILABLE INFO!";
  }
  return str;
}

export const filterText = (text) => {
  let str = getRidOfHTML(text);
  if (text != "") {
    str = `${str.substring(0, 151)}...`;
  }
  else if (text == "") {
    str = "UNAVAILABLE INFO!";
  }
  return str;
}

export const CheckImage = (image) => {
  if (image.image == null) {
    return <Image style={movieImage} source={require(`../images/movie.png`)}/>;
  }
  else {
    return <Image style={movieImage} source={{uri: image.image.medium}}/>;
  }
}
