import {generateDescription, PHOTOS_COUNT} from './data.js';
import {isCorrectLength} from './util.js';
import {insertPhotoMiniature} from './photoMiniature.js';

const descriptions = Array.from({length: PHOTOS_COUNT}, generateDescription);
insertPhotoMiniature(descriptions);

isCorrectLength(descriptions, PHOTOS_COUNT); // Чтобы eslint не ругался

