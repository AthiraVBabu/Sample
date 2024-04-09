import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import ImageDisplay from './ImageDisplay';
import './Design.scss';

const token = "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";

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = () => {
    const dressType = document.getElementById('dressType').value;
    const color = document.getElementById('color').value;
    const gender = document.getElementById('gender').value;
    const pattern = document.getElementById('pattern').value;
    const clothType = document.getElementById('clothType').value;
    const neckType = document.getElementById('neckType').value;
    const sleeveType = document.getElementById('sleeveType').value;
    const size = document.getElementById('size').value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({
        "inputs": `Generate an image of ${size} size ${gender} wearing ${clothType} ${dressType} in ${color} color with ${neckType} neck and ${sleeveType} sleeves with printed ${pattern}`
      })
    };


    fetch("https://api-inference.huggingface.co/models/hahminlew/sdxl-kream-model-lora-2.0", requestOptions)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch(error => console.log('Error:', error));
  };

  const downloadImage = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'generated_image.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="app-container">
    <Header />
    <div className="content-container">
      <div className="form-container">
        <Form onGenerateImage={generateImage} onDownloadImage={downloadImage} />
      </div>
      <div className="image-display-container">
        <ImageDisplay imageUrl={imageUrl} />
      </div>
    </div>
  </div>
);
}

export default App;

