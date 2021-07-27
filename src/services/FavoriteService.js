import axios from "axios";

export default class FavoriteService {
    getFavorites() {
        return axios.get(`http://localhost:8080/api/favorites/getFavorites`)
    }

    getFavoritesByJobSeekerId(id) {
        return axios.get(`http://localhost:8080/api/favorites/getFavoritesByJobSeekerId?jobSeekerId=${id}`)
    }

    async addFavorite(favorite) {
        return await axios({
                               method: "POST",
                               url: `http://localhost:8080/api/favorites/addFavorite`,
                               data: favorite,
                               headers: {"Content-Type": "application/json;charset-UTF-8"}
                           }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    // deleteFavorite(id) {
    //     return axios.delete(`http://localhost:8080/api/favorites/deleteFavorite?id=${id}`)
    // }

    deleteFavorite(jobSeekerId, jobAdvertId) {
        return axios.delete(`http://localhost:8080/api/favorites/deleteFavoriteByJobSeekerIdAndJobAdvertId?jobAdvertId=${jobAdvertId}&jobSeekerId=${jobSeekerId}`)
    }
}
