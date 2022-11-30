import css from './Button.module.css';

function Button(props) {
  // nereikia {} nes esame js erdveje (nera <> )
  const btnSize = props.size;

  // jei btnSize yra lg, reikia prideti papildomai clase css.large

  const largeBtn = btnSize === 'lg' ? css.large : '';
  const smallBtn = btnSize === 'sm' ? css.small : '';

  // jei gavom props secondary, tai pridedam klase .secondary
  const secondaryClass = props.secondary ? css.secondary : '';

  //
  const passedClass = props.className ? props.className : '';

  // aprasyti klase secondary - backgroundColor = coral;

  return (
    <button
      onClick={props.onClick}
      className={`${css.btn} ${largeBtn} ${smallBtn} ${secondaryClass} ${passedClass}`}
    >
      {props.children}
    </button>
  );
}
export default Button;
