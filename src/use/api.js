import axios from "axios";
import { base_url, delete_party_list_findid, get_party_list, post_party_create } from "../AllURL";

let post_party = (action) => {
    console.log(action, "this action from post party");
    return axios.post("http://13.127.211.205:8000/v1/party/create_party", action.payload).then((res) => {
        console.log(res, "res is post party");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let get_party = (action) => {
    // console.log(action, "this action from get party");
    return axios.get(base_url + get_party_list).then((res) => {
        // console.log(res, "res is get party");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let delete_party = (action) => {
    console.log(action, "this action from delete party");
    return axios.delete(base_url + delete_party_list_findid + action.payload).then((res) => {
        console.log(res, "res is delete party");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

export { post_party, get_party, delete_party }