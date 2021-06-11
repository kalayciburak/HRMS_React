import axios from "axios";

export default class JobAdvertService {
    getJobAdverts() {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdverts`);
    }

    getActiveJobAdverts() {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getActiveJobAdverts`);
    }

    getActiveJobAdvertsSorted() {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getActiveJobAdvertsSorted`);
    }

    addJobAdvert(jobAdvert) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/jobadverts/addJobadvert`,
                  data: jobAdvert,
                  headers: "content-type: application/json",
              });
    }

    getJobAdvertById(id) {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getJobAdvertById?jobAdvertId=${id}`);
    }

    getJobAdvertByCompanyName(name) {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getJobAdvertsByCompanyName?companyName=${name}`);
    }

    deleteJobAdvertById(id) {
        axios.delete(
            `http://localhost:8080/api/jobadverts/deleteJobAdvertById?jobAdvertId=${id}`);
    }
}
