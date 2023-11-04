import { useContext } from 'react';
import ContextFoto from '../context/my_context';

const Favorites = () => {
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
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
