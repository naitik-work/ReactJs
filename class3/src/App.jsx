
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {
  const user1={
    name: 'NAITIK',
    age: 21,
    sex: 'male'
  };
  const user2={
    name: 'Unnati',
    age: 19,
    sex: 'female'
  };

  return (
    <div>
      <Navbar title='Naitik' color='blue' links={['geg', 'hello', 'Hnfs', 'hie']}/>
      <Navbar title='Unnati' color='pink' links={['geg', 'hello', 'Hnfs', 'hie']}/>
      <Navbar title='Ankit' color='brown'links={['geg', 'hello', 'Hnfs', 'hie']}/>
      {user1.sex =='male'?<Men/>:<Women/>}
    </div>

  )
}

export default App
