import axios from 'axios';

const api = axios.create({
  baseUrl: 'localhost'
})

export default api;

// ios c emulador -> localhost
// ios c dispositivo -> IP da maquina (rede)

// android c emulador -> utilizar adb reverse tcp:port tcp:port e apontar baseUrl p/ localhost
// android c emulador do android studio -> 10.0.2.2
// android c emulador do Genymotion -> 10.0.3.2
// android c dispositivo -> IP da maquina (rede)