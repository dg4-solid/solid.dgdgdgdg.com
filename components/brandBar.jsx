const BrandBar = ({ type }) => {
  return (
    <div id="brandBar">
      <p className="copyright">&copy; dgdgdgdg Solid Point 2024</p>
      <div className="link-wrapper">
        <a href="https://www.dgdgdgdg.com" target="_blank" rel="noopener noreferrer">
          dgdgdgdg
        </a>
        {type === "footer" && <a href="mailto:solid@dgdgdgdg.com">Contact</a>}
      </div>
    </div>
  );
};