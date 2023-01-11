package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastWebinarPollResults200ApplicationJsonQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ListPastWebinarPollResults200ApplicationJsonQuestions withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListPastWebinarPollResults200ApplicationJsonQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_details")
    public ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails[] questionDetails;
    public ListPastWebinarPollResults200ApplicationJsonQuestions withQuestionDetails(ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails[] questionDetails) {
        this.questionDetails = questionDetails;
        return this;
    }
}