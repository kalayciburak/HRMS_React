import axios from "axios";

export default class EducationService {
    getEducations() {
        return axios.get(`http://localhost:8080/api/educations/getEducations`);
    }

    getEducationsByCvId(cvId) {
        return axios.get(`http://localhost:8080/api/educations/getEducationsByCvId?cvId=${cvId}`)
    }

    async addEducation(education) {
        return await axios({
                               method: "POST",
                               url: `http://localhost:8080/api/educations/addEducation`,
                               data: education,
                               headers: {"Content-Type": "application/json;charset-UTF-8"}
                           }).then((res) => {
            return res.data.message;
        }).catch((e) => {
            return e
        })
    }

    async deleteEducationById(id) {
        return await axios.delete(
            `http://localhost:8080/api/educations/deleteEducationById?id=${id}`);
    }

}
