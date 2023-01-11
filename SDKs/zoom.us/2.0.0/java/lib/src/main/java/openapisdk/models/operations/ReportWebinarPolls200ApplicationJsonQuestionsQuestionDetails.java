package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling_id")
    public String pollingId;
    public ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails withPollingId(String pollingId) {
        this.pollingId = pollingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question")
    public String question;
    public ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails withQuestion(String question) {
        this.question = question;
        return this;
    }
}