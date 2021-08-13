import React from 'react'
import { MdSubscriptions,MdOndemandVideo,MdVideoLibrary,MdWatchLater,MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { FaFire } from 'react-icons/fa';
import { BiHistory } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
// import { MdSubscriptions } from 'react-icons/md';
// import { MdSubscriptions } from 'react-icons/md';
// import { MdSubscriptions } from 'react-icons/md';
import './styles/Sidebar.css'

const Sidebar = () => {
    return (
        // <i class="fas fa-home"></i>
        <div className='bgColorSidebar'>
            <div className='currentIn'>
                <span >
                <AiFillHome />
                </span>
                <p>Home</p>
            </div>
            <div>
                <span>
                <FaFire />
                </span>
                <p>Trending</p>
            </div>
            <div>
                <span>
                <MdSubscriptions />
                </span>
                <p>Subscription</p>
            </div>
            <div>
                <span>
                <MdVideoLibrary />
                </span>
                <p>Library</p>
            </div>
            <div>
                <span>
                <BiHistory />
                </span>
                <p>History</p>
            </div>
            <div>
                <span>
                <MdOndemandVideo />
                </span>
                <p>Your videos</p>
            </div>
            <div>
                <span>
                <MdWatchLater />
                </span>
                <p>Watch Later</p>
            </div>
            <div>
                <span>
                <AiOutlineLike />
                </span>
                <p>Liked videos</p>
            </div>
            <div>
                <span>
                <MdKeyboardArrowDown />
                </span>
                <p>Show more</p>
            </div>
        </div>
    )
}

export default Sidebar
