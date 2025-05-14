// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary:'#59A7AA',
        },
        fonts: {
          primary:'Poppins, sans-serif',
        }
      },
    },
  },
});