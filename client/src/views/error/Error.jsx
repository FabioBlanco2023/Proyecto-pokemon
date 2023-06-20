import React from 'react'
import styles from './Error.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Error = () => {
  return (
    <div className={styles.main}>
        <div className={styles.cont}>
            <h1 className={styles.main404}><span className={styles.four}> 4</span> <span className={styles.four}> 0</span> <span className={styles.four}>4</span></h1>
            <h3 className={styles.notfound}>Page not found</h3>        
        </div>
        <div>
            <Link to='/home'>
            <button className={styles.btn}>Go back</button>
            </Link>   
        </div>
    </div>
  )
}

export default Error