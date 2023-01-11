package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_name")
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum fieldName;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions withFieldName(RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestionsFieldNameEnum fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public RecordingRegistrantQuestionUpdateRecordingRegistrantQuestionsQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}