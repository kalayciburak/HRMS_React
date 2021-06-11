import axios from "axios";

class SocialMediService {
    getSocialMedias() {
        return axios.get(`http://localhost:8080/api/socialmedias/addSocialMedia`);
    }
}
