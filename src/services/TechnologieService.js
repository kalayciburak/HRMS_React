import axios from "axios";

export default class TechnologieService {
    getTechnologies() {
        return axios.get(`http://localhost:8080/api/technologies/getTechnologies`);
    }

    getTechnologieByCurriculaVitaeId(id) {
        return axios.get(`http://localhost:8080/api/technologies/getJobseekerLanguagesByCvId?cvId=${id}`)
    }

    addTechnology(technology) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/technologies/addTechnology`,
                  data: technology,
                  headers: {"Content-Type": "application/json;charset-UTF-8"}
              });
    }

    updateTechnology(technology) {
        axios({
                  method: "PUT",
                  url: `http://localhost:8080/api/technologies/updateTechnology`,
                  data: technology,
                  headers: {"Content-Type": "application/json;charset-UTF-8"}
              });
    }
}
