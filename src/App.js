import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import YouTube from './components/Youtube'
import './components/styles/App.css'

const App = () => {
  return (
    <div className='bgColorApp'>
      <div>
      <Navbar />
      </div>
      <div className='displaySize'>
        <Sidebar />
        <YouTube />
      </div>
    </div>
  )
}

export default App






// import React, {useState, useEffect } from 'react'
// import './index.css';
// import axios from 'axios';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// // var cookie = require('cookie');
// const App = () => {
//   const [videoList, setVideoList] = useState([])
//   const [img2, setImg2] = useState([])
//   useEffect(() => {
// //     getUserId();
    
// //     async function getUserId() {
// //   // let API_key = "AIzaSyBfsoSL5ZBha7XbSLm_dkrBIHOtT0QqCTA";
// //     // "&field=items(snippet,statistics)"
// //     //  "&part=snippet&maxResults=" + maxResults
// //   let API_key = "AIzaSyAKKngjm9QaRGH9-IWw_kzYvcK8_9ZD2Co";
// //     // let arr = ['7lCDEYXw3mM',"oxMzsDsCPqQ", "P1dMJDb04N0"]
// //   let maxResults = 10;
// // //  let url = "https://www.googleapis.com/youtube/v3/videos?id=P1dMJDb04N0&key="
// //         // + API_key + "&part=snippet,statistics"
// //     // arr.forEach(async (el) => {
// //       // let url = `https://www.googleapis.com/youtube/v3/search?&key=${API_key}&part=snippet`
// //       let url = `https://youtube.googleapis.com/youtube/v3/channelBanners/insert?key={API_key}`

// //       // YOUR_API_KEY]
    
// //       // try {
// //       await axios.get(url)
// //         .then((res) => {
// //           console.log(res.data.items, '222222222222');
// //           setVideoIds(res.data.items);
// //           })
// //     // } catch (error) {
// //     //   console.error(error);
// //     // }
// //     // })
    
// //     }

//     getUser();
//     async function getUser() {
//   let API_key = "AIzaSyAKKngjm9QaRGH9-IWw_kzYvcK8_9ZD2Co";
//       let url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_key}`
//       // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

// // Authorization: Bearer [YOUR_ACCESS_TOKEN]
// // Accept: application/json

//       await axios.get(url)
//         .then((res) => {
//           // console.log(res.data.items.map((el) => el.snippet.channelId));
//           setVideoList(res.data.items);
//           res.data.items.map(async (el) => {
//             // console.log(el.snippet.channelId)
//           let url2 = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${el.snippet.channelId}&key=${API_key}`
//       await axios.get(url2)
//         .then((ans) => {
//           setImg2(prev => [...prev, { ProfilePic: ans.data.items[0].snippet.thumbnails.high.url, channelId: ans.data.items[0].id}]);
//               // console.log(ans.data.items[0].snippet)
//           // console.log(ans.data.items[0].id, 'images')
//             })
//           })
//           // setVideoList(prev => [...prev,res.data.items[0]]);
//     })
//     }


    
//   }, [])

// //   async function getUser() {

// //   let API_key = "AIzaSyAKKngjm9QaRGH9-IWw_kzYvcK8_9ZD2Co";
// //     let arr = ['7lCDEYXw3mM',"oxMzsDsCPqQ", "P1dMJDb04N0"]

// //     videoIds.forEach(async (el) => {
// //           console.log(el.id.videoId);
      
// //       let url = `https://www.googleapis.com/youtube/v3/videos?id=${el.id.videoId}&key=${API_key}&part=snippet,statistics`
// //       await axios.get(url)
// //         .then((res) => {
// //           console.log(res.data.items);
// //           setVideoList(prev => [...prev,res.data.items[0]]);
// //           })
// //     })
// // }

//   const formatCash = n => {
//   if (n < 1e3) return n;
//   if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
//   if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
//   if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
//   if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
//   };
//   const epochs = [
//     ['year', 31536000],
//     ['month', 2592000],
//     ['day', 86400],
//     ['hour', 3600],
//     ['minute', 60],
//     ['second', 1]
// ];

// const getDuration = (timeAgoInSeconds) => {
//     for (let [name, seconds] of epochs) {
//         const interval = Math.floor(timeAgoInSeconds / seconds);
//         if (interval >= 1) {
//             return {
//                 interval: interval,
//                 epoch: name
//             };
//         }
//     }
// };

// const timeAgo = (date) => {
//     const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
//     const {interval, epoch} = getDuration(timeAgoInSeconds);
//     const suffix = interval === 1 ? '' : 's';
//     return `${interval} ${epoch}${suffix} ago`;
// };

// // console.log(formatCash(1230567689));

  
  
//   // console.log(img2, videoList);
//   return (
//     // 
//     // <iframe width="560" height="315" src={`https://www.youtube.com/embed/${single.id.videoId}` } 
//     //     title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> BsDot
//     <div>
//       <Navbar />
//       <Sidebar />
//       {
//         videoList.map((single, index) => {
//           // console.log(single.snippet.publishedAt)
//           return <div key={index}>            
//             <img width='200px' src={single.snippet.thumbnails.high.url} alt='channelImage' />
//             <div>
//               {
//                 img2.map((el, ind) => {
//                   if (el.channelId === single.snippet.channelId) {
//                     return <div key={ind}>
//                     <img width='80px' src={el.ProfilePic} alt='channelImage' />
//                     <h4>{single.snippet.title}</h4>
//                       <p>{single.snippet.channelTitle}</p>
//                       <p>{formatCash(single.statistics.viewCount)} Views</p>
//                       <p>{timeAgo(single.snippet.publishedAt.toString().split('T')[0])}</p>

//                       </div>
//                     }
//                   })
//                 }
//                 </div>
//                 </div>
//                 // <p>{single.snippet.publishedAt}</p>
//         })
//       }
//     </div>
//   )
// }

// export default App;
