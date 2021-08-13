import React, {useState, useEffect } from 'react'
// import './index.css';
import axios from 'axios';
import './styles/Youtube.css'
import {BsDot} from 'react-icons/bs'

const YouTube = () => {
const [videoList, setVideoList] = useState([])
const [img2, setImg2] = useState([])
useEffect(() => {

    getUser();
    async function getUser() {
let API_key = "AIzaSyAKKngjm9QaRGH9-IWw_kzYvcK8_9ZD2Co";
    let url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_key}`

    await axios.get(url)
        .then((res) => {
        setVideoList(res.data.items);
        res.data.items.map(async (el) => {
        let url2 = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${el.snippet.channelId}&key=${API_key}`
    await axios.get(url2)
        .then((ans) => {
        setImg2(prev => [...prev, { ProfilePic: ans.data.items[0].snippet.thumbnails.high.url, channelId: ans.data.items[0].id}]);
            })
        })
    })
    }
}, [])
        
const formatCash = n => {
if (n < 1e3) return n;
if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
const epochs = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
];

const getDuration = (timeAgoInSeconds) => {
    for (let [name, seconds] of epochs) {
        
        const interval = Math.floor(timeAgoInSeconds / seconds);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: name
            };
        }
    }
};

    const timeAgo = (date) => {
        // 2021-08-12
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
        const { interval, epoch } = getDuration(timeAgoInSeconds);
        // console.log(interval, epoch)
    const suffix = interval === 1 ? '' : 's';
    return `${interval} ${epoch}${suffix} ago`;
};

return (
    // <iframe width="560" height="315" src={`https://www.youtube.com/embed/${single.id.videoId}` } 
    //     title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> BsDot
    <div className='mainContainer'>
        <h2 className='heading'>Recommended</h2>
        <div className='singleVideoContainer'>
    {
        videoList.map((single, index) => {
        return <div key={index}>            
            <img className='channelImg' src={single.snippet.thumbnails.high.url} alt='channelImage' />
            <div>
            {
                img2.map((el, ind) => {
                if (el.channelId === single.snippet.channelId) {
                    return <div className='checking' key={ind}>
                        <div className='detailsContainer'>
                            <div>
                            <img className='profilePic' width='80px' src={el.ProfilePic} alt='ProfilePic' />
                            </div>
                            <div className='subDetailsContainer'>
                            <h4 className='videoTitle'>{single.snippet.title}</h4>
                                <p className='channelName' >{single.snippet.channelTitle}</p>
                                <div className='dotContainer'>
                                    <p>{formatCash(single.statistics.viewCount)} Views</p>
                                    <BsDot className='singleDot' />
                                <p>{timeAgo(single.snippet.publishedAt.toString().split('T'))}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    return null
                })
                }
                </div>
            </div>
        })
            }
        </div>
            
    </div>
)
}

export default YouTube;
