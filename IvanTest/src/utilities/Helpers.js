/**
 * Created by krival on 8/13/16.
 */

export default {

    byName: function(name){
        const fetchSettings = {
            method: 'GET'
        };
        return fetch('http://api.giphy.com/v1/gifs/translate?s=' + name + '&api_key=dc6zaTOxFJmzC', fetchSettings).then((response) =>{
            return response.json();
        })
    },

    saveOne: function(data, uid) {
        const fetchSettings = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        console.log(data);
        return fetch("https://emerg-58697.firebaseio.com/users", + uid + fetchSettings).then(res => {
            return res.json();
        })
    },

    getAll: function(data) {
        const fetchSettings = {
            method: 'GET',
            body: JSON.stringify(data)
        };
        return fetch("https://emerg-58697.firebaseio.com/user" + localStorage.getItem("uid"), fetchSettings).then(res => {
            return res.json();
        })
    },

    deleteOne: function(id) {
        const fetchSettings = {
            method: 'DELETE',
        };
        return fetch('https://emerg-58697.firebaseio.com/' + id + '.json', fetchSettings).then(res => {
            return res.json();
        })
    }

}