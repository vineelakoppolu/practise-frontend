import { useSearchParams } from 'react-router-dom';
import { resolveHomeHeroVersion } from '@/config/homeHero';
import HeroV1 from './hero/HeroV1';
import HeroV2 from './hero/HeroV2';

/**
 * Home hero switcher.
 * Default: `HOME_HERO_VERSION` in `src/config/homeHero.ts`
 * Preview: `/?hero=1` or `/?hero=2`
 */
export default function Hero() {
  const [params] = useSearchParams();
  const version = resolveHomeHeroVersion(params);

  return version === 2 ? <HeroV2 /> : <HeroV1 />;
}
