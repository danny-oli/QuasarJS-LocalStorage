import { date } from "quasar"

export default {
    getGithubUserByUsername: async (username) => {
        const uri = "https://api.github.com/users/" + username;
        const res = await fetch(uri);
        const data = await res.json();
        const timeStamp = Date.now();
        data.date = date.formatDate(timeStamp, "YY-M-DD HH:mm:ss");
        if(!data.login){
            data.login = username;
            data.name = 'Not Found';
            data.type = data.message;
            data.avatar_url= require('../assets/images/user-not-found.jpg')
        }
        return data
    }
}