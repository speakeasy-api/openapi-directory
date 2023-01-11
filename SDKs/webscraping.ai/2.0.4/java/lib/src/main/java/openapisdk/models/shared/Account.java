package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remaining_api_calls")
    public Long remainingApiCalls;
    public Account withRemainingApiCalls(Long remainingApiCalls) {
        this.remainingApiCalls = remainingApiCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remaining_concurrency")
    public Long remainingConcurrency;
    public Account withRemainingConcurrency(Long remainingConcurrency) {
        this.remainingConcurrency = remainingConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resets_at")
    public Long resetsAt;
    public Account withResetsAt(Long resetsAt) {
        this.resetsAt = resetsAt;
        return this;
    }
}