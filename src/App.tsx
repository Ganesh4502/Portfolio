// React import removed
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Capabilities from './components/sections/Capabilities';
import FeaturedWork from './components/sections/FeaturedWork';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';
import AboutMe from './components/sections/AboutMe';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Capabilities />
      <FeaturedWork />
      <Projects />
      <Journey />
      <Contact />
    </Layout>
  );
}

export default App;
