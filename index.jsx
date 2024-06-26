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
              <p className="partner">Partner: Tusk</p>
              <p className="more">さらに詳しく</p>
            </a>
            <a href="/project/visual" id="visual" className="item">
              <h3 className="genre">Visual 🎨</h3>
              <div className="cover-image" />
              <p className="description">2024年11月に開催される、デザインフェスタ vol.60への出店を目指す</p>
              <p className="partner">Partner: 紳士</p>
              <p className="more">さらに詳しく</p>
            </a>
          </div>
        </div>
      </section>

      <section id="contactForm">
        <div className="container">
          <h2 className="title">
            Contact<span> to Solid Point</span>
          </h2>
          <Form
            destination={{
              googleFormLink: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe9M-6DYyXZuSSf8gm2S_JvT3yQDsMrHyJWekkBM4CM_QKqkg/formResponse",
              inputNames: {
                name: "entry.1803120711",
                email: "entry.506070991",
                select: "entry.174843426",
                textarea: "entry.1457978395",
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
      <section id="endview" className="shape">
        <div className="bg-graphic" />
      </section>
      <BrandBar />
    </main>
  );
};

const target = document.getElementById("topPage");
const root = ReactDOM.createRoot(target);
root.render(<Top />);
