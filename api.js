import { createRoom, getCountAnggota, getCountRoom, getCountRoomSta, getListRoom, updateRoom } from './api/room&anggota';
import { getListCandidate, addCandidate, getCandidate } from './api/candidate';
import { signinAdmin, signupAdmin, getAdmin, updateAdminPass, updateAdmin } from './api/admin';
import { getOption } from './api/option';

export {getOption};
export {getListCandidate, addCandidate, getCandidate};
export {signinAdmin, signupAdmin, getAdmin, updateAdminPass, updateAdmin};
export {createRoom, getCountAnggota, getCountRoom, getCountRoomSta, getListRoom, updateRoom };
