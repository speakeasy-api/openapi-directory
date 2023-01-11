package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions
 * Webinar Registrant Questions
**/
public class WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_questions")
    public Object[] customQuestions;
    public WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions withCustomQuestions(Object[] customQuestions) {
        this.customQuestions = customQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public Object[] questions;
    public WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions withQuestions(Object[] questions) {
        this.questions = questions;
        return this;
    }
}