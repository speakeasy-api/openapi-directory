package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Usage[] metrics;
    public UsagesResponse withMetrics(Usage[] metrics) {
        this.metrics = metrics;
        return this;
    }
}