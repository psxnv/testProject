import { useState } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import BannerContent from './components/BannerContent/BannerContent'; 
import './App.css';

const App = () => {
  const [showBannerContent, setShowBannerContent] = useState(false);

  // Управляем показом BannerContent по прогрессу скролла
  const handleBannerProgress = (progress) => {
    if (progress === 1) {
      setShowBannerContent(true);
    } else {
      setShowBannerContent(false);
    }
  };

  return (
    <>
      <Header whiteLogo={showBannerContent} />
      <Banner onProgress={handleBannerProgress} />
      {showBannerContent && <BannerContent />}
      <div className='mainContent'>
        <h1>Основной контент сайта</h1>
      </div>
    </>
  );
};


export default App;