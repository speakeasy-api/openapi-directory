package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastMeetingPolls200ApplicationJsonQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ListPastMeetingPolls200ApplicationJsonQuestions withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListPastMeetingPolls200ApplicationJsonQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_details")
    public ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails[] questionDetails;
    public ListPastMeetingPolls200ApplicationJsonQuestions withQuestionDetails(ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails[] questionDetails) {
        this.questionDetails = questionDetails;
        return this;
    }
}