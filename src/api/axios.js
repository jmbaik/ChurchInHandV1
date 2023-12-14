import axios from 'axios';
import {CihApiKeys} from './CihApiConstants';

const apiFetch = axios.create({
  baseURL: CihApiKeys.apiBaseUrl,
});

export default apiFetch;
