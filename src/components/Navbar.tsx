import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { colors, logos, royalAlpha } from '@/theme';
import { useTheme } from '@/theme/ThemeProvider';
import { resolveHomeHeroVersion } from '@/config/homeHero';
import {
  serviceColumns,
  technologyColumns,
  companyColumns,
  productCategories,
  type NavColumn,
  type NavItemLink,
  type ProductCategory,
} from '@/data/navigation';
import { GlowMenuTrack, GlowNavItem } from './ui/glow-menu';
import { CompanyPanel, ServicesPanel, TechnologyPanel } from './navbar/MegaPanels';
import { ProductsPanel } from './navbar/ProductsPanel';
import { FillItem } from './navbar/FillItem';

type MenuKey = 'products' | 'services' | 'technology' | 'company';

type MobileLevel =
  | { view: 'root' }
  | { view: 'section'; key: MenuKey; title: string }
  | { view: 'column'; key: MenuKey; title: string; columnTitle: string; index: number };

const mobileRootItems: { key: MenuKey; label: string }[] = [
  { key: 'products', label: 'Products' },
  { key: 'services', label: 'Services' },
  { key: 'technology', label: 'Technology Focus' },
  { key: 'company', label: 'Company' },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLevel, setMobileLevel] = useState<MobileLevel>({ view: 'root' });
  const closeTimer = useRef<number>();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { isDark } = useTheme();
  const isHome = location.pathname === '/';
  const isHeroV2 = isHome && resolveHomeHeroVersion(searchParams) === 2;
  const menuOpen = Boolean(openMenu || mobileOpen);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const useDarkLogo = isDark || (isHeroV2 && !scrolled && !menuOpen);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);

      if (menuOpen || y < 24) {
        setHeaderVisible(true);
      } else if (y > lastScrollY.current + 6) {
        setHeaderVisible(false);
        setOpenMenu(null);
      } else if (y < lastScrollY.current - 6) {
        setHeaderVisible(true);
      }

      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname, menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileLevel({ view: 'root' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const open = (key: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileLevel({ view: 'root' });
  };

  const go = (href: string) => {
    setOpenMenu(null);
    closeMobile();
    navigate(href);
  };

  const toggleMobile = () => {
    setMobileOpen((openNow) => {
      if (openNow) {
        setMobileLevel({ view: 'root' });
        return false;
      }
      setMobileLevel({ view: 'root' });
      return true;
    });
  };

  const goMobileBack = () => {
    setMobileLevel((level) => {
      if (level.view === 'column') {
        return { view: 'section', key: level.key, title: sectionTitle(level.key) };
      }
      return { view: 'root' };
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-[350ms] ease-out ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        className={`header-sheen transition-[box-shadow,background,backdrop-filter] duration-300 ${isHome && !scrolled ? 'is-hero-home' : ''} ${isHeroV2 && !scrolled ? 'is-hero-v2' : ''} ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-solid' : ''}`}
        onMouseLeave={scheduleClose}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
          <div className="header-bar flex items-center h-[var(--header-height)] gap-4 lg:gap-6 box-border">
            <motion.button
              type="button"
              onClick={() => go('/')}
              className="header-logo flex items-center bg-transparent border-none cursor-pointer p-0 shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="CodeLink SOLUTION home"
            >
              <img
                src={useDarkLogo ? logos.headerDark : logos.header}
                alt="CodeLink SOLUTION"
                className="header-logo__img"
              />
            </motion.button>

            <div
              className="hidden xl:flex flex-1 min-w-0 justify-center px-2"
              onMouseEnter={() => window.clearTimeout(closeTimer.current)}
            >
              <GlowMenuTrack>
               
                <GlowNavItem
                  label="Products"
                  hasMenu
                  open={openMenu === 'products'}
                  onEnter={() => open('products')}
                  onClick={() => go('/products')}
                />
                <GlowNavItem
                  label="Services"
                  hasMenu
                  open={openMenu === 'services'}
                  onEnter={() => open('services')}
                  onClick={() => go('/services')}
                />
                <GlowNavItem
                  label="Technology Focus"
                  hasMenu
                  open={openMenu === 'technology'}
                  onEnter={() => open('technology')}
                  onClick={() => go('/technologies')}
                />
                <GlowNavItem
                  label="Company"
                  hasMenu
                  open={openMenu === 'company'}
                  onEnter={() => open('company')}
                  onClick={() => go('/company')}
                />
                <GlowNavItem
                  label="Blog"
                  onEnter={scheduleClose}
                  onClick={() => go('/')}
                />
              </GlowMenuTrack>
            </div>

            <div className="hidden xl:flex items-center shrink-0" onMouseEnter={scheduleClose}>
              <button
                type="button"
                onClick={() => go('/company')}
                className="header-cta-shine hero-header-cta inline-flex items-center gap-1.5 rounded-full pl-5 pr-2 py-2 text-[15px] font-700 text-white"
                style={{ background: colors.gradientPrimary, boxShadow: '0 6px 16px rgba(24,99,186,0.28)' }}
              >
                Contact Us
                <span className="hero-cta-pill__icon hero-cta-pill__icon--on-primary" aria-hidden>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>

            <motion.button
              type="button"
              className="xl:hidden ml-auto p-2 rounded-xl"
              onClick={toggleMobile}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-[var(--header-fg,var(--text-primary))]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--header-fg,var(--text-primary))]" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {openMenu && (
            <motion.div
              key={openMenu}
              className="hidden xl:block absolute left-0 right-0 top-full"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              onMouseEnter={() => window.clearTimeout(closeTimer.current)}
            >
              <div
                className="mega-panel w-full mt-0 overflow-y-auto"
                style={{
                  background: 'var(--background)',
                  boxShadow: '0 28px 80px var(--shadow-blue)',
                  borderBottom: '1px solid var(--border-light)',
                  maxHeight: 'calc(100vh - var(--header-height))',
                }}
              >
                <div className="h-[2px] w-full header-hairline" />
                <div className={`w-full px-6 xl:px-10 ${openMenu === 'services' || openMenu === 'technology' || openMenu === 'company' ? 'pt-3 pb-0' : 'py-5'}`}>
                  {openMenu === 'services' && <ServicesPanel onNavigate={() => setOpenMenu(null)} />}
                  {openMenu === 'technology' && <TechnologyPanel onNavigate={() => setOpenMenu(null)} />}
                  {openMenu === 'products' && <ProductsPanel onClose={() => setOpenMenu(null)} />}
                  {openMenu === 'company' && <CompanyPanel onNavigate={() => setOpenMenu(null)} />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {openMenu && (
        <button
          type="button"
          className="hidden xl:block fixed inset-0 top-[var(--header-height)] -z-10"
          style={{ background: royalAlpha(0.18) }}
          aria-label="Close menu overlay"
          onClick={() => setOpenMenu(null)}
        />
      )}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden border-b"
            style={{ background: 'var(--background)', borderColor: 'rgba(24,99,186,0.1)' }}
          >
            <div className="header-hairline h-[2px] w-full" />
            <div className="px-5 py-4 max-h-[78vh] overflow-y-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileLevelKey(mobileLevel)}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-1"
                >
                  {mobileLevel.view !== 'root' && (
                    <MobileBackRow
                      label={mobileLevel.view === 'column' ? mobileLevel.columnTitle : mobileLevel.title}
                      onBack={goMobileBack}
                    />
                  )}

                  {mobileLevel.view === 'root' && (
                    <>
                      {mobileRootItems.map((item) => (
                        <MobileNavRow
                          key={item.key}
                          label={item.label}
                          onClick={() =>
                            setMobileLevel({ view: 'section', key: item.key, title: item.label })
                          }
                        />
                      ))}
                      <button
                        type="button"
                        onClick={() => go('/')}
                        className="nav-link-premium is-mobile-row w-full flex items-center"
                      >
                        <NavFill />
                        <span className="nav-label w-full">Blog</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => go('/company')}
                        className="header-cta-shine mt-3 w-full rounded-full px-5 py-3 text-sm font-700 text-white"
                        style={{ background: colors.gradientPrimary }}
                      >
                        Contact Us
                      </button>
                    </>
                  )}

                  {mobileLevel.view === 'section' && (
                    <MobileSectionList
                      sectionKey={mobileLevel.key}
                      onOpenColumn={(columnTitle, index) =>
                        setMobileLevel({
                          view: 'column',
                          key: mobileLevel.key,
                          title: mobileLevel.title,
                          columnTitle,
                          index,
                        })
                      }
                      onLeafNavigate={closeMobile}
                    />
                  )}

                  {mobileLevel.view === 'column' && (
                    <MobileColumnItems
                      sectionKey={mobileLevel.key}
                      index={mobileLevel.index}
                      onNavigate={closeMobile}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function sectionTitle(key: MenuKey) {
  return mobileRootItems.find((item) => item.key === key)?.label ?? key;
}

function mobileLevelKey(level: MobileLevel) {
  if (level.view === 'root') return 'root';
  if (level.view === 'section') return `section-${level.key}`;
  return `column-${level.key}-${level.index}`;
}

function columnsFor(key: MenuKey): NavColumn[] | null {
  if (key === 'services') return serviceColumns;
  if (key === 'technology') return technologyColumns;
  if (key === 'company') return companyColumns;
  return null;
}

function MobileBackRow({ label, onBack }: { label: string; onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="nav-link-premium is-mobile-row w-full flex items-center mb-1"
    >
      <NavFill />
      <span className="nav-label w-full gap-2">
        <ChevronLeft className="h-4 w-4 shrink-0 self-center" />
        <span className="min-w-0 flex-1 text-left whitespace-normal leading-snug">{label}</span>
      </span>
    </button>
  );
}

function MobileNavRow({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="nav-link-premium is-mobile-row w-full flex items-center"
    >
      <NavFill />
      <span className="nav-label w-full justify-between gap-3">
        <span className="min-w-0 flex-1 text-left whitespace-normal leading-snug">{label}</span>
        <ChevronRight className="h-4 w-4 shrink-0 self-center" />
      </span>
    </button>
  );
}

function MobileSectionList({
  sectionKey,
  onOpenColumn,
  onLeafNavigate,
}: {
  sectionKey: MenuKey;
  onOpenColumn: (columnTitle: string, index: number) => void;
  onLeafNavigate: () => void;
}) {
  if (sectionKey === 'products') {
    return (
      <>
        {productCategories.map((category, index) => (
          <MobileNavRow
            key={category.id}
            label={category.label}
            onClick={() => onOpenColumn(category.label, index)}
          />
        ))}
      </>
    );
  }

  const columns = columnsFor(sectionKey) ?? [];
  return (
    <>
      {columns.map((column, index) => (
        <MobileNavRow
          key={`${column.heading}-${index}`}
          label={column.heading}
          onClick={() => onOpenColumn(column.heading, index)}
        />
      ))}
    </>
  );
}

function MobileColumnItems({
  sectionKey,
  index,
  onNavigate,
}: {
  sectionKey: MenuKey;
  index: number;
  onNavigate: () => void;
}) {
  if (sectionKey === 'products') {
    const category: ProductCategory | undefined = productCategories[index];
    if (!category) return null;
    return (
      <>
        {category.items.map((item) => (
          <FillItem
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            compact
            onClick={onNavigate}
          />
        ))}
      </>
    );
  }

  const columns = columnsFor(sectionKey);
  const column = columns?.[index];
  if (!column) return null;

  return (
    <>
      {column.items.map((item: NavItemLink) => (
        <FillItem key={item.title} {...item} compact onClick={onNavigate} />
      ))}
    </>
  );
}

function NavFill() {
  return (
    <>
      <span className="nav-fill" aria-hidden />
      <span className="nav-shine" aria-hidden />
    </>
  );
}
