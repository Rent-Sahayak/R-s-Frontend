import Body from '../../Body/Body';
import RenteeBody from '../../Body/RenteeBody';
import RenterBody from '../../Body/RenterBody';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Team from '../../Team/Team';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <RenterBody/>
      <RenteeBody/>
      <Team/>
      <Footer/>
    </div>
    
  );
}

export default LandingPage;
