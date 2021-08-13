import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { MdVideoCall } from 'react-icons/md'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaBell, FaUserCircle } from 'react-icons/fa'
// import { FaUserCircle } from 'react-icons/bi'
import logo from '../components/image/Logo_of_YouTube_.svg'
import './styles/Navbar.css'

const Navbar = () => {
    const handleRefresh = () => {
        console.log('ref');
        // document.location.reload()
    }
    return (
        // <i className="fas fa-bars fa-2x"></i>
        // <i className="fas fa-search"></i>
        // <i class="fas fa-video"></i>
        // <i class="fas fa-th"></i>
        // <i class="fas fa-bell"></i>
        // <i class="fas fa-user-circle"></i>
        <div className='bgColorNav'>
            <div className='imgContainer'>
                <GiHamburgerMenu className='hamburgerIcon'  />
                <img onClick={handleRefresh} className='youTubeImg' src={logo} alt="" />
            </div>
            <div className='inputContainer2'>
                <div className='inputContainer'>
                    <input className='inputSearch' type="text" placeholder='Search' />
                    <span className='inputBorder'></span>
                <BiSearch className='searchIcon'  />
                </div>
                </div>
                <div className='iconsContainer'>
                    <MdVideoCall className='videoIcon'   />
                    <BsGrid3X3GapFill className='gridIcon'  />
                    <FaBell className='bellIcon'  />
                    <FaUserCircle  className='userIcon' />
                    </div>
            </div>
    )
}

export default Navbar
