import React from 'react';
// import RelatedVideos from './related_videos';

class VideoDetail extends React.Component{
   
    render () {
        var video = this.props.video    
        if (!video) {
            return <div>Loading...</div>;
        }
    
        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div>
            {/* <RelatedVideos videoId={videoId} /> */}
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
            </div>
            )
    }
};

export default VideoDetail;