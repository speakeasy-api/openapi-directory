package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MeetingCreate201ApplicationJsonSettingsCustomKeys {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public MeetingCreate201ApplicationJsonSettingsCustomKeys withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MeetingCreate201ApplicationJsonSettingsCustomKeys withValue(String value) {
        this.value = value;
        return this;
    }
}