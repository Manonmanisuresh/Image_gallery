import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
        const response = await fetch('https://api.unsplash.com/photos/random?count=10&client_id=fHI1nms65Y8PvOHwFjMlvx_pw7cLhkLpKJS8jFBbqFA');
        const data = await response.json();
        setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map(image => (
        <img key={image.id} src={image.urls.regular} alt={image.alt_description} style={{ width: '300px', height: '200px', margin: '10px', borderRadius: '8px' }} />
      ))}
    </div>
  );
};

export default Gallery;
