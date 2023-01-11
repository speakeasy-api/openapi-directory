package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InMeetingRecordingControlApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public InMeetingRecordingControlApplicationJson withMethod(String method) {
        this.method = method;
        return this;
    }
}