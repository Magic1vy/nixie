import axios from "axios";
import Swal from 'sweetalert2';

const postSurveyResponses = async (answers, setIsModalVisible) => {
    if (!answers || answers.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'No answers to submit'
        });
        return;
    }

    try {
        const response = await axios.post('https://nixie.onrender.com/saveSurvey', { answers });
        if (response.status === 200) {
            Swal.fire({
                title: 'Thank you for your responses',
                text: 'Your opinion is very valuable to us.'
            });
            setIsModalVisible(false);
        }
    } catch (error) {
        console.error('Error sending request', error);
        Swal.fire({
            icon: 'error',
            title: 'Error sending data'
        });
    }
};

export { postSurveyResponses };
