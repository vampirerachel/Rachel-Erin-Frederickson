// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import Home from './components/routes/home';
import { BannerProvider } from './components/Header/BannerContext';
import WebDev from './components/routes/WebDev';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BannerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webdev" element={<WebDev />} />
          </Routes>
        </BrowserRouter>
      </BannerProvider>
    </I18nextProvider>
  );
}

export default App;
