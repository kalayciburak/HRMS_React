import axios from "axios";

class TechnologieService {
    getTechnologies() {
        return axios.get(`http://localhost:8080/api/programmingLanguages/getProgrammingLanguages`);
    }

    addTechonologie(technologie) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/programmingLanguages/addProgrammingLanguage`,
                  data: technologie,
                  headers: "content-type: application/json",
              });
    }
}
