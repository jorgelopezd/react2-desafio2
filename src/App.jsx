import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorites from './views/Favorites';
import ContextFoto from './context/my_context';
import NotFound from './views/NotFound';

const PHOTO_URL = '/photos.json';

const App = () => {
  const [fotos, setFotos] = useState([]);

  const fetchFotos = async () => {
    try {
      const response = await fetch(PHOTO_URL);
      const data = await response.json();
      if (data.photos) {
        const photos = data.photos.map((item) => ({
          id: item.id,
          keyImage: item.src.portrait,
          title: item.alt,
          liked: false,
        }));
        setFotos(photos);
      }
    } catch (error) {
      console.error('Los sentimos tuvimos un percance', error);
    }
  };

  useEffect(() => {
    fetchFotos();
  }, []);

  return (
    <ContextFoto.Provider value={{ fotos, setFotos }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextFoto.Provider>
  );
};

export default App;
