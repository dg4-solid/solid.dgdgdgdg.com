function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuFunction = () => setOpenMenu(!openMenu);
  const menuReset = () => setOpenMenu(false);
  let openState = openMenu ? "is-open" : "";

  return (
    <header>
      <div className="outside">
        <a href="/" className="logo" onClick={() => menuReset()}>
          <img src="/public/images/logo.png" alt="logo" />
        </a>
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
