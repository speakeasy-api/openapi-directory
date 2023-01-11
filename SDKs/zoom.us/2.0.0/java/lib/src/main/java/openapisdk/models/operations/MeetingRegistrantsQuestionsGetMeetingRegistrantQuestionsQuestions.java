package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_name")
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum fieldName;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions withFieldName(MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestionsFieldNameEnum fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public MeetingRegistrantsQuestionsGetMeetingRegistrantQuestionsQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}