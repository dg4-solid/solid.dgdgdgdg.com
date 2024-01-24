import React from 'react';
import '@/styles/components/brandBar.sass';

interface BrandBarProps {
  type?: string;
}

const BrandBar: React.FC<BrandBarProps> = ({ type }) => {
  return (
    <div id='brandBar'>
      <p className='copyright'>&copy; dgdgdgdg Solid Point 2024</p>
      <div className='link-wrapper'>
        <a
          href='https://www.dgdgdgdg.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          dgdgdgdg
        </a>
        <a
          href='http://x.com/dg4_solid'
          target='_blank'
          rel='noopener noreferrer'
        >
          Official X
        </a>
        {type === 'footer' && <a href='mailto:solid@dgdgdgdg.com'>Contact</a>}
      </div>
    </div>
  );
};

export default BrandBar;
