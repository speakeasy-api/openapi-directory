package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Boolean failed;
    public WebhookStatistics withFailed(Boolean failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalAttempts")
    public Long totalAttempts;
    public WebhookStatistics withTotalAttempts(Long totalAttempts) {
        this.totalAttempts = totalAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFailures")
    public Long totalFailures;
    public WebhookStatistics withTotalFailures(Long totalFailures) {
        this.totalFailures = totalFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSuccesses")
    public Long totalSuccesses;
    public WebhookStatistics withTotalSuccesses(Long totalSuccesses) {
        this.totalSuccesses = totalSuccesses;
        return this;
    }
}