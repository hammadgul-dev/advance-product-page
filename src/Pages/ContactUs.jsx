import { GoPaperAirplane } from "react-icons/go";
import style from "../Pages Style/ContactUs.module.css"
import { FaFrown, FaMeh, FaSmileBeam, FaSmile, FaGrinStars } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

function ContactUs() {
  let [dispalyMsg , setMsg] = useState("")
  let [review , userReview] = useState('')
  let userInfo = JSON.parse(localStorage.getItem("userInfo"))

  function reviewHandler(){
    userReview("")
    if(review === ""){
      setMsg("Plese Enter Some Review!")
      setTimeout(()=>{ setMsg("") },2500)
    }
    else{
      setMsg("Thanks For Review")
      setTimeout(()=>{ setMsg("") },2500)
    }
  }

  function handleRating(e){
  let targetElement = e.target;
  targetElement.style.color = "red";
  setTimeout(()=> {
    targetElement.style.color = "";
  }, 1500);
}


  return (
    <div className={style["contact-wrapper"]}>

    <div className={style["contact-box"]}>
      <div className={style["project-rating"]}>
        <h2>Project Rating</h2>
        <div onClick={handleRating} className={style["emoji-box"]}>
          <span><FaFrown /></span>
          <span><FaMeh /></span>
          <span><FaSmileBeam /></span>
          <span><FaSmile /></span>
          <span><FaGrinStars /></span>
        </div>
      </div>
      <div className={style.wrapper}>
      <div className={style["review-container"]}>
        <textarea 
        name="Project Review" 
        rows="5" cols="50" spellCheck="false" 
        placeholder="Leave a Review..." 
        value={review}
        onChange={(e)=> userReview(e.target.value)}></textarea>
      </div>
      <button className={style["send-btn"]} onClick={reviewHandler} >SEND</button>
    </div>
      </div>

      <div className={style[dispalyMsg && "display-msg"]}>
        { dispalyMsg && <p>{dispalyMsg} <span>{userInfo.userName}</span></p> }
      </div>

    </div>
  )
}

export default ContactUs