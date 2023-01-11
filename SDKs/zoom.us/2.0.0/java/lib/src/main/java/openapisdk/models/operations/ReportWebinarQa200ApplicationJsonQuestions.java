package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportWebinarQa200ApplicationJsonQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ReportWebinarQa200ApplicationJsonQuestions withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReportWebinarQa200ApplicationJsonQuestions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question_details")
    public ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails[] questionDetails;
    public ReportWebinarQa200ApplicationJsonQuestions withQuestionDetails(ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails[] questionDetails) {
        this.questionDetails = questionDetails;
        return this;
    }
}