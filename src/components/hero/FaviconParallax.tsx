import { useCallback, useRef, type MouseEvent } from 'react';
import favicon from '@/assets/codelink-favicon-dark-white.png';

/**
 * Codevian-style hero mark: large favicon + same-shape outline rings that follow the cursor.
 * Parallax math mirrors their #arrow / #arrowContainer mousemove handler.
 */
export default function FaviconParallax() {
  const markRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const mark = markRef.current;
    const outline = outlineRef.current;
    if (!mark || !outline) return;

    const rect = mark.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const sensitivity = 0.8;
    const dx = (event.clientX - centerX) * sensitivity;
    const dy = (event.clientY - centerY) * (sensitivity / 2);

    mark.style.transition = 'transform 0.5s ease';
    outline.style.transition = 'transform 0.5s ease';
    mark.style.transform = `translate(${dx + 1}px, ${dy + 1}px)`;
    outline.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);

  const onLeave = useCallback(() => {
    const mark = markRef.current;
    const outline = outlineRef.current;
    if (!mark || !outline) return;

    mark.style.transition = 'transform 0.5s cubic-bezier(0.5, 1, 0.5, -0.25)';
    outline.style.transition = 'transform 0.5s ease 0.5s';
    mark.style.transform = 'translate(0, 0)';
    outline.style.transform = 'translate(0, 0)';
  }, []);

  return (
    <div
      className="hero-v2-parallax"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden
    >
      <div className="hero-v2-parallax__glow" />

      {/* Same-shape outline rings (Codevian arrow-outline layers) */}
      <div ref={outlineRef} className="hero-v2-parallax__outline">
        <span className="hero-v2-parallax__ring hero-v2-parallax__ring--1">
          <img src={favicon} alt="" />
        </span>
        <span className="hero-v2-parallax__ring hero-v2-parallax__ring--2">
          <img src={favicon} alt="" />
        </span>
        <span className="hero-v2-parallax__ring hero-v2-parallax__ring--3">
          <img src={favicon} alt="" />
        </span>
        <span className="hero-v2-parallax__ring hero-v2-parallax__ring--4">
          <img src={favicon} alt="" />
        </span>
      </div>

      {/* Solid mark — ~47.5% of container like Codevian’s #arrow */}
      <div ref={markRef} className="hero-v2-parallax__mark">
        <div className="hero-v2-parallax__shimmer" />
        <img src={favicon} alt="" className="hero-v2-parallax__favicon" />
      </div>
    </div>
  );
}
