package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionsImportResponse {
    @JsonProperty("data")
    public TransactionsImportResponseData data;
    public TransactionsImportResponse withData(TransactionsImportResponseData data) {
        this.data = data;
        return this;
    }
}