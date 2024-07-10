import axios from 'axios';

const API_URL = 'http://localhost:8080/inscricoes'; // URL base da sua API

class InscricaoService {
    getAllInscricoes() {
        return axios.get(API_URL);
    }

    createInscricao(inscricao) {
        return axios.post(API_URL, inscricao);
    }

    updateInscricao(id, inscricao) {
        return axios.put(`${API_URL}/${id}`, inscricao);
    }

    deleteInscricao(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new InscricaoService();
