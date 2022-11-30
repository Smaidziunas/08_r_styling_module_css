import { useState } from 'react';
import css from './Card.module.css';
import Button from './UI/btn/Button';
import Grid from './UI/grid/Grid';

function Card(props) {
  const [showTitle, setShowTitle] = useState(true);

  function showTitleHandler() {
    setShowTitle(false);
  }

  return (
    <div className={css.card}>
      {showTitle && <h2 className={css.title}>James Bond</h2>}
      <h3 className={css.subtitle}>Title: 007</h3>
      <p className={css.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas
        corporis consequuntur veritatis facilis sequi ut veniam ab neque cum.
      </p>
      <Grid cols={2}>
        <Button onClick={showTitleHandler} className={'mr2'}>
          Hide title
        </Button>
        <Button>Dark mode</Button>
      </Grid>
    </div>
  );
}
export default Card;
