package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResponse {
    @JsonProperty("data")
    public TransactionResponseData data;
    public TransactionResponse withData(TransactionResponseData data) {
        this.data = data;
        return this;
    }
}