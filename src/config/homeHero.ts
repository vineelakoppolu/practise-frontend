/**
 * Home page hero version switch.
 * 1 = Classic photo / rings hero (current)
 * 2 = Codevian-style dark hero with large favicon cursor parallax
 *
 * Preview without editing this file:
 *   /?hero=1  or  /?hero=2
 */
export type HomeHeroVersion = 1 | 2;

/** Change this to 2 to ship the favicon parallax hero by default. */
export const HOME_HERO_VERSION: HomeHeroVersion = 1;

export function resolveHomeHeroVersion(searchParams?: URLSearchParams | string | null): HomeHeroVersion {
  const raw =
    typeof searchParams === 'string'
      ? new URLSearchParams(searchParams.startsWith('?') ? searchParams : `?${searchParams}`).get('hero')
      : searchParams?.get('hero') ?? null;

  if (raw === '1' || raw === '2') return Number(raw) as HomeHeroVersion;
  return HOME_HERO_VERSION;
}
