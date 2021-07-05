import axios from "axios";

export default class DepartmentService {
    getDepartments() {
        return axios.get(`http://localhost:8080/api/departments/getDepartments`);
    }

    addDepartment(department) {
       return axios({
                        method: "POST",
                        url: `http://localhost:8080/api/departments/addDepartment`,
                        data: department,
                        headers: "content-type: application/json",
                    }).then((res) => {
           return res.data.message
       }).catch((err) => {
           return err.error.error
       });
    }
}
