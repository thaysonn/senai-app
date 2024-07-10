import axios from 'axios';
 
import API_URL from '../config'; // Caminho para o seu arquivo de configuração

const apiBase = API_URL + 'inscricoes';

class InscricaoService { 
    getAllInscricoes() {
        return axios.get(apiBase);
    }

    createInscricao(inscricao) {
        return axios.post(apiBase, inscricao);
    }

    updateInscricao(id, inscricao) {
        return axios.put(`${apiBase}/${id}`, inscricao);
    }

    deleteInscricao(id) {
        return axios.delete(`${apiBase}/${id}`);
    }
}

export default new InscricaoService();
