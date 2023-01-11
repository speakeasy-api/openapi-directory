package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionRequestInput {
    @JsonProperty("transaction")
    public UpdateTransactionInput transaction;
    public TransactionRequestInput withTransaction(UpdateTransactionInput transaction) {
        this.transaction = transaction;
        return this;
    }
}