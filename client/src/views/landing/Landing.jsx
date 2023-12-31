import React from 'react'
import {Link} from 'react-router-dom'
import style from './Landing.module.css'
import btnImage from "../../images/startBtn.png"

const Landing = () => {
  return (
    <div className={style.bg}>
      <h1 className={style.title}>Become a Pokemon Master!</h1>
        <Link to="/home" className={style.btn}>
        <img src={btnImage} alt="" className={style.btnImg}/>
        </Link>
    </div>
  )
}

export default Landing