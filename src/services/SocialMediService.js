import axios from "axios";

export default class SocialMediService {
    getSocialMedias() {
        return axios.get(`http://localhost:8080/api/socialmedias/addSocialMedia`);
    }

    getSocialMediaByCurriculaVitaeId(id) {
        return axios.get(`http://localhost:8080/api/socialmedias/getSocialMediaByCurriculaVitaeId?cvId=${id}`);
    }
}
