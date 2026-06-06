import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Myself from '../../assets/images/transparent.png';
import '../../styles/Hero/Hero.scss';

// ── Starfield Canvas ────────────────────────────────────────────────────────
const StarfieldCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Static stars ──────────────────────────────────────────────────────
    const NUM_STARS = 280;
    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 0.9 + 0.15,          // smaller & sharper
      baseAlpha: Math.random() * 0.85 + 0.15,
      alpha: 0,
      twinkleSpeed: Math.random() * 0.01 + 0.003,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: Math.random() < 0.15
        ? `rgba(100,140,255,`    // cool blue stars (rare)
        : Math.random() < 0.1
          ? `rgba(180,200,255,`  // pale blue-white (rare)
          : `rgba(255,255,255,`  // crisp white stars (majority)
    }));

    // ── Shooting stars ─────────────────────────────────────────────────────
    const MAX_SHOOTS = 4;
    const shooters = [];

    const spawnShooter = () => ({
      x: Math.random() * canvas.width * 0.8,
      y: Math.random() * canvas.height * 0.4,
      len: Math.random() * 180 + 80,
      speed: Math.random() * 8 + 5,
      angle: Math.PI / 5 + Math.random() * 0.3,
      alpha: 1,
      decay: Math.random() * 0.018 + 0.012,
      width: Math.random() * 1.5 + 0.5,
    });

    // seed a couple at random intervals
    const shootIntervals = [
      setInterval(() => { if (shooters.length < MAX_SHOOTS) shooters.push(spawnShooter()); }, 2800),
      setInterval(() => { if (shooters.length < MAX_SHOOTS) shooters.push(spawnShooter()); }, 4500),
    ];

    // kick-off with 1
    shooters.push(spawnShooter());

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      // draw static stars
      stars.forEach(s => {
        s.alpha = s.baseAlpha * (0.5 + 0.5 * Math.sin(t * s.twinkleSpeed * 60 + s.twinkleOffset));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color + s.alpha + ')';
        ctx.fill();

        // tiny sharp glow only on the brightest stars
        if (s.r > 0.7 && s.alpha > 0.75) {
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3.5);
          grd.addColorStop(0, s.color + (s.alpha * 0.35) + ')');
          grd.addColorStop(1, s.color + '0)');
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      });

      // draw & update shooting stars
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        const dx = Math.cos(sh.angle) * sh.len;
        const dy = Math.sin(sh.angle) * sh.len;

        const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x + dx, sh.y + dy);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.3, `rgba(0,220,255,${sh.alpha * 0.5})`);
        grad.addColorStop(1, `rgba(255,255,255,${sh.alpha})`);

        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x + dx, sh.y + dy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = sh.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        // move
        sh.x += Math.cos(sh.angle) * sh.speed;
        sh.y += Math.sin(sh.angle) * sh.speed;
        sh.alpha -= sh.decay;

        if (sh.alpha <= 0) shooters.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      shootIntervals.forEach(clearInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__starfield" />;
};

// ── Animation Variants ──────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 },
  },
};

// Floating Particle component
const Particle = ({ style }) => (
  <motion.span
    className="hero__particle"
    style={style}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: style.duration || 4,
      repeat: Infinity,
      delay: style.delay || 0,
      ease: 'easeInOut',
    }}
  />
);

const LETTERS_FULL = ['F', 'U', 'L', 'L', '-', 'S', 'T', 'A', 'C', 'K'];

const Hero = () => {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, -50]);

  useEffect(() => {
    const handleMouse = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 30);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const particles = [
    { width: 4, height: 4, top: '20%', left: '15%', delay: 0, duration: 5 },
    { width: 6, height: 6, top: '60%', left: '8%', delay: 1, duration: 6 },
    { width: 3, height: 3, top: '35%', left: '25%', delay: 2, duration: 4 },
    { width: 5, height: 5, top: '75%', left: '20%', delay: 0.5, duration: 7 },
    { width: 4, height: 4, top: '15%', left: '80%', delay: 1.5, duration: 5 },
    { width: 7, height: 7, top: '50%', left: '88%', delay: 0, duration: 6 },
    { width: 3, height: 3, top: '80%', left: '75%', delay: 2.5, duration: 4 },
    { width: 5, height: 5, top: '10%', left: '50%', delay: 1, duration: 8 },
  ];

  return (
    <div className="hero" ref={heroRef} id="hero">
      {/* ── Starfield Canvas ── */}
      <StarfieldCanvas />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* Animated grid lines */}
      <div className="hero__grid-lines">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="hero__grid-line"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.06 }}
            transition={{ duration: 1.5, delay: i * 0.15, ease: 'easeOut' }}
          />
        ))}
      </div>

      <motion.div
        className="hero__container"
        style={{ y: yParallax }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left: Text Content ── */}
        <div className="hero__intro-box">
          {/* Intro line */}
          <motion.p className="hero__intro-title" variants={itemVariants}>
            <motion.span
              className="hero__intro-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            Hello, I am Muhammad Arslan
          </motion.p>          {/* Animated letters — FULL-STACK */}
          <div className="hero__animated-alphabet-box" style={{ perspective: '600px' }}>
            {LETTERS_FULL.map((letter, i) => (
              <motion.span
                key={i}
                className={`hero__alphabet${i >= 7 ? ' hero__alphabet--last' : ''}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.25,
                  rotateY: 15,
                  textShadow: '0 0 30px rgba(0,255,255,0.8)',
                  transition: { duration: 0.2 },
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="hero__developer-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <span className="hero__dev-text">Developer</span>
            </motion.span>
          </div>

          {/* Description */}
          <motion.div className="hero__description" variants={itemVariants}>
            <p>
              I'm a passionate and responsible{' '}
              <motion.span
                className="hero__highlight"
                initial={{ backgroundSize: '0% 100%' }}
                animate={{ backgroundSize: '100% 100%' }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                full-stack developer
              </motion.span>
              , with more than{' '}
              <span className="hero__highlight">3 years</span> of experience.
              Skilled in developing highly responsive websites and mobile apps
              with elegant and efficient code.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div className="hero__buttons" variants={itemVariants}>
            <motion.a
              className="hero__cv-btn"
              href="/Muhammad_Arslan_CV.pdf"
              download="Muhammad_Arslan_CV.pdf"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span>Download CV</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </motion.a>
            <motion.a
              className="hero__contact-btn"
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero__stats" variants={itemVariants}>
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '15+', label: 'Projects Delivered' },
              { value: '5+', label: 'Happy Clients' },
            ].map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Image ── */}
        <motion.div
          className="hero__image"
          variants={imageVariants}
          style={{ x: springX, y: springY }}
        >
          <span className="hero__image-ring hero__image-ring--1"></span>
          <span className="hero__image-ring hero__image-ring--2"></span>
          <span className="hero__image-ring hero__image-ring--3"></span>
          <span className="hero__image-glow-top"></span>
          <span className="hero__image-glow-left"></span>
          <span className="hero__image-glow-right"></span>
          <motion.img
            src={Myself}
            alt="Muhammad Arslan"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="hero__image-platform"></span>
        </motion.div>
      </motion.div>

      <div className="hero__fade-bottom"></div>
    </div>
  );
};

export default Hero;
