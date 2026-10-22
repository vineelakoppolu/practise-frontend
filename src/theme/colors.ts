import headerLogo from '@/assets/codelink-header-logo.png';
import headerLogoDark from '@/assets/codelink-header-logo-dark-transparent.png';

/**
 * Official CodeLink SOLUTION brand colors — sampled from the logos.
 * Use these tokens everywhere. Do not introduce hues outside this palette.
 */
export const brand = {
  /** Electric cyan — outer C ring, O inner circle, i-dot */
  cyan: '#00B2FE',
  /** Brand royal — COdelink wordmark, second ring */
  royal: '#1863BA',
  /** Footer logo field */
  logo: '#0076CE',
  /** Deep corporate blue — nav, dark bands, dark cards */
  deep: '#0B2545',
  /** SOLUTION wordmark / body text */
  charcoal: '#515254',
  /** Headings */
  slate: '#0F172A',
  /** Alternating section canvas */
  canvas: '#F8FAFC',
  white: '#FFFFFF',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
} as const;

export const brandRgb = {
  cyan: '0, 178, 254',
  royal: '24, 99, 186',
  logo: '0, 118, 206',
  deep: '11, 37, 69',
  charcoal: '81, 82, 84',
  slate: '15, 23, 42',
  white: '255, 255, 255',
} as const;

export const logos = {
  /** Light header / light surfaces */
  header: headerLogo,
  /** Dark mode + dark hero overlays */
  headerDark: headerLogoDark,
  footer: '/IMG-20260829-WA0001.jpg',
} as const;

export const royalAlpha = (alpha: number) => `rgba(${brandRgb.royal}, ${alpha})`;
export const cyanAlpha = (alpha: number) => `rgba(${brandRgb.cyan}, ${alpha})`;
export const deepAlpha = (alpha: number) => `rgba(${brandRgb.deep}, ${alpha})`;

export const colors = {
  primary: brand.royal,
  primaryLight: brand.cyan,
  primaryDark: brand.deep,

  accentBlue: brand.cyan,
  accentSky: 'var(--accent-sky)',

  background: 'var(--background)',
  backgroundSoft: 'var(--background-soft)',
  backgroundDark: brand.deep,
  surface: 'var(--surface)',
  card: 'var(--card)',

  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textMuted: 'var(--text-muted)',
  textLight: '#F8FAFC',

  borderSoft: 'var(--border-soft)',
  borderLight: 'var(--border-light)',

  success: brand.success,
  warning: brand.warning,
  error: brand.error,

  gradientPrimary: `linear-gradient(135deg, ${brand.royal} 0%, ${brand.cyan} 100%)`,
  gradientAccent: `linear-gradient(135deg, ${brand.cyan} 0%, ${brand.royal} 100%)`,
  gradientDeep: `linear-gradient(160deg, ${brand.deep} 0%, #123A66 55%, ${brand.deep} 100%)`,
} as const;

export type Brand = typeof brand;
export type Logos = typeof logos;
export type Colors = typeof colors;
