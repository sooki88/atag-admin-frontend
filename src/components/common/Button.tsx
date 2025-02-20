import CheckBox from './CheckBox';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  clicked?: boolean;
  selectable?: boolean;
  onClick?: () => void;
}

export default function Button({ text, size = 'medium', clicked = false, selectable = false, onClick }: ButtonProps) {
  const sizeClassName = `btn-${size}`;

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-10 rounded-10 ${
        size === 'small' ? 'text-15 bg-gray-200' : 'text-18 bg-gray-100'
      } ${sizeClassName} ${(selectable || clicked) && 'bg-gray-400 text-white'}`}>
      {selectable && <CheckBox clicked={selectable && clicked} />}
      {text}
    </button>
  );
}
