import style from "../Pages Style/AboutUs.module.css";

function AboutUs() {
  return (
    <div className={style["about-wrapper"]}>
      <div className={style["about-box"]}>
        <h2>About This Project</h2>
        <p>
        Thanks for visiting our project! I built this project using 
        <span> React + Redux Toolkit & LocalStorage</span> with <span>custom CSS</span> — hope you enjoy exploring it.
      </p>
      </div>
    </div>
  );
}

export default AboutUs;
