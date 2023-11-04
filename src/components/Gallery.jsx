import React from 'react';
import IconHeart from './IconHeart';

const Gallery = ({ fotos }) => {
  const handleLike = (id) => {

  }
  return (
    <div className="gallery grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div key={foto.id} className="card" >
          <img className="card-img" src={foto.keyImage} alt={foto.title} />
          <div className="card-body">
            <h5 className="card-title">{foto.title}</h5>
            <IconHeart filled={foto.liked} onClick={() => handleLike(foto.id)}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
