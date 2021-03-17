import './Component/Profile/profil.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


function App() {
  return (
    <div className="App">
       <div className="profil">
       <ProfilPhoto />
        <FullName />
        <Address />
       </div>
        
      </div>
  );
}

export default App;
