package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions
 * Custom Question.
**/
public class MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingRecordingRegistrantsRecordingRegistrationListRegistrantsCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}