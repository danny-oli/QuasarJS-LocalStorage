import { date } from "quasar"

export default {
    getGithubUserByUsername: async (username) => {
        const uri = "https://api.github.com/users/" + username;
        const res = await fetch(uri);
        const data = await res.json();
        const timeStamp = Date.now();
        data.date = date.formatDate(timeStamp, "YY-M-DD HH:mm:ss");
        return data
    }
}