function App() {
  return (
    <main>
      <Header />
      <section id="firstview" className="shape">
        <div className="bg-graphic"></div>
        <h1 className="title">Solid Point</h1>
      </section>
      <section id="about">
        <div className="container overview">
          <img src="/public/images/ogp.jpg" alt="" />
          <p className="text">
            dgdgdgdgが主宰する合作プロジェクト
            <br />
            硬くてクールなモノづくりをしよう
          </p>
        </div>
        <div className="container meaning">
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
              <div className="cover-image" />
              <h3 className="genre">📻&nbsp;Radio</h3>
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
              <div className="cover-image" />
              <h3 className="genre">🎨&nbsp;Graphic</h3>
              <p className="description">Coming soon...</p>
            </div>
          </div>
        </div>
      </section>
      <section id="endview" className="shape">
        <div className="bg-graphic"></div>
      </section>
      <Footer />
    </main>
  );
}

const target = document.getElementById("app");
const root = ReactDOM.createRoot(target);
root.render(<App />);
