package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingsBatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public SettingValueRequest[] requests;
    public SettingsBatchRequest withRequests(SettingValueRequest[] requests) {
        this.requests = requests;
        return this;
    }
}