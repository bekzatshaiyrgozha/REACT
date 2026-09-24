import { useEffect, useRef } from "react";
import FloatingShapes from "./FloatingShapes";
import CodeCard from "./CodeCard";

function Header() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const target = { x: hero.offsetWidth / 2, y: hero.offsetHeight / 2, r: 0 };
    const pos = { ...target };
    let frame;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const point = e.touches ? e.touches[0] : e;
      target.x = point.clientX - rect.left;
      target.y = point.clientY - rect.top;
      target.r = 230;
    };
    const onLeave = () => {
      target.r = 0;
    };

    const animate = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      pos.r += (target.r - pos.r) * 0.1;
      hero.style.setProperty("--x", `${pos.x}px`);
      hero.style.setProperty("--y", `${pos.y}px`);
      hero.style.setProperty("--r", `${pos.r}px`);
      frame = requestAnimationFrame(animate);
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("touchmove", onMove, { passive: true });
    hero.addEventListener("mouseleave", onLeave);
    hero.addEventListener("touchend", onLeave);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("touchmove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      hero.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <FloatingShapes />

      <div className="hero-front">
        <img
          className="avatar"
          src="https://github.com/bekzatshaiyrgozha.png"
          alt="Bekzat Shaiyrgozha"
        />
        <h1 className="title">Hi, I'm Bekzat</h1>
        <p className="subtitle">4th-year student at KBTU · Developer</p>
        <p className="hint">move your mouse to see my code ✨</p>
      </div>

      <div className="hero-back" aria-hidden="true">
        <CodeCard />
      </div>

      <a className="scroll" href="#about">scroll ↓</a>
    </header>
  );
}

export default Header;
