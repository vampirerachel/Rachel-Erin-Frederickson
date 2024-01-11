
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import Home from './components/routes/home';


function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
