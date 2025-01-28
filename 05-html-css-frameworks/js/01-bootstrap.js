const urlApiBase = 'http://localhost:8000';
const urlApiLogin = '/security/login';
var isNotifyMouseMove = false;

// function clicBoton() {
//     console.log(`Se hizo clic ${urlApiBase}`)
// }

document.getElementById('myloginform').addEventListener('submit', function(event) {
    event.preventDefault();
    let dataForm = FormData(this);
    console.log(JSON.stringify(dataForm));
});

function clicLink() {
    if(!isNotifyMouseMove){
        console.info(`Click en link ${urlApiBase}`)
        isNotifyMouseMove = true;
    }
}