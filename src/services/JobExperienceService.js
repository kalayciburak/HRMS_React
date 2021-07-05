import axios from "axios";

export default class JobExperienceService {
    getJobExperienceByCvId(cvId) {
        return axios.get(`http://localhost:8080/api/jobexperiences/getJobExperienceByCvId?cvId=${cvId}`);
    }

    addJobExperience(jobExperience) {
       return axios({
                        method: "POST",
                        url: `http://localhost:8080/api/jobexperiences/addJobExperience`,
                        data: jobExperience,
                        headers: {"Content-Type": "application/json;charset-UTF-8"}
                    }).then((res) => {
           return res.data.message
       }).catch((err) => {
           return err.error.error
       });
    }

    deleteJobExperienceById(id) {
        return axios.delete(
            `http://localhost:8080/api/jobexperiences/deleteJobExperienceById?id=${id}`);
    }
}
