function App() {
  const [isLogotypeInView, setIsLogotypeInView] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLogotypeInView(entry.isIntersecting);
      },
      { threshold: 0.166 } // 50%以上が表示されたときにtrueを返す
    );

    const logotype = document.getElementById("logotype");
    if (logotype) {
      observer.observe(logotype);
    }

    return () => {
      if (logotype) {
        observer.unobserve(logotype);
      }
    };
  }, []);

  return (
    <main>
      <Header displayLogo={!isLogotypeInView} />
      <section id="firstview" className="shape">
        <div className="bg-graphic"></div>
        <span className="title">
          <p className="slogan">想像の閃きが実体を得る凝固点</p>
          <h1 id="logotype" />
        </span>
      </section>
      <section id="about">
        <div className="container overview">
          <h2 className="title">About</h2>
          <h3>Overview</h3>
          <img src="/public/images/ogp.jpg" alt="" />
          <p className="text">
            dgdgdgdgが主宰する合作プロジェクト
            <br />
            硬くてクールなモノづくりをしよう
          </p>
        </div>
        <div className="container meaning">
          <h3>Meaning of Solid Point</h3>
          <p className="note">Solid Pointは日本語で「凝固点（物質が液体から固体へと変化する瞬間）」</p>
          <div className="items-wrapper">
            <div className="item">
              <img src="/public/images/icon-invention.svg" alt="" />
              <p className="caption">アイデアが具体的な形や作品として凝固する、創作行為の転換点を表す</p>
            </div>
            <div className="item">
              <img src="/public/images/icon-balance.svg" alt="" />
              <p className="caption">創造と実行、革新と安定、変化（液体から固体）と持続性の間のバランスをとる状態を表す</p>
            </div>
          </div>
        </div>
      </section>
      <section id="project">
        <div className="container">
          <h2 className="title">Project</h2>
          <div className="items-wrapper">
            <div id="etrt" className="item">
              <h3 className="genre">📻&nbsp;Radio</h3>
              <div className="cover-image" />
              <p className="description">
                Collaborator: Tusk
                <br />
                <br />
                ゆるく雑談するラジオ
                <br />
                「ラジオのタイトルを入力」
                <br />
                <br />
                <a href="https://www.youtube.com/@EtRt" target="_blank" rel="noopener noreferrer">
                  YouTubeチャンネル
                </a>
                <br />
                <a href="https://www.radio.dgdgdgdg.com/" target="_blank" rel="noopener noreferrer">
                  おたよりフォーム
                </a>
              </p>
            </div>
            <div id="soon" className="item">
              <h3 className="genre">🎨&nbsp;Graphic</h3>
              <div className="cover-image" />
              <p className="description">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
      <section id="endview" className="shape">
        <div className="bg-graphic"></div>
      </section>
      <BrandBar type="footer" />
    </main>
  );
}

const target = document.getElementById("app");
const root = ReactDOM.createRoot(target);
root.render(<App />);
