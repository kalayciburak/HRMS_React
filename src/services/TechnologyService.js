import axios from "axios";

export default class TechnologyService {
    getTechnologies() {
        return axios.get(`http://localhost:8080/api/technologies/getTechnologies`);
    }

    getTechnologieByCurriculaVitaeId(id) {
        return axios.get(`http://localhost:8080/api/technologies/getJobseekerLanguagesByCvId?cvId=${id}`)
    }

    addTechnology(technology) {
        return axios({
                         method: "POST",
                         url: `http://localhost:8080/api/technologies/addTechnology`,
                         data: technology,
                         headers: {"Content-Type": "application/json;charset-UTF-8"}
                     }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        });
    }

    updateTechnology(technology) {
        return axios({
                         method: "PUT",
                         url: `http://localhost:8080/api/technologies/updateTechnology`,
                         data: technology,
                         headers: {"Content-Type": "application/json;charset-UTF-8"}
                     });
    }

    async deleteTechnologyById(id) {
        return await axios.delete(
            `http://localhost:8080/api/technologies/deleteTechnologyById?id=${id}`);
    }
}
