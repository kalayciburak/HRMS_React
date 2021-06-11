import axios from "axios";

class JobPositionService {
    getJobPositions() {
        return axios.get(`http://localhost:8080/api/jobpositions/getpositions`);
    }

    addJobPosition(position) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/jobpositions/addposition`,
                  data: position,
                  headers: "content-type: application/json",
              });
    }
}
