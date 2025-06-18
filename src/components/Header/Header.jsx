import styles from './header.module.scss';

import themeIcon from '../../assets/themeImg.svg'
import languageIcon from '../../assets/languageImg.svg';
import logo from '../../assets/logo.svg';
import burger from '../../assets/burger.svg';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <header>
                <div className={styles.headerContent}> 
                    <img src={themeIcon}  className={styles.theme} />
                   <a href="">+996 556 111 444</a>
                   <button className={styles.languageToggle}>
                     <img src={languageIcon} alt="Language Icon" className={styles.languageIcon} />
                    <p>Русский</p>
                   </button>
                </div>
                <div className={styles.headerLogo}>
                    <img src={logo} alt="Logo" className={styles.logoImage} />
                </div>
                <div className={styles.burgerMenu}>
                    
                    <p>Квартиры и объекты</p>

                    <img src={burger} alt="burgerImg" />
                </div>
            </header>
        </div>
    );
};

export default Header;