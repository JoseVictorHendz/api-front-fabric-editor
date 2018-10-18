import { environment } from '../../../environments/environment';

// const BASE_URL = 'https://safraonline-api.herokuapp.com';
const BASE_URL = (!environment.production) ? 'http://localhost:3000' : 'https://fabric-editor-back.herokuapp.com';

export { BASE_URL };
