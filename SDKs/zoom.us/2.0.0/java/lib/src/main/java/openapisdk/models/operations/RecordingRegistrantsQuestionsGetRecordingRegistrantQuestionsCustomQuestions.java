package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum type;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestions withType(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsCustomQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}