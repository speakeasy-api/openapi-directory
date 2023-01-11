package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionsResponse {
    @JsonProperty("data")
    public TransactionsResponseData data;
    public TransactionsResponse withData(TransactionsResponseData data) {
        this.data = data;
        return this;
    }
}