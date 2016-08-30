import firebaseapp from 'firebase';

const config = {
    apiKey: "AIzaSyAVPLQIrTnjyWc3rn7Ju_6trXW1pLU6IjI",
    authDomain: "emerg-58697.firebaseapp.com",
    databaseURL: "https://emerg-58697.firebaseio.com",
    storageBucket: "emerg-58697.appspot.com",
};
firebaseapp.initializeApp(config);

const firebaseUtils = {
    SignUp: function (email, pass, obj) {
        const auth = firebaseapp.auth();
        auth.createUserWithEmailAndPassword(email, pass).catch((error) => {
            if (error) {
                console.log("error: ", error)
            }
        }).then((res) => {
            console.log(res);
            firebase.database().ref('users/'+res.uid).set({
                firstName: obj.firstName,
                lastName: obj.lastName,
                displayName: obj.userName,
                email: obj.email,
                phone: obj.phone
            })
        })
    },

    SignIn: function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            console.error(error.code, error.message);
        }).then((res) => {
            console.log(res);
            console.log(res.uid);
            window.localStorage.setItem("uid", res.uid);
            console.info(window.localStorage.getItem("uid"));
        })
    },

    SignOut: function (event) {

        firebase.auth().signOut().then(function () {
            console.log("Peace Out")
        }, function (error) {
            console.log(error)
        });
    }

}

export default firebaseUtils;
