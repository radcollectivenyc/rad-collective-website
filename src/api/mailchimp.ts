import axios from 'axios'

export const subscribeToMailingList =  (email: string, firstName: string, lastName: string) =>
    axios.get(`https://radnyc.us16.list-manage.com/subscribe/post?u=9018387db6724adec5c864ae6&id=f15ad2ec50&f_id=00351be1f0&email=${email}&fname=${firstName}&lname=${lastName}`);