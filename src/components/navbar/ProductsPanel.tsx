import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors } from '@/theme';
import { productCategories } from '@/data/navigation';

export function ProductsPanel({ onClose }: { onClose: () => void }) {
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const navigate = useNavigate();
  const active = productCategories.find((c) => c.id === activeId) ?? productCategories[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] min-h-[320px]">
      <aside className="pr-3 lg:pr-4 lg:border-r" style={{ borderColor: 'rgba(24,99,186,0.1)' }}>
        <div className="space-y-0">
          {productCategories.map((category) => {
            const selected = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                className={`brand-fill-item is-dense ${selected ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveId(category.id)}
                onFocus={() => setActiveId(category.id)}
                onClick={() => setActiveId(category.id)}
              >
                <span className="fill-wash" />
                <span className="relative z-10 flex items-center justify-between gap-2">
                  <span className="fill-title text-[13.5px] font-700">
                    {category.label}
                  </span>
                  <ChevronRight
                    className={`h-3.5 w-3.5 ${selected ? 'text-white' : 'text-[#00B2FE]'}`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="relative pt-2 lg:pl-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 h-9 w-9 rounded-full flex items-center justify-center transition-colors"
          style={{ color: colors.primary, background: 'rgba(0,178,254,0.08)' }}
          aria-label="Close products menu"
        >
          <X className="h-4 w-4" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-[20px] font-800 tracking-tight pr-10" style={{ color: colors.primary }}>
              {active.headline}
            </h3>
            <p className="mt-1.5 text-[12.5px] max-w-xl" style={{ color: colors.textSecondary }}>
              {active.intro}{' '}
              <button
                type="button"
                className="font-700 underline-offset-4 hover:underline"
                style={{ color: colors.accentBlue }}
                onClick={() => {
                  onClose();
                  navigate('/products');
                }}
              >
                Browse all products
              </button>
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-0">
              {active.items.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="brand-fill-item is-dense"
                  onClick={() => {
                    onClose();
                    navigate(item.href);
                  }}
                >
                  <span className="fill-wash" />
                  <span className="relative z-10 block">
                    <span className="fill-title block text-[13.5px] font-700 leading-[1.35]">{item.title}</span>
                    <span className="fill-desc mt-0.5 block text-[12px] font-normal leading-[1.4]">{item.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
