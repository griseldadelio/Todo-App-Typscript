import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./utils/translate/es/global.json";
import global_en from "./utils/translate/en/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
})

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);

