import style from "./Landing.module.css";
import NavHome from "../../Components/Navbar/NavHome";

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <video
        className={style.video}
        src="https://cdn.coverr.co/videos/coverr-a-dog-snifiing-and-scratching-its-back-on-the-grass-1326/1080p.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
      />
      <div className={style.generalContent}>
        <section className={style.secTwo}>
          <h1>Welcome to the dog app</h1>
          <p>People say dogs, are man's best friend</p>
          <p>
            If that's your case, click "home" to learn everything about them
          </p>
        </section>
        <section className={style.secOne}>
          <NavHome/>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
