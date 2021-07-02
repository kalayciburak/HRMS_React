import axios from "axios";

export default class JobSeekerLanguageService {

    getJobseekerLanguagesByCvId(id) {
        return axios.get(`http://localhost:8080/api/jobseekerLanguages/getJobseekerLanguagesByCvId?cvId=${id}`)
    }

    addJobSeekerLanguage(jobSeekerLanguage) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/jobseekerLanguages/addJobseekerLanguages`,
                  data: jobSeekerLanguage,
                  headers: "content-type: application/json",
              });
    }
}
