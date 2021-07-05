import axios from "axios";

export default class JobSeekerService {
    getJobSeekers() {
        return axios.get(`http://localhost:8080/api/jobseekers/getJobseekers`);
    }

    getJobSeekerById(id) {
        return axios.get(`http://localhost:8080/api/jobseekers/getJobSeekerById?jobSeekerId=${id}`);
    }

    async addJobSeeker(jobseeker) {
        return await axios({
                               method: "POST",
                               url: `http://localhost:8080/api/jobseekers/addJobseeker`,
                               data: jobseeker,
                               headers: {"Content-Type": "application/json;charset-UTF-8"}
                           }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    deleteJobSeekerById(id) {
       return axios.delete(`http://localhost:8080/api/jobseekers/deleteJobSeekerById?jobSeekerId=${id}`);
    }
}
