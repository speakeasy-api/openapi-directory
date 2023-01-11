package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScheduledTransactionsResponse {
    @JsonProperty("data")
    public ScheduledTransactionsResponseData data;
    public ScheduledTransactionsResponse withData(ScheduledTransactionsResponseData data) {
        this.data = data;
        return this;
    }
}