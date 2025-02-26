import styles from '../header/Header.module.css'
import JCLogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from "../../assets/ic_search.svg"
import voiceSearchIcon from "../../assets/voice-search.svg"
import userIcon from "../../assets/profile-user.png"
import Show from '../show/Show'
import { useState, useEffect } from 'react'

const Header = (props) => {

  let navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  let [searchTitle, setSearchTitle] = useState("");
  let [filteredMovies, setFilteredMovies] = useState([])

  useEffect(()=>{

    if(searchTitle!=="")
    {
        let filterMovies = props.movies.filter((movie)=>{
            return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0
        })

        setFilteredMovies(filterMovies)
    }
    else
    {
        setFilteredMovies([])
    }

    


},[searchTitle])


  return (
    <>
        <header className={styles.header}>

            <nav className={styles.navigation}>

              <div className={styles.logo}>

                  <img src={JCLogo} alt='logo'/>

                  <div className={styles.premium}>
                      <img src={crown} alt='crown logo'/>
                      <p>Go Premium</p>
                      
                  </div>
                  
              </div>

              <ul className={styles.navLinks}>
                {
                  navLinks.map((link) => {
                    return <li className={styles.navLink}>{link}</li>
                  })
                }
              </ul>

            </nav>

            <div className={styles.search}>

                <div className={styles.searchBox}>
                    <div className={styles.headerIcon}>
                      <img  src={searchIcon} alt='search icon'/>
                    </div>

                      <input type='text' 
                        onChange={(event)=>{
                        setSearchTitle(event.target.value)
                      }} 
                      
                      className={styles.searchInput} placeholder='Movies, Shows and More'/>
                    
                    <div className={styles.headerIcon}>
                      <img  src={voiceSearchIcon} alt='voice search icon'/>
                    </div>
                </div>

                <img className={styles.userIcon} src={userIcon} alt='user-icon'/>
            </div>
        </header>

        {
            filteredMovies.length!==0?(
                <div className={styles.searchResults}>
                            
                        {
                            filteredMovies.map((movie)=>{
                                return <Show movie={movie}/>
                            })
                        }

                </div>
            ):null
        }

       
    </>
  )
}

export default Header
