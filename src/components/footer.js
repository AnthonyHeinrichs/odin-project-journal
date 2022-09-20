import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.center}>
      <p>Copyright © 2022 AnthonyHeinrichs</p>
      <a href="https://github.com/AnthonyHeinrichs" target="_blank" rel="noreferrer">
        <img className={styles.github} src="/images/github.png" alt="github"></img>
      </a>
    </div>
  </footer>
  )
}

export default Footer