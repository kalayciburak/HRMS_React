import axios from "axios";

export default class EmployerService {
    getEmployers() {
        return axios.get(`http://localhost:8080/api/employers/getEmployers`);

    }

    getEmployerById(id) {
        return axios.get(
            `http://localhost:8080/api/employers/getByEmployerId?employerId=${id}`);
    }

    async addEmployer(employer) {
        return await axios({
                               method: "POST",
                               url: `http://localhost:8080/api/employers/addEmployer`,
                               data: employer,
                               headers: {"Content-Type": "application/json;charset-UTF-8"}
                           }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    async updateEmployer(employer) {
        return await axios({
                               method: "PUT",
                               url: `http://localhost:8080/api/employers/updateEmployer`,
                               data: employer,
                               headers: {"Content-Type": "application/json;charset-UTF-8"}
                           }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }


    deleteEmployerById(id) {
        return axios.delete(
            `http://localhost:8080/api/employers/deleteEmployerById?employerId=${id}`);
    }

    deactiveJobAdvert(active, id) {
        return axios.post(`http://localhost:8080/api/employers/changeIsActive?active=${active}&jobAdvertId=${id}`)
    }

    changeisUpdated(update, id) {
        return axios.post(`http://localhost:8080/api/employers/changeIsUpdated?employerId=${id}&update=${update}`)
    }

}
