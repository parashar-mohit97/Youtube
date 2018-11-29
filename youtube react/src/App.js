import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
import YoutubeLogo from './Logo.png';
import axios from 'axios';
const API_KEY = 'AIzaSyABeKeoh9Q6vFSS01pjomPfla3mKZh0Z5E';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
        
    };

    // this.videoSearch('Ronaldo');
}

//${videoId}


videoSearch(searchTerm) {
  
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
   
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });
  
}

 /* export const fetchRelatedVideos = videoId => dispatch => {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId${videoId}&type=video&key=`AIzaSyABeKeoh9Q6vFSS01pjomPfla3mKZh0Z5E`
    )*/
    componentDidMount() {
      this.videoSearch('Ronaldo');
      debugger
      
      // const selectedVideo = this.state.selectedVideo;
      // const videoId = selectedVideo && selectedVideo.id ? selectedVideo.id.videoId : null
    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=${videoId}&type=video&key=AIzaSyABeKeoh9Q6vFSS01pjomPfla3mKZh0Z5E`)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     const relVids = responseJson.items.map(obj => obj);
    //     this.setState({
    //       videos: relVids
    //     })
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    }
    //onClick()
  
    UpdateVideos(userSelected) {
      this.setState({
        selectedVideo: userSelected
      })
      let { selectedVideo } = this.state
      let videoId = selectedVideo.id.videoId ? selectedVideo.id.videoId : ''
      if(videoId){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=${videoId}&type=video&key=AIzaSyABeKeoh9Q6vFSS01pjomPfla3mKZh0Z5E`)
        .then(response => response.json())
        .then(responseJson => {
          const rv = responseJson.items.map(obj => obj);
          this.setState({
            videos: rv
          });
          console.log("state", this.state.videos);
        })
        .catch(error => {
          console.error(error);
        });
      }
    };

  render() {
    // const selectedVideo = this.state.selectedVideo;
    // const videoId = selectedVideo && selectedVideo.id ? selectedVideo.id.videoId;
     
   
    return (
      <div>
        <img src={YoutubeLogo} width={80} height={20} mode='fit' className="img"/>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={userSelected => this.UpdateVideos(userSelected)}
          // onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}          
          videos={this.state.videos}
           />
        
      </div>
    );
  }
}

export default App;
