package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveTransactionWrapper {
    @JsonProperty("transaction")
    public SaveTransaction transaction;
    public SaveTransactionWrapper withTransaction(SaveTransaction transaction) {
        this.transaction = transaction;
        return this;
    }
}