import axios from "axios";

export default class JobAdvertService {
    getJobAdverts() {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdverts`);
    }

    getSortedJobAdverts() {
        return axios.get(`http://localhost:8080/api/jobadverts/getSortedJobAdverts`);
    }

    getActiveJobAdverts() {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getActiveJobAdverts`);
    }

    getActiveJobAdvertsSorted(isDesc) {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getActiveJobAdvertsSorted?isDesc=${isDesc}`);
    }

    getActiveandConfirmedJobAdvert(isDesc) {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdvertByIsActiveTrueAndIsConfirmedTrue?isDesc=${isDesc}`);
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
