package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions
 * Custom Question.
**/
public class MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingRecordingRegistrantCreateApplicationJsonCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}