package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HybridTransactionsResponse {
    @JsonProperty("data")
    public HybridTransactionsResponseData data;
    public HybridTransactionsResponse withData(HybridTransactionsResponseData data) {
        this.data = data;
        return this;
    }
}