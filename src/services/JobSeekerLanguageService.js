import axios from "axios";

class JobSeekerLanguageService {
    addJobSeekerLanguage(jobSeekerLanguage) {
        axios({
                  method: "POST",
                  url: `http://localhost:8080/api/jobseekerLanguages/addJobseekerLanguages`,
                  data: jobSeekerLanguage,
                  headers: "content-type: application/json",
              });
    }
}
