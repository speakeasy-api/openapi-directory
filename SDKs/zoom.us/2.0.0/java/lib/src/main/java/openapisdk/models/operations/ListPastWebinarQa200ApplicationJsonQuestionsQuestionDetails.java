package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question")
    public String question;
    public ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails withQuestion(String question) {
        this.question = question;
        return this;
    }
}