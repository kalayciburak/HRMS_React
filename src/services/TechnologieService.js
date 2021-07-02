import axios from "axios";

export default class TechnologieService {
    getTechnologies() {
        return axios.get(`http://localhost:8080/api/technologies/getTechnologies`);
    }

    getTechnologieByCurriculaVitaeId(id) {
        return axios.get(`http://localhost:8080/api/technologies/getJobseekerLanguagesByCvId?cvId=${id}`)
    }

    addTechonology(technology) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/technologies/addTechnology`,
                  data: technology,
                  headers: "content-type: application/json",
              });
    }
}
