import axios from 'axios';
import { base_url, get_party_list, post_party_create } from '../AllURL';


let get_party = (action) => {
    console.log(action ,"this action from get user");
    return axios.get(base_url + get_party_list).then((res) => {
        console.log(res,"res is get user");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let post_party = (action) => {
    console.log(action, "this action from post user");
    return axios.post(base_url + post_party_create, action.payload).then((res) => {
        console.log(res, "res is post user");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

export {get_party , post_party }