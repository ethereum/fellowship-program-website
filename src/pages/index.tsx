// pages/index.js or another component file
import dynamic from 'next/dynamic';

const GlobeComponentWithNoSSR = dynamic(() => import('../components/Map/Globe'), {
  ssr: false, // This line is key to making sure the import is client-side only
});

const HomePage = () => {
  return <div><GlobeComponentWithNoSSR /></div>
}

export default HomePage
