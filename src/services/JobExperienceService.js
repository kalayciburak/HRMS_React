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
                  headers: "content-type: application/json",
              });
    }
}
