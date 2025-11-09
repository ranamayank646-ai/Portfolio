import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function FadeIn({ children, delay = 0 }){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    const obs = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){ el.classList.add('inview'); obs.disconnect(); }
    }, { threshold: .2 });
    obs.observe(el); return ()=> obs.disconnect();
  }, []);
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >{children}</motion.div>
  );
}