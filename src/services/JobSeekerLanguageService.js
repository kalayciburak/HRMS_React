import axios from "axios";

export default class JobSeekerLanguageService {

    getJobseekerLanguagesByCvId(id) {
        return axios.get(`http://localhost:8080/api/jobseekerLanguages/getJobseekerLanguagesByCvId?cvId=${id}`)
    }

    addJobSeekerLanguage(jobSeekerLanguage) {
        return axios({
                         method: "POST",
                         url: `http://localhost:8080/api/jobseekerLanguages/addJobseekerLanguages`,
                         data: jobSeekerLanguage,
                         headers: {"Content-Type": "application/json;charset-UTF-8"}
                     }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        });
    }

    deleteJobSeekerLanguageById(id) {
        return axios.delete(
            `http://localhost:8080/api/jobseekerLanguages/deleteJobSeekerLanguageById?id=${id}`);
    }
}
