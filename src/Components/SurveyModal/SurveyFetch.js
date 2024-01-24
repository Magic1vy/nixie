import React, { useState } from "react";
import SurveyModal from "../SurveyModal/SurveyModal";
import surveyQuestions from "../SurveyModal/data";
import { postSurveyResponses } from "./SurveyFunction";


const SurveyFetch = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleSubmit = (answers) => {
        postSurveyResponses(answers, setIsModalVisible);
    };

    return isModalVisible ? (
        <SurveyModal questions={surveyQuestions} onSubmit={handleSubmit} />
    ) : null;
};

export default SurveyFetch;
