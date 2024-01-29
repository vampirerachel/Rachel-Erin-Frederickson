// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import Home from './components/routes/Home';
import WebDev from './components/routes/WebDev';
import Box from './components/body/Box';
import { BannerProvider } from './components/header/BannerContext';
import { useState } from 'react';

function App() {
    const [bannerColors, setBannerColors] = useState({
    base: '#2e1f1f',
    second: '#39404a',
    third: '#706b6b',
    fourth: '#394f5a',
    fifth: '#9e7f7f',
    sixth: '#b9a099',
    seventh: '#e7c9c9',
    eighth: '#e1dcdc',
    ninth: '#d2d2d2',
    tenth: '#c5c1c1',
    hover: '#ad9384',
    navBackground: '#b59797',
    navText: '#070707',
  });
const updateBannerColors = (newColors) => {
  console.log('New Colors:', newColors);
  setBannerColors(newColors);
};

  return (
    <I18nextProvider i18n={i18n}>
      <BannerProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home bannerColors={bannerColors} updateBannerColors={updateBannerColors} />}
            />
            <Route
              path="/webdev"
              element={<WebDev updateBannerColors={updateBannerColors} />}
            />
            <Route
              path="/box"
              element={<Box bannerColors={bannerColors} updateBannerColors={updateBannerColors} />}
            />
          </Routes>
        </BrowserRouter>
        </BannerProvider>
    </I18nextProvider>
  );
}

export default App;