import { useRef, useState } from "react";
import style from "../Components Style/UserForm.module.css"
import { TbPencil } from "react-icons/tb";
import { userProfileHandler } from "../Redux/Slices Folder/UserProfile";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserForm() {
  let editImg = useRef()
  let userNameRef = useRef()
  let [preview, setPreview] = useState(null);
  let [error , seterror] = useState('')
  let dispatch = useDispatch()
  let navigate = useNavigate()

 function openFile(){ editImg.current.click() }

 function displayError(txt){
  seterror(txt)
  setTimeout(()=>{
    seterror("")
  },2000)
 }

 function handleFile(e){
   let reader = new FileReader()
   reader.readAsDataURL(e.target.files[0])
  reader.onload = () =>{
    setPreview(reader.result)
  }
 }

 function checkSubmit(){
   if (!preview) {
     displayError("Image Is REQUIRED!")
     return;
   }
  else if(!userNameRef.current.value){
    displayError("Name Is REQUIRED!")
    return;
  }
  else{
    let userInfo = {
      userImg : preview,
      userName : userNameRef.current.value,
    }
    dispatch(userProfileHandler(userInfo))
    localStorage.setItem("isLogin" , "true")
    navigate("/")
  }
 }

  return(

    <div className={style["form-container"]}>

      <div className={style["form-card"]}>
      <div className={style["img-container"]}>
        <div className={style["user-img-wrapper"]}>
            <img src={preview || "https://avatar.iran.liara.run/public/49"} />
          <input onChange={handleFile} ref={editImg} style={{display: "none"}} type="file" />
          <p onClick={openFile} className={style["edit-img"]}><TbPencil /></p>
        </div>
      </div>
      <p className={style["error-msg"]}>{error}</p>
      <div className={style["nameInput-enterBtn"]}>
        <input ref={userNameRef} type="text" spellCheck="false" placeholder="Enter Your Name" />
        <button onClick={checkSubmit} className={style["enter-btn"]}>ENTER</button>
      </div>
    </div>
      
  </div>
)
}

export default UserForm;