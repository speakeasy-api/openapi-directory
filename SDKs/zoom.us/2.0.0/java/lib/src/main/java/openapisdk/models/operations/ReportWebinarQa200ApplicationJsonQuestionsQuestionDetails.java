package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question")
    public String question;
    public ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails withQuestion(String question) {
        this.question = question;
        return this;
    }
}