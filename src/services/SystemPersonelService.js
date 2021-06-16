import axios from "axios";

export default class SystemPersonelService {
    getSystemPersonel() {
        return axios.get("http://localhost:8080/api/systemPersonels/getSystemPersonels");
    }

    getSystemPersonelById(id) {
        return axios.get(
            `http://localhost:8080/api/systemPersonels/getSystemPersonelById?systemPersonelId=${id}`);
    }

    async addSystemPersonel(personel) {
        return await axios({
                               method: "POST",
                               url: `http://localhost:8080/api/systemPersonels/addSystemPersonel`,
                               data: personel,
                               headers: {"Content-Type": "application/json;charset-UTF-8"}
                           }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    deleteSystemPersonelById(id) {
        axios.delete(
            `http://localhost:8080/api/systemPersonels/deleteSystemPersonelById?systemPersonelId=${id}`);
    }

    approveJobAdvert(confirm, id) {
        axios.post(`http://localhost:8080/api/systemPersonels/changeIsConfirmed?confirm=${confirm}&jobAdvertId=${id}`);
    }
}
