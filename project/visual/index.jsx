const Visual = () => {
  return (
    <div>
      <section id="article-header">
        <a className="back" href="/">
          Back to Top
        </a>
        <div className="container">
          <h1>Visual 🎨</h1>
          <img src="/public/images/visual-cover.png" alt="" className="cover" />
        </div>
      </section>
      {/* <section id="about">
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
          <div className="button-wrapper">
            <Button href="https://youtube.com/@EtRt" text="YouTube Channel" external={true} />
          </div>
        </div>
      </section> */}
      <section id="member">
        <div className="container">
          <h2 className="title">Member</h2>
          <div className="items-wrapper">
            <div id="shinshi" className="item">
              <div className="profile-image" />
              <h3 className="name">紳士</h3>
              <p className="position">Illustrator</p>
              <div className="social-wrapper">
                <a href="https://x.com/@shinshi00" target="_blank" rel="noopener noreferrer">
                  <img src="/public/images/icon/x.svg" alt="" />
                </a>
              </div>
            </div>
            <div id="dgdgdgdg" className="item">
              <div className="profile-image" />
              <h3 className="name">dgdgdgdg</h3>
              <p className="position">Designer</p>
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

      <section id="contactForm">
        <div className="container">
          <h2 className="title">
            Contact<span> to Visual</span>
          </h2>
          <Form
            destination={{
              googleFormLink: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdz0BKKJw5EZX7y1YuT6gVZAoZLLBsN0soWC5mqdJyd3qogKQ/formResponse",
              inputNames: {
                name: "entry.183923869",
                email: "emailAddress",
                select: "entry.1363996325",
                textarea: "entry.1860530349",
              },
              autoCompletes: [
                {
                  name: "依頼",
                  message: "依頼内容, 趣旨・目的, 要望など",
                },
                {
                  name: "その他",
                },
              ],
            }}
          />
        </div>
      </section>

      <BrandBar />
    </div>
  );
};

const target = document.getElementById("visualPage");
const root = ReactDOM.createRoot(target);
root.render(<Visual />);
