package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveTransactionsResponse {
    @JsonProperty("data")
    public SaveTransactionsResponseData data;
    public SaveTransactionsResponse withData(SaveTransactionsResponseData data) {
        this.data = data;
        return this;
    }
}