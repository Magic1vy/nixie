const surveyQuestions = [
    {
    text: "Did you find all the information on the website you were looking for?",
    type: "radio",
    options: ["Yes, all the information is presented clearly and it's easy to find", "No, there are questions for which I could not find answers"]
    },
    {
    text: "What information could you not find on the website?",
    type: "text"
    },
    {
    text: "Do you like the design of the website?",
    type: "radio",
    options: ["Yes", "No"]
    },
    {
    text: "What would you like to see on the website?",
    type: "text"
    },
    {
    text: "Rate the website's performance on a scale from 1 to 10.",
    type: "number"
    }
    // {
    // text: "Как вы оцениваете качество нашего сервиса?",
    // type: "radio",
    // options: ["Отлично", "Хорошо", "Удовлетворительно", "Плохо"]
    // },
    // {
    // text: "Что мы могли бы улучшить?",
    // type: "text"
    // },
];

export default surveyQuestions;