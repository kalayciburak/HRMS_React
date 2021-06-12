import axios from "axios";

export default class EmployerService {
    getEmployers() {
        return axios.get(`http://localhost:8080/api/employers/getemployers`);

    }

    getEmployerById(id) {
        return axios.get(
            `http://localhost:8080/api/employers/getByEmployerId?employerId=${id}`);
    }

    addEmployer(employer) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/employers/addemployer`,
                  data: employer,
                  headers: "content-type: application/json",
              });
    }

    deleteEmployerById(id) {
        axios.delete(
            `http://localhost:8080/api/employers/deleteEmployerById?employerId=${id}`);
    }

    deactiveJobAdvert(active, id) {
        axios.post(`http://localhost:8080/api/employers/changeIsActive?active=${active}&jobAdvertId=${id}`)
    }

}
