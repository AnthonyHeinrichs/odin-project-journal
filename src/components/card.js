import styles from './card.module.css'

const Card = (props) => {
  const timeArrived = props.dateArrived.split('-')
  const arrivalDate = new Date(timeArrived[0], timeArrived[1] - 1, timeArrived[2]).toDateString();

  const timeLeft = props.dateLeft.split('-')
  const departureDate = new Date(timeLeft[0], timeLeft[1] - 1, timeLeft[2]).toDateString();

  return (
    <div className={styles.card}>
      <div>
        <img src={props.cardImg} alt='place' className={styles.cardImg}/>
      </div>
      <div>
        <div className={styles.content}>
          <img src='/images/pointer.svg' alt='pointer' className={styles.pointer}/>
          <p className={styles.countryText}>{props.country}</p>
          <a href={props.mapsLink} className={styles.countryLink}>View on Google Maps</a>
        </div>
        <div>
          <h1 className={styles.locationText}>{props.city}</h1>
          <h2 className={styles.dates}>{arrivalDate} - {departureDate}</h2>
          <p className={styles.description}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
