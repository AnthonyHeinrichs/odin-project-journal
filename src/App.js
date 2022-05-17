import styles from './app.module.css'
import Navbar from './components/navbar'
import Card from './components/card'

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.card}>
        <Card />
      </div>
    </>
  );
}

export default App;
