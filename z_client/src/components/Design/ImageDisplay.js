import React, { useState } from 'react';

function ImageDisplay({ imageUrl }) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <div style={{ position: 'relative', width: '500px', height: '500px', borderRadius: '10px' }}>
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
          }}
        >
          <img
            src="https://4.bp.blogspot.com/-9d89t5wLL_g/VrDWx54L87I/AAAAAAAAAv8/-NwkqvilbRk/s1600/7dc140665fa4805e8edfb53fda7f74db.gif"
            alt="Loading..."
            width="500px"
            height="500px"
            style={{ borderRadius: '10px' }}
          />
        </div>
      )}
      <img
        src={imageUrl}
        alt="generate"
        width="500px"
        height="500px"
        style={{ display: loaded ? 'block' : 'none', borderRadius: '10px' }}
        onLoad={handleImageLoaded}
      />
    </div>
  );
}

export default ImageDisplay;
