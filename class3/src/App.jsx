
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar title='Naitik' color='blue' links={['geg', 'hello', 'Hnfs', 'hie']}/>
      <Navbar title='Unnati' color='pink' links={['geg', 'hello', 'Hnfs', 'hie']}/>
      <Navbar title='Ankit' color='brown'links={['geg', 'hello', 'Hnfs', 'hie']}/>
    </div>
  )
}

export default App
