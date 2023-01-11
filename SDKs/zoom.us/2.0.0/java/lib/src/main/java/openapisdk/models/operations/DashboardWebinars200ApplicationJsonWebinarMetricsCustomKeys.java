package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys withValue(String value) {
        this.value = value;
        return this;
    }
}