import style from "./WaitingPage.module.css";

const Waitingpage = () => {
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
          <h1>Loading content ...</h1>
        </section>
      </div>
    </div>
  );
};

export default Waitingpage;
