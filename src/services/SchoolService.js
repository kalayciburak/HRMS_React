import axios from "axios";

class SchoolService {
    getSchools() {
        return axios.get(`http://localhost:8080/api/schools/getSchools`);
    }

    addSchool(school) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/schools/addSchool`,
                  data: school,
                  headers: "content-type: application/json",
              });
    }
}
