import { useCallback, useRef, type CSSProperties, type MouseEvent } from 'react';
import orbitLines from '@/assets/orbit_lines_transparent.png';
import logoHalves from '@/assets/Glossy Neon Infinity Logo Halves.png';

/**
 * Hero mark: CO silhouette filled with Codevian red/blue gradient,
 * nested in the orbit lines frame. Parallax on mousemove.
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

  const maskStyle = {
    ['--hero-mark-mask' as string]: `url(${logoHalves})`,
  } as CSSProperties;

  return (
    <div
      className="hero-v2-parallax"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden
    >
      <div className="hero-v2-parallax__glow" />

      {/* CO shape masked over rotating dark red / blue fill */}
      <div ref={markRef} className="hero-v2-parallax__mark" style={maskStyle}>
        <div className="hero-v2-parallax__fill">
          <div className="hero-v2-parallax__gradient" />
        </div>
      </div>

      {/* Orbit lines sit on top so rings wrap the logo */}
      <div ref={outlineRef} className="hero-v2-parallax__outline">
        <img
          src={orbitLines}
          alt=""
          className="hero-v2-parallax__orbit"
        />
      </div>
    </div>
  );
}
