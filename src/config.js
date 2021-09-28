import { environment } from './environments/environment';
const apiUrl= environment==="production"?'https://suturaapi.herokuapp.com/api/':"http://localhost:8082/api/";
export default {
    apiUrl
}
