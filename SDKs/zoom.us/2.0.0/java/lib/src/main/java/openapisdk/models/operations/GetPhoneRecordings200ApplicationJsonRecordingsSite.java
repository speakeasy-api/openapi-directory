package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPhoneRecordings200ApplicationJsonRecordingsSite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPhoneRecordings200ApplicationJsonRecordingsSite withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPhoneRecordings200ApplicationJsonRecordingsSite withName(String name) {
        this.name = name;
        return this;
    }
}