import axios from "axios";

class DepartmentService {
    getDepartments() {
        return axios.get(`http://localhost:8080/api/departments/getDepartments`);
    }

    addDepartment(department) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/departments/addDepartment`,
                  data: department,
                  headers: "content-type: application/json",
              });
    }
}
