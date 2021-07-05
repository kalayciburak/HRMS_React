import axios from "axios";

export default class LangugageService {
    getLanguages() {
        return axios.get(`http://localhost:8080/api/languages/getLanguages`)
    }

    addLanguage(language) {
       return axios({
                        method: "POST",
                        url: `http://localhost:8080/api/languages/addLanguages`,
                        data: language,
                        headers: "content-type: application/json",
                    }).then((res) => {
           return res.data.message
       }).catch((err) => {
           return err.error.error
       });
    }

}
