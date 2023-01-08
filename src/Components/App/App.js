import './App.css';
import Hero from '../Hero/Hero';
import Programs from '../Program/Programs';
import Reasons from '../Reasons/Reasons';
import PlanCard from '../PlanCard/PlanCard';
import Testimonials from '../Testimonials/Testimonials';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
    <Hero />
    <Programs />
    <Reasons />
    <PlanCard />
    <Testimonials />
    <Join />
    <Footer />
    </div>
);
}

export default App;
