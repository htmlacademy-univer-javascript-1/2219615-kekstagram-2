import {getMiniatures} from './api.js';
import {insertPhotoMiniature} from './photoMiniature.js';
import {showFileForm} from './form.js';

//const descriptions = Array.from({length: PHOTOS_COUNT}, generateDescription);
//insertPhotoMiniature(descriptions);
getMiniatures()
  .then(insertPhotoMiniature)
  .catch(console.error);
document.querySelector('#upload-file').addEventListener('change', showFileForm);

