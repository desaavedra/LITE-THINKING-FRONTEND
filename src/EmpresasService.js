import axios from 'axios';
const API_URL = 'http://172.31.7.254:8000';

export default class EmpresasService{

    constructor(){}


    getEmpresas() {
        const url = `${API_URL}/api/empresas/`;
        return axios.get(url).then(response => response.data);
    }
    getEmpresasByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getEmpresa(pk) {
        const url = `${API_URL}/api/empresas/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteEmpresa(empresa){
        const url = `${API_URL}/api/empresas/${empresa.pk}`;
        return axios.delete(url);
    }
    createEmpresa(empresa){
        const url = `${API_URL}/api/empresas/`;
        return axios.post(url,empresa);
    }
    updateEmpresa(empresa){
        const url = `${API_URL}/api/empresas/${empresa.pk}`;
        return axios.put(url,empresa);
    }
}