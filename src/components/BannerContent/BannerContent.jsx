import styles from './bannerContent.module.scss';
import logoWhite from '../../assets/logo.svg'; 

const BannerContent = () => (
  <div className={styles.bannerContent}>
    <img src={logoWhite} alt="ROYAL" className={styles.bannerLogo} />
    <div className={styles.bannerText}>
      <h2>РОСКОШНЫЙ ПАНСИОНАТ <span>ROYAL RESORT</span> НА БЕРЕГУ ЖИВОПИСНОГО ОЗЕРА ИССЫК-КУЛЬ.</h2>
      <p>Здесь, среди живописных гор, вы сможете насладиться незабываемым отдыхом и комфортом наивысшего уровня.</p>
    </div>
    <div className={styles.bannerCarousel}>
      <span className={styles.bannerSlideNum}>01/06</span>
      <div className={styles.bannerArrows}>
        <button>{'<'}</button>
        <button>{'>'}</button>
      </div>
    </div>
  </div>
);

export default BannerContent;