package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportMeetingPolls200ApplicationJsonQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ReportMeetingPolls200ApplicationJsonQuestions withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReportMeetingPolls200ApplicationJsonQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_details")
    public ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails[] questionDetails;
    public ReportMeetingPolls200ApplicationJsonQuestions withQuestionDetails(ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails[] questionDetails) {
        this.questionDetails = questionDetails;
        return this;
    }
}