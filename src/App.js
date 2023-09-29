import data from './data.json';
import './App.css';
import Header from './components/Header';
import ProfilePic from './components/ProfilePic';
import Detail from './components/Detail';



/*const user = {
  name: 'Filípek Černohorský',
  imageUrl: 'https://www.giantbomb.com/a/uploads/scale_small/1/17172/1148489-crag_hack.png',
  hobbies: ['Hraní Heroesů', 'Hraní Baldurs Gatů', 'Hraní jiných her']
};*/
function App() {
  

  return (
    <div>
      <Header title="User Profile Page" />
      <ProfilePic imageUrl={data.imageUrl} altText={data.name} />
      <Detail name={data.name} hobbies={data.hobbies} />
    </div>
  );
  
}

export default App;
