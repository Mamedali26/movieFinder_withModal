import React, {Component} from "react";
import {View, ScrollView, Text, TouchableOpacity} from "react-native";
import {stylesMain} from "./style";
import {Header, SearchMovie, ModalWindow} from "./components";
import {CheckImage, filterText} from './components/MovieComponent';

const {
  container, 
  filteredDataView, 
  clickForMore, 
  clickForMoreText,
  movieView, 
  movieName, 
  movieSummary, 
  searchResultText,
} = stylesMain;

const url = "http://api.tvmaze.com/search/shows?q=";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      userInput: "batman",
      modalWindow: false,
      moviesShow: []
    }
  }

  fullUrl = "";

  showModal = () => {
    this.setState({modalWindow: true});
  }

  closeModal = () => {
    this.setState({modalWindow: false});
  }

  getUserInput = (text) => {
    this.fullUrl = url + text;
    this.setState(prevState => ({userInput: prevState.userInput = text}));
  }

  componentDidMount = async() => {
    try {
      const response = await fetch(url + this.state.userInput);
      const data = await response.json();
      this.setState(prevState => ({data: prevState.data = data}));
    }
    catch(error){
      console.log("URL is wrong!")
    }
  }

  componentDidUpdate = async() => {
    try {
      const response = await fetch(this.fullUrl);
      const data = await response.json();
      this.setState(prevState => ({data: prevState.data = data}));
    }
    catch(error) {
      console.log("URL is wrong!")
    }
  }

  clickToFind = () => {
    this.componentDidUpdate();
  }

  render() {
    const {data, userInput, showModal} = this.state;
    
    return(
      <View style={container}>
        <ScrollView>
          <Header/>
          <SearchMovie getUserInput={this.getUserInput} clickToFind={this.clickToFind}/>        
          <View style={filteredDataView}>
            <View>
              <Text style={searchResultText}>Found {data.length > 0 ? data.length:0} results for: 
                <Text style={{color: "darkgreen", textTransform: "uppercase"}}> {userInput}</Text>
              </Text>
              {
                data.map((movie) => (
                  <View style={movieView} key={movie.show.id}>
                    <CheckImage image={movie.show.image}/>            
                    <Text style={movieName}>{movie.show.name}</Text>              
                    <Text style={movieSummary}>{                
                      filterText(movie.show.summary)
                    }
                    </Text>
                    <TouchableOpacity style={clickForMore} onPress={() => this.setState({
                      moviesShow: movie.show,
                      modalWindow: true
                    })}>
                      <Text style={clickForMoreText}>Click For Full Information</Text>
                    </TouchableOpacity>            
                  </View>
                ))
              }
            </View>
          </View>
        </ScrollView>
        <ModalWindow 
          closeModal={this.closeModal}
          modalWindow={this.state.modalWindow}
          movieInfo={this.state.moviesShow}
        />
      </View>
      
    );
  }

}

export default App;