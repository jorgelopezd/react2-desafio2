import Gallery from "../components/Gallery";
import { useContext } from 'react';
import ContextFoto from '../context/my_context';

const Home = () => {
  const { fotos } = useContext(ContextFoto);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery fotos={fotos} />
    </div>
  );
};

export default Home;
