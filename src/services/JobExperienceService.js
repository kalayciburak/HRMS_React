import axios from "axios";

export default class JobExperienceService {
    getJobExperienceByCvId(cvId) {
        return axios.get(`http://localhost:8080/api/jobexperiences/getJobExperienceByCvId?cvId=${cvId}`);
    }

    addJobExperience(jobExperience) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/jobexperiences/addJobExperience`,
                  data: jobExperience,
                  headers: {"Content-Type": "application/json;charset-UTF-8"}
              });
    }

    deleteJobExperienceById(id) {
        axios.delete(
            `http://localhost:8080/api/jobexperiences/deleteJobExperienceById?id=${id}`);
    }
}
