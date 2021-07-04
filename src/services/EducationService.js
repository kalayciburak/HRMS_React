import axios from "axios";

export default class EducationService {
    getEducations() {
        return axios.get(`http://localhost:8080/api/educations/getEducations`);
    }

    getEducationsByCvId(cvId) {
        return axios.get(`http://localhost:8080/api/educations/getEducationsByCvId?cvId=${cvId}`)
    }

    addEducation(education) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/educations/addEducation`,
                  data: education,
                  headers: {"Content-Type": "application/json;charset-UTF-8"}
              });
    }

    deleteEducationById(id) {
        axios.delete(
            `http://localhost:8080/api/educations/deleteEducationById?id=${id}`);
    }

}
