import { createRoom, getCountAnggota, getCountRoom, getCountRoomSta, getListRoom, updateRoom, deleteRoom } from './api/room&anggota';
import { getListCandidate, addCandidate, getCandidate, getCandidateId, updateCandidate } from './api/candidate';
import { signinAdmin, signupAdmin, getAdmin, updateAdminPass, updateAdmin } from './api/admin';
import { getOption } from './api/option';

export {getOption};
export {getListCandidate, addCandidate, getCandidate, getCandidateId, updateCandidate};
export {signinAdmin, signupAdmin, getAdmin, updateAdminPass, updateAdmin};
export {createRoom, getCountAnggota, getCountRoom, getCountRoomSta, getListRoom, updateRoom, deleteRoom };
