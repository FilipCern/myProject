import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProfilePic from './components/ProfilePic';
import Detail from './components/Detail';



const user = {
  name: 'Filípek Černohorský',
  imageUrl: 'https://www.giantbomb.com/a/uploads/scale_small/1/17172/1148489-crag_hack.png',
  hobbies: ['Hraní Heroesů', 'Hraní Baldurs Gatů', 'Hraní jiných her']
};
function App() {
  

  return (
    <div>
      <Header title="User Profile Page" />
      <ProfilePic imageUrl={user.imageUrl} altText={user.name} />
      <Detail name={user.name} hobbies={user.hobbies} />
    </div>
  );
}

export default App;
