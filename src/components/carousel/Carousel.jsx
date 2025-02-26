import styles from './carousel.module.css'


const Carousel = () => {

  return (
    <>
        <div className={styles.slider} style={{backgroundColor: "#060707"}}>
          <img style={{alignItems: "center", width: "100%", height: "900px", borderRadius: "300px", padding: "40px 90px", backgroundColor: "#060707"}} src='https://rumblevfx.com/wp-content/uploads/2022/12/TC5_new_button.jpg'/>
        </div>
    </>
  )
}

export default Carousel
