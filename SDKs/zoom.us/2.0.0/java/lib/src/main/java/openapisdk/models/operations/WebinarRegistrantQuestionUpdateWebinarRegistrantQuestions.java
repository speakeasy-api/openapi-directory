package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions
 * Webinar Registrant Questions
**/
public class WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
@SpeakeasyMetadata("multipartForm:name=custom_questions,json")
    public Object[] customQuestions;
    public WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions withCustomQuestions(Object[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
@SpeakeasyMetadata("multipartForm:name=questions,json")
    public Object[] questions;
    public WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions withQuestions(Object[] questions) {
        this.questions = questions;
        return this;
    }
}