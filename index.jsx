const Top = () => {
  const [isLogotypeInView, setIsLogotypeInView] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLogotypeInView(entry.isIntersecting);
      },
      { threshold: 0.166 }
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
            dgdgdgdgを始点として、デザイン、映像、音楽
            <br />
            などの分野で新たな道を切り開きます。
          </p>
          <p className="text">
            私たちは、共作による視点の拡張を通じて、
            <br />
            一人では成し得ないものづくりを追求します。
          </p>
        </div>
        <div className="container meaning">
          <h3>Meaning of Solid Point</h3>
          <p className="note">Solid Pointは日本語で「凝固点（物質が液体から固体へと変化する瞬間）」</p>
          <div className="items-wrapper">
            <div className="item">
              <img src="/public/images/icon-invention.svg" alt="" />
              <p className="caption">アイデアが具体的な形や作品として凝固する、ものづくりの転換点を表す</p>
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
            <a href="/project/radio" id="radio" className="item">
              <h3 className="genre">Radio 📻</h3>
              <div className="cover-image" />
              <p className="description">
                ゆるく雑談するラジオ
                <br />
                「ラジオのタイトルを入力」
              </p>
              <p className="collaborator">Collaborator: Tusk</p>
              <p className="more">さらに詳しく</p>
            </a>
            <div id="vision" className="item soon">
              <h3 className="genre">Visual 🎨</h3>
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
};

const target = document.getElementById("topPage");
const root = ReactDOM.createRoot(target);
root.render(<Top />);
