import './App.css';
import Card from './components/card/Card';
import Button from './components/card/UI/btn/Button';
import Grid from './components/card/UI/grid/Grid';
import UserCard from './components/userCard/UserCard';

function App() {
  return (
    <div className='App'>
      <h1>React</h1>
      <Button>Read more</Button>
      <Button secondary>I am secondary btn</Button>
      <Button size='lg'>Read more twice</Button>
      <Button size='sm'>Read more small</Button>

      <Grid cols={3}>
        <Card />
        <Card />
        <Card />
      </Grid>

      <Grid cols={4}>
        <UserCard />
      </Grid>

      <div className='card'>
        <h2 className='title'>Hello</h2>
      </div>
    </div>
  );
}

export default App;
