import { NavBarProvider } from '../contexts/NavBarContext';

import type { NextPage } from 'next'
import { NavBar } from '../components/NavBar'
import styles from '../styles/pages/Home.module.css'
import { HomeTop } from '../components/HomeTop';
import { HomeRaffles } from '../components/HomeRaffles';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <NavBarProvider >
      <NavBar />
      <div className={styles.container}>
        <section>
          <HomeTop />
        </section>

        <section>
          <HomeRaffles />
        </section>  
        
      </div>
      <Footer />      
      </NavBarProvider>
    </>
  )
}

export default Home
