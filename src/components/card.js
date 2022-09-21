import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <a href={props.projectLink} target="_blank"  rel="noopener noreferrer">
          <img src={props.cardImg} alt='place' className={styles.cardImg}/>
          <div className={styles.cardDetails}>
            <h2 className={styles.projectTitle}>{props.title}</h2> 
            <div>
              <h2 className={styles.languages}>{props.languages}</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Card
