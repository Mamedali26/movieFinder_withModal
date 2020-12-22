import React from 'react';
import {ScrollView, Modal, View, Text, TouchableOpacity} from 'react-native';
import {CheckImage, getRidOfHTML} from './MovieComponent';
import {stylesMain} from "../style";

const {movieView, movieImage, movieName, movieSummary, searchResultText, 
      clickForMore, clickForMoreText} = stylesMain;

export const ModalWindow = ({closeModal, modalWindow, movieInfo}) => {
    
  return (
    <>
      <Modal visible={modalWindow}>
        <ScrollView>
            <View style={movieView}>
                <CheckImage image={movieInfo.image}/> 
                <Text style={movieName}>{movieInfo.name}</Text>
                <Text style={movieSummary}>{getRidOfHTML(movieInfo.summary)}</Text>
                <TouchableOpacity style={clickForMore} onPress={closeModal}>
                    <Text style={[clickForMoreText, {textAlign: "center"}]}>Return to Main Page</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </Modal>
    </>
  );
};






{/* <Modal visible={modalWindow}>
              <ScrollView>
                <View style={movieView}>
                  <CheckImage image={movie.show.image}/> 
                  <Text style={movieName}>{movie.show.name}</Text>
                  <Text style={movieSummary}>{getRidOfHTML(movie.show.summary)}</Text>
                  <TouchableOpacity style={clickForMore} onPress={closeModal}>
                    <Text style={[clickForMoreText, {textAlign: "center"}]}>Return to Main Page</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </Modal> */}