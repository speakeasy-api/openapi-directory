package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionResponseData {
    @JsonProperty("transaction")
    public TransactionDetail transaction;
    public TransactionResponseData withTransaction(TransactionDetail transaction) {
        this.transaction = transaction;
        return this;
    }
}