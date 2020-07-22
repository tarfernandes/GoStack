import axios from 'axios';

const api = axios.create({
  
  baseURL: 'http://localhost:3333'
  //baseURL: 'http://10.0.2.2'

});

export default api;

/**
 *  IOS com Emulador: LocalHost
 *  IOS com físico: IP da máquina
 * 
 *  Android com Emulador: LocalHost (adb reverse)
 *  Android com Emulador: 10.0.2.2 ( Android Studio)
 *  Android com Emulador: 10.0.3.2 (Genymotion)
 *  Android com Físico: IP da máquina
 * 
 * */
 