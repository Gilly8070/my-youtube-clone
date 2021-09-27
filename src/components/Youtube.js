import React, {useState, useEffect } from 'react'
// import './index.css';
import axios from 'axios';
import './styles/Youtube.css'
import {BsDot} from 'react-icons/bs'
// import YoutubeEmbedVideo from "youtube-embed-video";

const YouTube = () => {
    const [videoList, setVideoList] = useState([])
    const [img2, setImg2] = useState([])
    // const [check, setCheck] = useState([localStorage.getItem('youtubeData2')]);
    useEffect(() => {
        getUser();
        async function getUser() {
            /////// PROJECT NAME youtube2 from shaikhgulrez8070@gmail.com //////////
            let API_key = "AIzaSyDhmmOWBP2F2rw5k17vYLpM9gvtFCAQOeA";
            let maxResults = 15;
            // let arr = [];
            let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_key}&maxResults=${maxResults}`
            // let url = 'ssss'
            await axios.get(url)
                .then((res) => {
                    setVideoList(res.data.items);
                    // localStorage.setItem('youtubeData1', res.data.items);
                    // console.log(localStorage.getItem('youtubeData1'), check, res.data.items)
                    !img2.includes(res.data.items.map((el) => el.snippet.channelId)) &&
                        res.data.items.forEach(async (el, index) => {
                            let url2 = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${el.snippet.channelId}&key=${API_key}`
                            await axios.get(url2)
                                .then((ans) => {
                                    // console.log(ans);
                                    // arr.push({ ProfilePic: ans.data.items[0].sniet.thumbnails.high.url, channelId: ans.data.items[id})
                                    // if (img2.length !==
                                    // img2.map((el, ind) => {
                                    // console.log(el.channelId, ind + 1)
                                    // console.log(res.data.items.sort())
                                    // console.log(el.snippet.channelId, index+1)
                                    // })
                                    // if (img2 !== undefined && videoList !== undefined &&!img2.find((el) => el !== undefined &&  el.channelId === el.snippet.channelId)) {
                                    setImg2(prev => [...prev, { channelId: ans.data.items[0].id, ProfilePic: ans.data.items[0].snippet.thumbnails.high.url }]);

    // localStorage.setItem('youtubeData2', [...img2,  { channelId: ans.data.items[0].id, ProfilePic: ans.data.items[0].snippet.thumbnails.high.url }]);

                                    // }
                                    // }
                
                                    // setImg2([{ Profile ans.data.items[0].snippet.thumbnails.high.url, channelId: ansa.items[0].id }])
                                    // console.log(ans.data.it
                                }).catch(e => {
                                console.log('error22222>>>>>', e)
                            })
                            // setImg2(arr)
                            // console.log(arr)
                        })
                }).catch(e => {
                    console.log('error>>>>>', e)
                })
            // console.log(videoList);
        
        }
    }, [])
    // console.log(img2, videoList);
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

    // console.log(img2.map((el) => console.log(el)))
    // let findOne;
    if (img2.map((el) => el !== undefined)) {
        // console.log('ee')
    }
    let arr = [];
    let arr1 = [];
    videoList.forEach((single, index) => {
        img2.map((el, ind) => {

            if (el.channelId === single.snippet.channelId && !arr.includes(single.snippet.channelId)) {
                // console.log(single.snippet.channelId, el.channelId)
                // console.log(arr)
                arr.push(el.channelId);
                arr1.push(el)
            }
            return null;
        })
            // console.log(single.snippet.channelId, ind
        
        // console.log(found);
        // if (el.channelId === single.snippet.channelId) {
            // }
            // if (found) {
            // console.log(single.snippet.channelId)
        // }
    })
        window.addEventListener('scroll', e => {
        // console.log('44')

    })
    // console.log('---------------------', arr)
    // console.log(img2.map((el) => el.channelId))
return (
    // <iframe width="560" height="315" src={`https://www.youtube.com/embed/${single.id.videoId}` } 
    //     title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> BsDot
    <div className='mainContainer'>
        <h2 className='heading'>Recommended</h2>
{/* <YoutubeEmbedVideo videoId="RnDC9MXSqCY" suggestions={false} /> */}
        <div className='singleVideoContainer'>
            {
                videoList.map((single, index) => {
                    // console.log(single.snippet.channelId, videoList.length)
                    // console.log(index+1)
                    return <div key={index}>
                        <img className='channelImg' src={single.snippet.thumbnails.high.url} alt='channelImage' />
                        <div>
                            {
                                // let ans = img2.map((el) => el.channelId)
                                // console.log(img2.find((el, ind) => el.channelId === single.snippet.channelId)) 
                                // console.log(img2[0], '-----')
                                // img2.find(el => {
                                //     if (el.channelId === single.snippet.channelId) {
                                //         // console.log(el)
                                //     }
                                // }
                                // )
                                
                        }
                            {
                                // let find = img2.find(ele => (ele.channelId))
                            }
                        
                            {
                                arr1.map((el, ind) => {
                                    if (el.channelId === single.snippet.channelId) {
                                        // console.log(el.channelId, single.snippet.channelId)
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
                                                <p className='hoursAgo'>{timeAgo(single.snippet.publishedAt.toString().split('T'))}</p>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                    }
                                    return null;
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
