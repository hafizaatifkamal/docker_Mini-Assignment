
import './App.css';
import { Component } from "react";
import SearchBar from "./components/Search";
import Like from "./components/Likes";
import "./fontawesome-free-5.15.4-web/css/all.css";

// Songs data
const SongList = [
  {
    id: 1,
    like: 3,
    title: "Com Truise - Flightwave",
    subtitle: "Reed",
    media: ""
  },
  {
    id: 2,
    like: 3,
    title: "Claude Debussy - Clair de lune",
    subtitle: "Reed",
    media: ""
  },
  {
    id: 3,
    like: 2,
    title: "Culture Shock - Troglodyte",
    subtitle: "Doug",
    media: ""
  },
  {
    id: 4,
    like: 2,
    title: "Tycho - Montana",
    subtitle: "Reed",
    media: ""
  }
];

class App extends Component {

  state = {list: SongList}

  onClickLikeChange = (id) =>{
    console.log(id,"hai")
    
  this.setState(prevState => ({list:

    prevState.list.map(eachData => {

      if(id===eachData.id ){
        console.log(id,eachData.id)
          return {...eachData,like:eachData.like+1}
        }
        return eachData
      }
    )
  }))
}

  render() {
  const {list} = this.state
    return (
    <div className="App">
      <div className="header">
        <p>
        {/*Music icon*/}
          <i class="fab fa-spotify"></i>
          ReactTracks
        </p>
        <p>
          {/*Smily Face*/}
          <i class="fas fa-smile-wink"></i>
          Atif Kamal
        </p>
        <p>
          {/*Sign-Out Logo*/}
          SIGNOUT 
          <i class="fas fa-sign-out-alt"></i>
        </p>
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="playlist">
        <div className="playlist-item">
          {list.map((song) => (
            <div className="playlist-item-each" key={song.id}>
              <div className="likesCount">
                <Like
                  onClickLikeChange = {this.onClickLikeChange} id = {song.id} likes={song.like}
                />
              </div>
              <div className="song-title">{song.title}
                <div className="song-subtitle">{song.subtitle}</div>
              </div>
              <div className="audio-controls">
                <audio controls src="/"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  }

// <audio controls src="http://docs.google.com/uc?export=open&id=1sanznJvP0Z5XDwDffpiGcoYhFAqZ4DHE"/>

  
}

export default App;
