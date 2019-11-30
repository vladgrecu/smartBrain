import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
  return (
    <div>
      <p className='f5'>
        {'Paste an image URL and the app will detect faces in your image'}
      </p>
      <div className='center'>
        <div className='form pa4 br3 shadow-5 center'>
          <input className='f4 pa2 w-70 center'type='text' onChange={onInputChange}/>
          <button className='w-30 grow f4 link pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;