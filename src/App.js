import styles from './app.module.css'
import Navbar from './components/navbar'
import Card from './components/card'
import Footer from './components/footer'
import projects from './data'

function App() {

  const cards = projects.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className={styles.pageContainer}>
      <div>
        <Navbar />
      </div>
      <div className={styles.card}>
        {cards}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
