import axios from "axios";

class EducationService {
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
                  headers: "content-type: application/json",
              });
    }

}
