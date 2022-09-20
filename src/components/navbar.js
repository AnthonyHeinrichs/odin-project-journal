import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src='/images/odin-icon.svg' alt='logo' className={styles.logo} />
      <p className={styles.navText}>The Odin Project Journal. </p>
    </div>
  )
}

export default Navbar
