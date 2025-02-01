import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from '../../styles';
import NavbarComponent from '../Navbar'; // Importando o componente Navbar
import HomePage from '../Home'; // Importando o componente HomePage
import ServicesPage from '../Services';
import EffectSection from '../EffectSection';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <NavbarComponent />
      <Container>
        <HomePage />
        <ServicesPage />
        <EffectSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
