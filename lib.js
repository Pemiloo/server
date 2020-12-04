import Http from './lib/http';
import Action from './lib/global/useReducer/action';

import {uploadFile, uploadFileXl} from './lib/cloudinary';
import {en,de} from './lib/enc';
import {get,set,del,delAll} from './lib/localstorage';
import {StatePatch} from './lib/global/useContext/context';

export {uploadFile, uploadFileXl}
export {get,set,del,delAll};
export {StatePatch};
export {en, de};

export {Action};
export {Http};


