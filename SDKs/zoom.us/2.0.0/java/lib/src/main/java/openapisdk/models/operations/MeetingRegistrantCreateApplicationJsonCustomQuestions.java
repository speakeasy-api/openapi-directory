package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRegistrantCreateApplicationJsonCustomQuestions
 * Custom Question.
**/
public class MeetingRegistrantCreateApplicationJsonCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRegistrantCreateApplicationJsonCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingRegistrantCreateApplicationJsonCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}