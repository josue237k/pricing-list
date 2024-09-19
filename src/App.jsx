import PrincingCard from './components/PrincingCard/PricingCard'
import styles from "./App.module.css"
function App() {
  const Card = [
    {
      price: "Free",
      label: "Start-Up",
      image: "/images/bike.png",
      alt: "Moving bicycles with clouds",
    },
    {
      label: "Pro",
      price: "49$",
      duration: "/Year",
      image: "/images/car.png",
      alt: "Moving Car with clouds",
    },
    {
      label: "Enterprise",
      price: "99$",
      image: "/images/plane.png",
      alt: "Moving Plane with clouds",
    }
  ]
  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.info}>
        <h1 className={styles.heading}>choose your plan</h1>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, aliquam doloremque aperiam eveniet fugiat harum explicabo optio. Incidunt et quasi aut nis
        </p>
        </div>
      </div>
      <div className={`${styles.prices} container`}>
        {
          Card.map(cart => {
            return (
              <PrincingCard
                key={cart.label}
                label={cart.label}
                price={cart.price}
                image={cart.image}
                alt={cart.alt}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
