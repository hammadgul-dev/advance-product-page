import style from "../Components Style/Footer.module.css"
import { FaRegCopyright } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
// import { FaMinus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={style.footer}>

        <div className={style["copyright-section"]}>
            <span className={style["copyright-icon"]}><FaRegCopyright /> </span>
            <span>2025</span>
            <span>- All rights reserved</span>
            <span className={style["heart-icon"]}><IoHeartSharp /></span>
        </div>

        <div className={style["footer-Links"]}>
          <li><NavLink to="/" className={({isActive})=> isActive ? style["active-link"] : "" }>HOME</NavLink></li>|
          <li><NavLink to="/about-us" className={({isActive})=> isActive ? style["active-link"] : "" }>ABOUT US</NavLink> </li>|
          <li><NavLink to="/contact-us" className={({isActive})=> isActive ? style["active-link"] : "" }>CONTACT US</NavLink> </li>
        </div>

    </div>
  )
}

export default Footer