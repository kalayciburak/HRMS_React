import axios from "axios";

class LangugageService {
    getLanguages() {
        return axios.get(`http://localhost:8080/api/languages/getLanguages`)
    }

    addLanguage(language) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/languages/addLanguages`,
                  data: language,
                  headers: "content-type: application/json",
              });
    }

}
