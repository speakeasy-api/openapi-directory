package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRegistrantsRegistrationListRegistrantsCustomQuestions
 * Custom Question.
**/
public class MeetingRegistrantsRegistrationListRegistrantsCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRegistrantsRegistrationListRegistrantsCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingRegistrantsRegistrationListRegistrantsCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}