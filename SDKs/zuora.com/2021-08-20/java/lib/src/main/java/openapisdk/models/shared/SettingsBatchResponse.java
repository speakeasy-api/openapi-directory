package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingsBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public SettingValueResponseWrapper[] responses;
    public SettingsBatchResponse withResponses(SettingValueResponseWrapper[] responses) {
        this.responses = responses;
        return this;
    }
}