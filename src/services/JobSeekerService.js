import axios from "axios";

export default class JobSeekerService {
    getJobSeekers() {
        return axios.get(`http://localhost:8080/api/jobseekers/getJobseekers`);
    }

    getJobSeekerById(id) {
        return axios.get(`http://localhost:8080/api/jobseekers/getJobSeekerById?jobSeekerId=${id}`);
    }

    addJobSeeker(jobseeker) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/jobseekers/addJobseeker`,
                  data: jobseeker,
                  headers: "content-type: application/json",
              });
    }

    deleteJobSeekerById(id) {
        axios.delete(`http://localhost:8080/api/jobseekers/deleteJobSeekerById?jobSeekerId=${id}`);
    }
}
