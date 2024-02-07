const Radio = () => {
  return (
    <div>
      <section id="article-header">
        <a className="back" href="/">
          Back to Top
        </a>
        <div className="container">
          <h1>Radio 📻</h1>
          <img src="/public/images/radio-cover.png" alt="" className="cover" />
        </div>
      </section>
      <section id="about">
        <div className="container">
          <h2 className="title">About</h2>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=UURz6N_gsMHfNhvLOGMEQtjg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="text">
            ゆるく雑談するラジオ
            <br />
            「ラジオのタイトルを入力」
          </p>
          <Button href="https://youtube.com/@EtRt" text="YouTube Channel" external={true} />
        </div>
      </section>
      <section id="member">
        <div className="container">
          <h2 className="title">Member</h2>
          <div className="items-wrapper">
            <div id="tusk" className="item">
              <div className="profile-image" />
              <h3 className="name">Tusk</h3>
              <p className="position">Personality</p>
              <div className="social-wrapper">
                <a href="https://x.com/@Tusk_15679" target="_blank" rel="noopener noreferrer">
                  <img src="/public/images/icon/x.svg" alt="" />
                </a>
                <a href="https://instagram.com/tusk_15679" target="_blank" rel="noopener noreferrer">
                  <img src="/public/images/icon/instagram.svg" alt="" />
                </a>
              </div>
            </div>
            <div id="dgdgdgdg" className="item">
              <div className="profile-image" />
              <h3 className="name">dgdgdgdg</h3>
              <p className="position">Personality</p>
              <div className="social-wrapper">
                <a href="https://x.com/@dg4_design" target="_blank" rel="noopener noreferrer">
                  <img src="/public/images/icon/x.svg" alt="" />
                </a>
                <a href="https://misskey.design/@dg4_design" target="_blank" rel="noopener noreferrer">
                  <img src="/public/images/icon/misskey.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/dg4_design" target="_blank" rel="noopener noreferrer">
                  <img src="/public/images/icon/instagram.svg" alt="" />
                </a>
                <a href="https://bsky.app/profile/dgdgdgdg.com" target="_blank" rel="noopener noreferrer">
                  <img src="/public/images/icon/bsky.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandBar type="footer" />
    </div>
  );
};

const target = document.getElementById("radioPage");
const root = ReactDOM.createRoot(target);
root.render(<Radio />);
