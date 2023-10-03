import data from './data.json';
import './App.css';
import Header from './components/Header';
import ProfilePic from './components/ProfilePic';
import Detail from './components/Detail';
import styled from 'styled-components';

const HeaderContainer = styled.div`
background-color: #333;
color: #fff;
padding: 20px;
text-align: center;
`;

const ProfilePicContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px;
`;

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

function App() {


  return (
    <div>
      <HeaderContainer>
      <Header title="User Profile Page" />
      </HeaderContainer>
      <ProfilePicContainer>
      <ProfilePic imageUrl={data.imageUrl} altText={data.name} />
      </ProfilePicContainer>
      <DetailContainer>
      <Detail name={data.name} hobbies={data.hobbies} />
      </DetailContainer>
    </div>
  );

}

export default App;
