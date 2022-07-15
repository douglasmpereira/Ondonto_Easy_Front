import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://62cdf432a43bf780086112b7.mockapi.io/'
//     /*http://localhost:8080/api/ */
//     //CASO NECESSÁRIO, PASSAR O TOKEN
//     //headers: {"Authorization" : "TOKEN"}
// })
// export default api;
const api = axios.create({
    baseURL: 'https://62cdf432a43bf780086112b7.mockapi.io/'
    /*http://localhost:8080/api/ */
    //CASO NECESSÁRIO, PASSAR O TOKEN
    //api de  agendamento
    //headers: {"Authorization" : "TOKEN"}
})
export default api;


