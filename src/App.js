import './App.scss';
import './index.scss';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './components/About/RouteComponents/Intro';
import Experience from './components/About/RouteComponents/Experience';
import Internships from './components/About/RouteComponents/Internships';
import Graduation from './components/About/RouteComponents/Graduation';

// ── Advanced Custom Cursor ────────────────────────────────────────────────────
const CustomCursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [cursorState, setCursorState] = useState('default'); // default | hover | click | text

  // Dot: instant
  const dotX = useSpring(cursorX, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(cursorY, { stiffness: 1000, damping: 40 });

  // Ring: laggy follow
  const ringX = useSpring(cursorX, { stiffness: 100, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 100, damping: 22 });

  // Glow: even laggier
  const glowX = useSpring(cursorX, { stiffness: 50, damping: 18 });
  const glowY = useSpring(cursorY, { stiffness: 50, damping: 18 });

  // Trail refs
  const trailRef = useRef([]);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onDown  = () => setCursorState('click');
    const onUp    = () => setCursorState(s => s === 'click' ? 'default' : s);

    // Detect hoverable elements
    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorState('hover'));
        el.addEventListener('mouseleave', () => setCursorState('default'));
      });
      document.querySelectorAll('input, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => setCursorState('text'));
        el.addEventListener('mouseleave', () => setCursorState('default'));
      });
    };
    addHover();

    // Animated trail dots
    const TRAIL_COUNT = 8;
    const positions = Array(TRAIL_COUNT).fill({ x: -200, y: -200 });

    const animateTrail = () => {
      const updated = [...positions];
      updated[0] = { x: mousePos.current.x, y: mousePos.current.y };
      for (let i = 1; i < TRAIL_COUNT; i++) {
        updated[i] = {
          x: updated[i - 1].x + (positions[i].x - updated[i - 1].x) * 0.45,
          y: updated[i - 1].y + (positions[i].y - updated[i - 1].y) * 0.45,
        };
      }
      positions.splice(0, TRAIL_COUNT, ...updated);

      trailRef.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) translate(-50%, -50%)`;
        el.style.opacity = ((TRAIL_COUNT - i) / TRAIL_COUNT) * 0.25;
        const s = 1 - i * 0.08;
        el.style.width  = `${s * 8}px`;
        el.style.height = `${s * 8}px`;
      });

      rafRef.current = requestAnimationFrame(animateTrail);
    };
    rafRef.current = requestAnimationFrame(animateTrail);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  const ringSize   = cursorState === 'hover' ? 52 : cursorState === 'click' ? 24 : cursorState === 'text' ? 4 : 36;
  const dotSize    = cursorState === 'text'  ? 20 :  cursorState === 'hover' ? 6 : 10;
  const ringColor  = cursorState === 'hover' ? 'rgba(0,255,255,0.6)' : cursorState === 'click' ? 'rgba(124,58,237,0.8)' : 'rgba(0,255,255,0.35)';
  const ringBg     = cursorState === 'hover' ? 'rgba(0,255,255,0.06)' : 'transparent';
  const dotColor   = cursorState === 'text'  ? 'rgba(0,255,255,0.25)' : '#00ffff';

  return (
    <>
      {/* Trail dots */}
      {Array(8).fill(null).map((_, i) => (
        <div
          key={i}
          ref={el => { trailRef.current[i] = el; }}
          className="cursor-trail"
        />
      ))}

      {/* Ambient glow */}
      <motion.div
        className="cursor-glow"
        style={{ x: glowX, y: glowY }}
      />

      {/* Outer ring */}
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          width:  ringSize,
          height: ringSize,
          borderColor: ringColor,
          background:  ringBg,
          borderWidth: cursorState === 'hover' ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      />

      {/* Center dot */}
      <motion.div
        className="cursor"
        style={{ x: dotX, y: dotY }}
        animate={{
          width:  dotSize,
          height: dotSize,
          background: dotColor,
          borderRadius: cursorState === 'text' ? '2px' : '50%',
          opacity: cursorState === 'text' ? 0.7 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      />
    </>
  );
};

// ── App ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Works />
                <Skill />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route exact path="/about/intro"        element={<Intro />}       />
          <Route exact path="/about/experience"   element={<Experience />}  />
          <Route exact path="/about/internships"  element={<Internships />} />
          <Route exact path="/about/graduation"   element={<Graduation />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


