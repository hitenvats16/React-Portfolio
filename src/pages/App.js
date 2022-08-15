import { useEffect } from 'react';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import LoadingPage from '../components/LoadingPage';
import LeftHeroSection from '../components/Sub Sections of Hero Section/LeftHeroSection';
import RightHeroSection from '../components/Sub Sections of Hero Section/RightHeroSection';
import '../index.css';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },5000);
  })

  if(loading){
    return(
      <LoadingPage/>
    )
  }

  return (
    <HeroSection>
      <LeftHeroSection dataAos="fade-right" />
      <RightHeroSection />
    </HeroSection>
  );
}

export default App;
