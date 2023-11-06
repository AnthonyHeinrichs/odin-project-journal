import styles from './footer.module.css'

const Footer = () => {
  return (
  <>
    <div className={styles.center}>
      <p>All source code can be found on my GitHub <span>&#8658;</span></p>
      <a href="https://github.com/AnthonyHeinrichs" target="_blank" rel="noreferrer">
        <img className={styles.github} src="/images/github.png" alt="github"></img>
      </a>
    </div>
    <footer className={styles.footer}>
      <div className={styles.center}>
        <p>Copyright © 2023 AnthonyHeinrichs</p>
      </div>
    </footer>
  </>
  )
}

export default Footer