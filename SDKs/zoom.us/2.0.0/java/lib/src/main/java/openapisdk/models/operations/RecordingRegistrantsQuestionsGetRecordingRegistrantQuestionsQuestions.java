package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_name")
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum fieldName;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions withFieldName(RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestionsFieldNameEnum fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public RecordingRegistrantsQuestionsGetRecordingRegistrantQuestionsQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}