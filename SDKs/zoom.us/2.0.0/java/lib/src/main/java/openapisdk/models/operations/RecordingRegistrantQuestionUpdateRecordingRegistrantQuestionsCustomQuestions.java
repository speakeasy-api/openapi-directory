package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public String[] answers;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions withAnswers(String[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum type;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestions withType(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsCustomQuestionsTypeEnum type) {
        this.type = type;
        return this;
    }
}