import LogoSVG from '../components/LogoSVG/LogoSVG';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ContactForm from '../components/ContactForm/ContactForm';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <LogoSVG />
      </Section>
      <Projects />
      <Technologies />
      <ContactForm />
    </Layout>
  );
};

export default Home;
