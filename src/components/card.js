import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={props.cardImg} alt='place' className={styles.cardImg}/>
      </div>
      <div>
        <div>
          <a href={props.projectLink} target="_blank" className={styles.projectTitle} rel="noopener noreferrer">
            {props.title}
          </a>
          <h2 className={styles.languages}>{props.languages}</h2>
          <p className={styles.description}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
