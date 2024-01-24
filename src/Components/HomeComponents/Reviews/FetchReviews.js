import axios from "axios";
import Swal from 'sweetalert2';


const getAllReviews = (setReview, setLoading) => {
    axios.get(`https://nixie.onrender.com`)
    .then(({data}) => {
        setReview(data);
        setLoading(false);
    })
}
const addReview = (name, setName, comment, setComment, setReview, setIsOpen) => {
    if(name.trim() === "" || comment.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Both fields are required!'
        })
                return;
    }

    axios.post(`https://nixie.onrender.com/saveReviews`, {name, comment})
    .then((data) => {
        setName('');
        setComment('');
        getAllReviews(setReview);
        setIsOpen(false);
    })
}


export { getAllReviews, addReview };