import { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {

    let [tags, setTags] = useState([
        "For You",
        "Action",
        "Comedy",
        "Sci-Fi",
        "Thriller",
        "Drama",
        "Fantasy",
        "Mystery",
        "Horror",
        "Blockbuster",
        "Adventure",
        "Romance",
        "Crime",
        "Superhero"
    ])

  return (
    <>
        <div className={styles.tags}>

            {
                tags.map((tag)=>{
                    return <p className={styles.tag}>{tag}</p>
                })
            }

        </div>
    </>
  )
}

export default Tags
