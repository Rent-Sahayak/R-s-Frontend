import Body from '../../Body/Body';
import RenteeBody from '../../Body/RenteeBody';
import RenterBody from '../../Body/RenterBody';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Team from '../../Team/Team';
import Category from '../../Category/Category';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <RenterBody/>
      <RenteeBody/>
      <Category/>
      <Team/>
      <Footer/>
    </div>
    
  );
}

export default LandingPage;
