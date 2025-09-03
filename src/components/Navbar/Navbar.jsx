import React, { useEffect ,useState,  useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' 
import search_icon from '../../assets/search_icon.svg'                     
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { Link } from 'react-router-dom'
import { auth, logout } from '../../firebase-js'
import { onAuthStateChanged } from 'firebase/auth'

const Navbar = () => {
  const navRef = useRef();
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    })

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    }
  }, [])

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt='' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
          <li>search by language</li>
        </ul>
      </div>

      <div className='navbar-right'>
        <img src={search_icon} alt="" className='icon' />
        <p>Children</p>

        <img src={bell_icon} alt="" className='icon' />
        <div className='navbar-profile'>
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            {user ? (
              <span onClick={handleLogout} style={{cursor: 'pointer'}}>Sign Out of Netflix</span>
            ) : (
              <Link to='/login'>Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
