import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BRAND_GLOW =
  'radial-gradient(circle, rgba(0,178,254,0.22) 0%, rgba(24,99,186,0.10) 48%, rgba(24,99,186,0) 100%)';

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.92 },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

const sharedTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

type GlowNavItemProps = {
  label: string;
  onClick: () => void;
  onEnter?: () => void;
  open?: boolean;
  hasMenu?: boolean;
};

export function GlowNavItem({ label, onClick, onEnter, open = false, hasMenu = false }: GlowNavItemProps) {
  return (
    <motion.li className="relative list-none shrink-0" onMouseEnter={onEnter}>
      <motion.div
        className="relative overflow-hidden rounded-xl"
        style={{ perspective: 600 }}
        initial="initial"
        animate={open ? 'hover' : 'initial'}
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-[3px] z-0 pointer-events-none rounded-lg"
          variants={glowVariants}
          style={{ background: BRAND_GLOW }}
        />

        <GlowFace onClick={onClick} variants={itemVariants} origin="center bottom">
          {label}
          {hasMenu && (
            <ChevronDown
              className="h-3.5 w-3.5 transition-transform duration-300"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          )}
        </GlowFace>

        <GlowFace onClick={onClick} variants={backVariants} origin="center top" overlay>
          {label}
          {hasMenu && <ChevronDown className="h-3.5 w-3.5 rotate-180" />}
        </GlowFace>
      </motion.div>
    </motion.li>
  );
}

function GlowFace({
  children,
  onClick,
  variants,
  origin,
  overlay = false,
}: {
  children: ReactNode;
  onClick: () => void;
  variants: Variants;
  origin: string;
  overlay?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-1 whitespace-nowrap px-3.5 py-1.5 rounded-md bg-transparent text-[15.5px] font-medium text-[var(--header-fg,var(--text-primary))] ${
        overlay ? 'absolute inset-0 z-10' : 'relative z-10'
      }`}
      variants={variants}
      transition={sharedTransition}
      style={{ transformStyle: 'preserve-3d', transformOrigin: origin }}
    >
      {children}
    </motion.button>
  );
}

export function GlowMenuTrack({ children }: { children: ReactNode }) {
  return (
    <ul className="relative z-10 flex items-center justify-center gap-2 flex-nowrap">
      {children}
    </ul>
  );
}
