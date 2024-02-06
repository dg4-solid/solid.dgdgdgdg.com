import { Helmet } from 'react-helmet';

import BrandBar from '@/components/brandBar';
import '@/styles/project.sass';
import Button from '@/components/button';

const Radio = () => {
  return (
    <>
      <Helmet>
        <title>ラジオのタイトルを入力 | dgdgdgdg Solid Point</title>
        <meta
          property='og:title'
          content='ラジオのタイトルを入力 | dgdgdgdg Solid Point'
        />
        <meta
          property='og:url'
          content='https://www.solid.dgdgdgdg.com/project/radio'
        />

        <meta
          property='og:image'
          content='https://www.solid.dgdgdgdg.com/images/radio-cover.png'
        />
      </Helmet>

      <section id='article-header'>
        <a className='back' href='/'>
          Back to Top
        </a>
        <div className='container'>
          <h1>Radio 📻</h1>
          <img src='/images/radio-cover.png' alt='' className='cover' />
        </div>
      </section>
      <section id='about'>
        <div className='container'>
          <h2 className='title'>About</h2>
          <p className='text'>
            ゆるく雑談するラジオ
            <br />
            「ラジオのタイトルを入力」
          </p>
          <Button
            href='https://youtube.com/@EtRt'
            text='YouTube Channel'
            external={true}
          />
        </div>
      </section>
      <section id='member'>
        <div className='container'>
          <h2 className='title'>Member</h2>
          <div className='items-wrapper'>
            <div id='tusk' className='item'>
              <div className='profile-image' />
              <h3 className='name'>Tusk</h3>
              <p className='position'>Personality</p>
              <div className='social-wrapper'>
                <a
                  href='https://x.com/@Tusk_15679'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/images/icon/x.svg' alt='' />
                </a>
                <a
                  href='https://instagram.com/tusk_15679'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/images/icon/instagram.svg' alt='' />
                </a>
              </div>
            </div>
            <div id='dgdgdgdg' className='item'>
              <div className='profile-image' />
              <h3 className='name'>dgdgdgdg</h3>
              <p className='position'>Personality</p>
              <div className='social-wrapper'>
                <a
                  href='https://x.com/@dg4_design'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/images/icon/x.svg' alt='' />
                </a>
                <a
                  href='https://misskey.design/@dg4_design'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/images/icon/misskey.svg' alt='' />
                </a>
                <a
                  href='https://instagram.com/dg4_design'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/images/icon/instagram.svg' alt='' />
                </a>
                <a
                  href='https://bsky.app/dgdgdgdg.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src='/images/icon/bsky.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandBar type='footer' />
    </>
  );
};

export default Radio;
