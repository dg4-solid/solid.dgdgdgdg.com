import '@/styles/components/button.sass';

interface ButtonProps {
  href: string;
  text: string;
  external?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <a
      className='component-button'
      href={props.href}
      target={props.external ? '_blank' : '_self'}
      rel={props.external ? 'noopener noreferrer' : ''}
    >
      {props.text}
    </a>
  );
};

export default Button;
