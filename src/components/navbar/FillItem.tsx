import { useNavigate } from 'react-router-dom';
import { NavIcon } from './navIcons';

type FillItemProps = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  compact?: boolean;
  dense?: boolean;
  active?: boolean;
  onClick?: () => void;
};

export function FillItem({
  title,
  description,
  href,
  icon,
  compact = false,
  dense = false,
  active = false,
  onClick,
}: FillItemProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`brand-fill-item self-start ${active ? 'is-active' : ''} ${dense ? 'is-dense' : ''}`}
      onClick={() => {
        onClick?.();
        navigate(href);
      }}
    >
      <span className="fill-wash" />
      <span className={`relative z-10 flex items-center ${dense ? 'gap-3' : 'gap-3.5'}`}>
        {icon && (
          <span
            className={`fill-icon shrink-0 flex items-center justify-center ${
              dense ? 'h-7 w-7' : 'h-8 w-8'
            }`}
          >
            <NavIcon name={icon} className={dense ? 'h-[22px] w-[22px]' : 'h-6 w-6'} />
          </span>
        )}
        <span className="min-w-0">
          <span
            className={`fill-title block font-medium leading-tight line-clamp-1 ${
              dense ? 'text-[13px]' : 'text-[14px]'
            }`}
          >
            {title}
          </span>
          {description && (
            <span
              className={`fill-desc block font-normal leading-snug line-clamp-1 ${
                dense ? 'mt-0.5 text-[11.5px]' : 'mt-0.5 text-[12px]'
              }`}
            >
              {description}
            </span>
          )}
        </span>
      </span>
    </button>
  );
}
