import styles from './card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <img src='/images/rome.jpg' alt='place' className={styles.cardImg}/>
      </div>
      <div>
        <div className={styles.content}>
          <img src='/images/pointer.svg' alt='pointer' className={styles.pointer}/>
          <p className={styles.countryText}>Italy</p>
          <a href='https://goo.gl/maps/fN8rzjgsRnZiSe5a8' className={styles.countryLink}>View on Google Maps</a>
        </div>
        <div>
          <h1 className={styles.locationText}>Rome</h1>
          <h2 className={styles.dates}>12 Jan, 2021 - 24 Jan, 2021</h2>
          <p className={styles.description}>
          Rome is the capital city of Italy. It is also the capital of the Lazio region,
          the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
