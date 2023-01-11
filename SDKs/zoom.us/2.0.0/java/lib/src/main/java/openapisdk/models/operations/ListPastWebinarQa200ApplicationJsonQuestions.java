package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastWebinarQa200ApplicationJsonQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ListPastWebinarQa200ApplicationJsonQuestions withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListPastWebinarQa200ApplicationJsonQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_details")
    public ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails[] questionDetails;
    public ListPastWebinarQa200ApplicationJsonQuestions withQuestionDetails(ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails[] questionDetails) {
        this.questionDetails = questionDetails;
        return this;
    }
}