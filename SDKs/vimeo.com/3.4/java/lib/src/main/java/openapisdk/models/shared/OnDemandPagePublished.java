package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPagePublished {
    @JsonProperty("enabled")
    public Boolean enabled;
    public OnDemandPagePublished withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("time")
    public String time;
    public OnDemandPagePublished withTime(String time) {
        this.time = time;
        return this;
    }
}