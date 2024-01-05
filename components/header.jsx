function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuFunction = () => setOpenMenu(!openMenu);
  const menuReset = () => setOpenMenu(false);
  // let openState = openMenu ? "is-open" : "";

  // 開いた状態のテスト
  let openState = "is-open";

  return (
    <header>
      <div className="outside">
        <a href="" className="logo" onClick={() => menuReset()} />
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

      <div className={`inside ${openState}`}>inside</div>
    </header>
  );
}
