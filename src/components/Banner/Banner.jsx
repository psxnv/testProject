import React, { useRef } from 'react';
import styles from './banner.module.scss';
import bannerImg from '../../assets/bannerImg.png';

const Banner = ({ onUnlockScroll }) => {
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const unlockedRef = useRef(false);

  const handleScroll = (e) => {
    const scrollY = e.target.scrollTop;
    const maxScroll = 400;
    const progress = Math.min(scrollY / maxScroll, 1);

    const scale = 1.5 - progress * 0.5;
    if (bgRef.current) {
      bgRef.current.style.transform = `scale(${scale})`;
    }

    if (titleRef.current) {
      titleRef.current.style.transform = `translateY(-${progress * 120}px)`;
      titleRef.current.style.opacity = `${1 - progress}`;
    }

    if (progress === 1 && !unlockedRef.current) {
      unlockedRef.current = true;
      if (onUnlockScroll) onUnlockScroll();
    }
  };

  return (
    <div className={styles.bannerScroll} onScroll={handleScroll}>
      <div className={styles.banner}>
        <img
          ref={bgRef}
          src={bannerImg}
          alt="banner"
          className={styles.bannerBg}
          style={{ transform: 'scale(1.5)' }}
        />
        <div
          ref={titleRef}
          className={styles.bannerTitle}
        >
          ROYAL
        </div>
      </div>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
};

export default Banner;