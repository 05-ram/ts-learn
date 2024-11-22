import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Heading from './components/Heading';
import Input from './components/Input';
import LoggedIn from './components/state/LoggedIn';
import Oscar from './components/Oscar';
import User from './components/state/User';
import Counter from './components/state/Counter';
// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';

function App() {
  // const personName = {
  //   fName: '',
  //   lName: ''
  // }

  // const personList = [
  //   {
  //     fName: 'Sree',
  //     lName: 'Lakshman'
  //   },
  //   {
  //     fName: 'Ram',
  //     lName: 'Karthik'
  //   },
  //   {
  //     fName: 'Sri',
  //     lName: 'Ram'
  //   }
  // ]
  return (
    <div className="App">
      Born To Achieve Great Things!
      {/* <Greet name="Ram" messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={personList} /> */}
      {/* <Status status='success' /> */}
      {/* <Oscar>
        <Heading>Sample Text</Heading >
      </Oscar> */}
      <br />
      {/* <Button
        handleClick={(event) => {
          console.log('Button Clicked...', event)
        }}
      />
      <Input value=''
        handleChange={(event) => {
          console.log(event.target.value)
        }}
      /> */}

      {/* <Container styles={{ backgroundColor: 'red', padding: '1rem' }} /> */}
      <Counter />
      {/* <LoggedIn /> */}
      {/* <User /> */}
    </div>
  );
}

export default App;
