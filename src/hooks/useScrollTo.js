import { useRef } from 'react';

export function useScrollTo() {
  const refs = {
    hero: useRef(null),
    quienesSomos: useRef(null),
    misionVision: useRef(null),
    galeria: useRef(null),
    proceso: useRef(null),
    contacto: useRef(null),
  };

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return { refs, scrollTo };
}
