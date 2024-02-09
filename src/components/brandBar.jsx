const BrandBar = ({ type }) => {
  return (
    <div id="brandBar">
      <p className="copyright">&copy; dgdgdgdg Solid Point 2024</p>
      <div className="link-wrapper">
        <a href="https://www.dgdgdgdg.com" target="_blank" rel="noopener noreferrer">
          dgdgdgdg
        </a>
        <a href="https://x.com/dg4_solid" target="_blank" rel="noopener noreferrer">
          Official X
        </a>
        <a href="https://bsky.app/profile/solid.dgdgdgdg.com" target="_blank" rel="noopener noreferrer">
          Official Bluesky
        </a>
        {type === "footer" && <a href="mailto:solid@dgdgdgdg.com">Contact</a>}
      </div>
    </div>
  );
};
