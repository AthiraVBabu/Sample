import React from 'react';
import './Form.scss';

function Form({ onGenerateImage, onDownloadImage }) {
  return (
    <div className="form-container">
      <label htmlFor="dressType">Dress Type:</label>
      <select id="dressType" defaultValue="" required>
      <option value="" disabled hidden>Select Dress Type</option>
        <option value="dress">Kurta</option>
        <option value="shirt">Shirt</option>
        <option value="bodycon">Bodycon</option>
        <option value="gown">Gown</option>
        <option value="bodycon">Bodycon</option>
        <option value="coat">Coat</option>
        <option value="tshirt">T-shirt</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <label htmlFor="color">Color:</label>
      <select id="color" defaultValue="" required style={{ appearance: 'none', padding: '5px' }}>
      <option value="" disabled hidden>Select Color</option>
        <option value="red" style={{ backgroundColor: 'red', color: 'white' }}>Red</option>
        <option value="blue" style={{ backgroundColor: 'blue', color: 'white' }}>Blue</option>
        <option value="green" style={{ backgroundColor: 'green', color: 'white' }}>Green</option>
        <option value="black" style={{ backgroundColor: 'black', color: 'white' }}>Black</option>
        <option value="gray" style={{ backgroundColor: 'rgb(159, 156, 156)', color: 'white' }}>Gray</option>
        <option value="white" style={{ backgroundColor: 'white', color: 'black' }}>White</option>
        <option value="brown" style={{ backgroundColor: 'brown', color: 'white' }}>Brown</option>
        <option value="pink" style={{ backgroundColor: 'pink', color: 'white' }}>Pink</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <label htmlFor="gender">Gender:</label>
      <select id="gender" defaultValue="" required>
      <option value="" disabled hidden>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unisex">Unisex</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <label htmlFor="pattern">Pattern:</label>
      <select id="pattern" defaultValue="" required>
      <option value="" disabled hidden>Select Pattern</option>
        <option value="plain">Plain</option>
        <option value="letter">Floral</option>
        <option value="striped">Striped</option>
        <option value="checked">Chequered</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <label htmlFor="clothType">Cloth Type:</label>
      <select id="clothType" defaultValue="" required>
      <option value="" disabled hidden>Select Cloth</option>
        <option value="linen">Linen</option>
        <option value="silk">Silk</option>
        <option value="cotton">Cotton</option>
        <option value="denim">Denim</option>
        <option value="rayon">Rayon</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <label htmlFor="neckType">Neck Type:</label>
      <select id="neckType" defaultValue="" required>
      <option value="" disabled hidden>Select NeckShape</option>
        <option value="round">Round</option>
        <option value="v-neck">V-Neck</option>
        <option value="scoop-neck">Scoop Neck</option>
        <option value="collared-neck">Collared Neck</option>
        <option value="leafy-neck">Leafy Neck</option>
        <option value="square-neck">Square Neck</option>
        <option value="high-neck">High Neck</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <label htmlFor="sleeveType">Sleeve Type:</label>
      <select id="sleeveType" defaultValue="" required>
      <option value="" disabled hidden>Select SleeveType</option>
        <option value="short">Short</option>
        <option value="long">Long</option>
        <option value="sleeveless">Sleeveless</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <label htmlFor="size">Size:</label>
      <select id="size" defaultValue="" required>
      <option value="" disabled hidden>Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        {/* Add more options as needed */}
      </select>
      <br />
      <button id="btn" onClick={onGenerateImage}>Generate Image</button>
      <a id="downloadLink" download="generated_image.png">
        <button id="downloadBtn" onClick={onDownloadImage}>Download Image</button>
      </a>
    </div>
  );
}

export default Form;
