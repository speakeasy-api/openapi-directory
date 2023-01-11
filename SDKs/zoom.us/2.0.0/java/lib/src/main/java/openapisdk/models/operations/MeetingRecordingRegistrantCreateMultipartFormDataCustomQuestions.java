package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions
 * Custom Question.
**/
public class MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingRecordingRegistrantCreateMultipartFormDataCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}