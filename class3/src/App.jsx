
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
  function abc(){
    console.log('Button is clicked!');
  }
  return (
    <div>
      <Navbar title='Naitik' color='blue' links={['geg', 'hello', 'Hnfs', 'hie']}/>
      <Navbar title='Unnati' color='pink' links={['geg', 'hello', 'Hnfs', 'hie']}/>
      <Navbar title='Ankit' color='brown'links={['geg', 'hello', 'Hnfs', 'hie']}/>
      {user1.sex =='male'?<Men/>:<Women/>}
      <button
        onClick={abc}
        className='bg-red-500 text-white px-4 py-2 rounded block mx-auto mt-4 hover:bg-red-600 transition'>
        Click here to Download
      </button>

    </div>
    

  )
}

export default App
