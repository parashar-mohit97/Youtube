import React, { Component } from 'react';

class RelatedVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relVids: []
        };
    }
    
        //const VideoDetail = (props) => {
        //const video = props.video;
        //const relatedvideos=props.relatedvideos;
    
    
/* const VideoDetail = (props) => {
    const video = props.video;
    const relatedvideos=props.relatedvideos; */

    
componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=${videoId}&type=video&key=AIzaSyABeKeoh9Q6vFSS01pjomPfla3mKZh0Z5E`)
    .then(response => response.json())
    .then(responseJson => {
      const rv = responseJson.items.map(obj => obj);
      this.setState({
        relVids: rv
      });
      console.log("state", this.state.relVids);
    })
    .catch(error => {
      console.error(error);
    });

}

      return(

      )
      
      export default RelatedVideos;