import axios from "axios";

export default class SchoolService {
    getSchools() {
        return axios.get(`http://localhost:8080/api/schools/getSchools`);
    }

    addSchool(school) {
       return axios({
                        method: "POST",
                        url: `http://localhost:8080/api/schools/addSchool`,
                        data: school,
                        headers: "content-type: application/json",
                    }).then((res) => {
           return res.data.message
       }).catch((err) => {
           return err.error.error
       });
    }
}
