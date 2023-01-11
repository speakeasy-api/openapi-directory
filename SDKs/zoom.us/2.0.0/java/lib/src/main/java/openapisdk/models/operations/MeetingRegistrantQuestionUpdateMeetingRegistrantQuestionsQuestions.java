package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_name")
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum fieldName;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions withFieldName(MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestionsFieldNameEnum fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public MeetingRegistrantQuestionUpdateMeetingRegistrantQuestionsQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}