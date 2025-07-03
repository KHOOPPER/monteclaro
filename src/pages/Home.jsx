import Hero from '../components/Hero';
import QuienesSomos from '../components/QuienesSomos';
import MisionVision from '../components/MisionVision';
import Galeria from '../components/Galeria';
import Proceso from '../components/Proceso';
import Contacto from '../components/Contacto';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollTo } from '../hooks/useScrollTo';

function Home() {
  const { refs, scrollTo } = useScrollTo();

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <div ref={refs.hero}><Hero /></div>
      <div ref={refs.quienesSomos}><QuienesSomos /></div>
      <div ref={refs.misionVision}><MisionVision /></div>
      <div ref={refs.galeria}><Galeria sectionRef={refs.galeria} /></div>
      <div ref={refs.proceso}><Proceso sectionRef={refs.proceso} /></div>
      <div ref={refs.contacto}><Contacto sectionRef={refs.contacto} /></div>
      <Footer />
    </>
  );
}

export default Home;
