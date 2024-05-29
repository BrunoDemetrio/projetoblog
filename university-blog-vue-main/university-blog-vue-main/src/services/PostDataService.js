import http from "../http-common";

class PostDataService {
    getAll() {
        return http.get("/posts");
    }

    create(data){
        return http.post("/posts", data);
    }
}

export default new PostDataService();