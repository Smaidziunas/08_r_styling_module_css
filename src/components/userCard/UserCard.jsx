import { useEffect, useState } from 'react';
import Button from '../card/UI/btn/Button';
import Grid from '../card/UI/grid/Grid';
import css from './UserCard.module.css';

// 2. aprasyti klases card, title, text

// 3. panaudoti klases

const url = 'https://dummyjson.com/users/1';

function UserCard(props) {
  const [userData, setUserData] = useState({});
  console.log(css);
  // efektas, kuris pasileidzia tik susikurus komponenta
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await fetch(url);
      const dataInJsFormat = await response.json();
      console.log('dataInJsFormat ===', dataInJsFormat);
      return setUserData(dataInJsFormat);
    } catch (error) {
      console.warn('Error trying to retrieve .then()', error);
    }
  }

  const { image, lastName, firstName, age, height } = userData;
  return (
    <div className={css.card}>
      <img className={`border ${css.image}`} src={image} alt='user' />
      <h2 className={css.title}>
        {firstName} {lastName}
      </h2>
      <h3 className={css.subtitle}>age: {age}</h3>
      <h4 className={css.subtitle}>height: {height}</h4>
      <p className={css['card-text']}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
        aliquid.
      </p>
    </div>
  );
}
export default UserCard;
