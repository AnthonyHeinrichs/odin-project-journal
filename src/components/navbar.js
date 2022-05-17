import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src='/images/world.svg' alt='logo' className={styles.logo} />
      <p className={styles.navText}> my travel journal. </p>
    </div>
  )
}

export default Navbar
