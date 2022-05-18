import styles from './app.module.css'
import Navbar from './components/navbar'
import Card from './components/card'
import travel from './data'

function App() {

  const cards = travel.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.card}>
        {cards}
      </div>
    </>
  );
}

export default App;
