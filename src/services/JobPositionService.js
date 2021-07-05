import axios from "axios";

export default class JobPositionService {
    getJobPositions() {
        return axios.get(`http://localhost:8080/api/jobpositions/getpositions`);
    }

    addJobPosition(position) {
        return axios({
                         method: "POST",
                         url: `http://localhost:8080/api/jobpositions/addposition`,
                         data: position,
                         headers: "content-type: application/json",
                     }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        });
    }
}
