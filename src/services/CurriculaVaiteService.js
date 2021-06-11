import axios from "axios";

class CurriculaVaiteService {
    findCvByJobSeekerId(jobSeekerId) {
        return axios.get(`http://localhost:8080/api/cvs/getCvWithJobSeekerId?jobseekerId=${jobSeekerId}`);
    }

    addCv(cv) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/cvs/addCv`,
                  data: cv,
                  headers: "content-type: application/json",
              });
    }

    addPicture(cvId, file) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/cvs/addPicture?cvId=${cvId}`,
                  data: file,
                  headers: "content-type: application/json",
              });
    }
}
