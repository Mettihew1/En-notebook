import { Link } from 'react-router-dom'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <Link className={style.link} to={""}> <h3>Main</h3> </Link>
      <Link className={style.link}> <h3>Community</h3> </Link>
      <Link className={style.link} to={"account"}> <h3>Account</h3> </Link>
    </div>
  )
}

export default Footer