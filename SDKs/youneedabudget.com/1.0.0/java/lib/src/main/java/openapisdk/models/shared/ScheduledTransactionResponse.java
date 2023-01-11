package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScheduledTransactionResponse {
    @JsonProperty("data")
    public ScheduledTransactionResponseData data;
    public ScheduledTransactionResponse withData(ScheduledTransactionResponseData data) {
        this.data = data;
        return this;
    }
}