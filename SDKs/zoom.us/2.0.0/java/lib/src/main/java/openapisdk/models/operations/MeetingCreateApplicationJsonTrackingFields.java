package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreateApplicationJsonTrackingFields {
    @JsonProperty("field")
    public String field;
    public MeetingCreateApplicationJsonTrackingFields withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingCreateApplicationJsonTrackingFields withValue(String value) {
        this.value = value;
        return this;
    }
}