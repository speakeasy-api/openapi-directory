package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingRegistrantCreateMultipartFormDataCustomQuestions
 * Custom Question.
**/
public class MeetingRegistrantCreateMultipartFormDataCustomQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MeetingRegistrantCreateMultipartFormDataCustomQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingRegistrantCreateMultipartFormDataCustomQuestions withValue(String value) {
        this.value = value;
        return this;
    }
}