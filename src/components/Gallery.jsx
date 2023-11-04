import React from 'react';
import IconHeart from './IconHeart';

const Gallery = ({ fotos }) => {
  return (
    <div className="gallery grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div key={foto.id} className="card">
          <div className='img-wrapper'>
            <img className="card-img" src={foto.keyImage} alt={foto.title} />
          </div>
          <div className="card-body">
            <h3 className="card-title">{foto.title}</h3>
          </div>
            <div className='iconheart'>
                <IconHeart filled={foto.liked} onClick={() => handleLike(foto.id)} />
            </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
