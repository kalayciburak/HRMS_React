import axios from "axios";

export default class JobAdvertService {
    getJobAdverts() {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdverts`);
    }

    async getSortedJobAdverts() {
        return await axios.get(`http://localhost:8080/api/jobadverts/getSortedJobAdverts`);
    }

    getActiveJobAdverts() {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getActiveJobAdverts`);
    }

    getActiveJobAdvertsSorted(isDesc) {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getActiveJobAdvertsSorted?isDesc=${isDesc}`);
    }

    getJobAdvertByIsActiveTrueAndIsConfirmedTrue() {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdvertByIsActiveTrueAndIsConfirmedTrue`);
    }

    getJobAdvertByIsActiveTrueAndIsConfirmedTrueByPageAsc(pageNo = 1, pageSize = 10) {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdvertByIsActiveTrueAndIsConfirmedTrueByPageAsc?pageNo=${pageNo}&pageSize=${pageSize}`);
    }

    getJobAdvertByIsActiveTrueAndIsConfirmedTrueByPageDesc(pageNo = 1, pageSize = 10) {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdvertByIsActiveTrueAndIsConfirmedTrueByPageDesc?pageNo=${pageNo}&pageSize=${pageSize}`);
    }

    addJobAdvert(jobAdvert) {
       return axios({
                        method: "POST",
                        url: `http://localhost:8080/api/jobadverts/addJobadvert`,
                        data: jobAdvert,
                        headers: "content-type: application/json",
                    }).then((res) => {
           return res.data.message
       }).catch((err) => {
           return err.error.error
       });
    }

    getJobAdvertById(id) {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getJobAdvertById?jobAdvertId=${id}`);
    }

    getJobAdvertByEmployerId(id) {
        return axios.get(`http://localhost:8080/api/jobadverts/getJobAdvertByEmployerId?employerId=${id}`)
    }

    getJobAdvertByCompanyName(name) {
        return axios.get(
            `http://localhost:8080/api/jobadverts/getJobAdvertByCompanyName?companyName=${name}`);
    }

    getActiveAndConfirmedJobAdvertCount() {
        return axios.get(`http://localhost:8080/api/jobadverts/getActiveAndConfirmedJobAdvertCount`)
    }

    deleteJobAdvertById(id) {
        return axios.delete(
            `http://localhost:8080/api/jobadverts/deleteJobAdvertById?jobAdvertId=${id}`);
    }
}
