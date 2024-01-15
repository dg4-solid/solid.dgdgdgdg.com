function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuFunction = () => setOpenMenu(!openMenu);
  const menuReset = () => setOpenMenu(false);
  let openState = openMenu ? "is-open" : "";

  // メニューが開いている時はスクロールを禁止する
  React.useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openMenu]);

  return (
    <header>
      <div className="outside">
        <a href="#" className="logo" onClick={() => menuReset()} />
        <nav className={openState}>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="mailto:solid@dgdgdgdg.com">Contact</a>
        </nav>
        <div className="burger clickable" onClick={() => menuFunction()}>
          <svg className="line">
            <rect className={openState} />
            <rect className={openState} />
            <rect className={openState} />
          </svg>
        </div>
      </div>

      <div className={`inside ${openState}`}>
        <nav>
          <a href="#about" onClick={() => menuReset()}>
            About
          </a>
          <a href="#project" onClick={() => menuReset()}>
            Project
          </a>
          <a href="mailto:solid@dgdgdgdg.com" onClick={() => menuReset()}>
            Contact
          </a>
        </nav>

        <BrandBar />
      </div>
    </header>
  );
}
