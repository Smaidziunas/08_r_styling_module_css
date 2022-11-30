import css from './Grid.module.css';

function Grid(props) {
  let divStyles = {
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };

  // jei negaunam props.cols, tai divStyles turetu buti tuscias objektas

  if (!props.cols) divStyles = {};

  return (
    <div style={divStyles} className={css.grid}>
      {props.children}
    </div>
  );
}
export default Grid;
