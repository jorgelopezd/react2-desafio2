import { useContext } from 'react';
import ContextFoto from '../context/my_context';

const Favorites = () => {
  const { fotos, setFotos } = useContext(ContextFoto);

  const favoritePhotos = fotos.filter((foto) => foto.liked);

  const toggleLiked = (id) => {
    const updatedFotos = fotos.map((foto) =>
      foto.id === id ? { ...foto, liked: !foto.liked } : foto
    );
    setFotos(updatedFotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-4">
        {favoritePhotos.map((foto) => (
          <div key={foto.id} className="card">
            <img className="card-img" src={foto.keyImage} alt={foto.title} />
            <div className="card-body" onClick={() => toggleLiked(foto.id)}>
              <h5 className="card-title">{foto.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
